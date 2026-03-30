'use client';

import React, { useEffect, useState } from 'react';
import GameGrid from './GameGrid';
import { Game } from '../types';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { ArrowUp } from 'lucide-react';

interface GameListManagerProps {
	initialGames: Game[];
	currentGenre?: string;
	search?: string;
}

function GameListManager({
	initialGames,
	currentGenre = '',
	search = '',
}: GameListManagerProps) {
	const [games, setGames] = useState<Game[]>(initialGames);
	const [hasMore, setHasMore] = useState<boolean>(true);
	const [page, setPage] = useState<number>(1);
	const [loading, setLoading] = useState<boolean>(false);
	const [showTopBtn, setShowTopBtn] = useState<boolean>(false);

	const { sentinelRef, isInView } = useInfiniteScroll();

	useEffect(() => {
		setGames(initialGames);
		setPage(1);
	}, [initialGames]);

	useEffect(() => {
		if (!isInView || loading) return;

		const scrollHandler = () => {
			if (window.scrollY > 400) setShowTopBtn(true);
		};
		window.addEventListener('scroll', scrollHandler);

		const getMoreGames = async () => {
			if (!hasMore) return;

			setLoading(true);
			try {
				let fetchUrl = `/api/games?page=${page + 1}`;
				if (search) fetchUrl = fetchUrl + `&search=${search}`;
				if (currentGenre) fetchUrl = fetchUrl + `&genres=${currentGenre}`;
				const gamesRes = await fetch(fetchUrl);
				const games = await gamesRes.json();
				if (games.length === 0) {
					setHasMore(false);
					return;
				}
				setGames((prevGames) => [...prevGames, ...games]);
				setPage((prevPage) => prevPage + 1);
			} catch (e) {
				console.error(e);
			} finally {
				setLoading(false);
			}
		};

		getMoreGames();

		return () => window.removeEventListener('scroll', scrollHandler);
	}, [currentGenre, hasMore, isInView, loading, page, search, showTopBtn]);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setShowTopBtn(false);
	};

	return (
		<>
			<GameGrid games={games} ref={sentinelRef} />
			{loading && games.length !== 0 && (
				<div className="w-84 p-4 border border-slate-200 flex flex-col rounded-md gap-6">
					<div className="h-40 w-full border border-slate-200 rounded-sm"></div>
					<div className="h-10 w-full border border-slate-200 rounded-sm"></div>
					<div className="h-10 w-full border border-slate-200 rounded-sm"></div>
					<div className="flex flex-wrap gap-4">
						{Array.from({ length: 3 }, (_, idx) => (
							<div
								key={idx}
								className="h-7 w-16 border border-slate-200 rounded-sm"
							></div>
						))}
					</div>
				</div>
			)}
			{!hasMore && (
				<div className="flex gap-8 items-center">
					<h3 className="text-xl text-center py-10 opacity-70">
						{`You've reached the end of the vault! 🎮`}{' '}
					</h3>
					{showTopBtn && (
						<span className="cursor-pointer" onClick={scrollToTop}>
							<ArrowUp />
						</span>
					)}
				</div>
			)}
		</>
	);
}

export default GameListManager;

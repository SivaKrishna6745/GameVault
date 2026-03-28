'use client';

import React, { useEffect, useState } from 'react';
import GameGrid from './GameGrid';
import { Game } from '../types';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

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
	const [page, setPage] = useState<number>(1);
	const [loading, setLoading] = useState<boolean>(false);

	const { sentinelRef, isInView } = useInfiniteScroll();

	useEffect(() => {
		setGames(initialGames);
		setPage(1);
	}, [initialGames]);

	useEffect(() => {
		if (!isInView || loading) return;

		const getMoreGames = async () => {
			setLoading(true);
			try {
				let fetchUrl = `/api/games?page=${page + 1}`;
				if (search) fetchUrl = fetchUrl + `&query=${search}`;
				if (currentGenre) fetchUrl = fetchUrl + `&genres=${currentGenre}`;
				const gamesRes = await fetch(fetchUrl);
				const games = await gamesRes.json();
				if (games.length === 0) return;
				setGames((prevGames) => [...prevGames, ...games]);
				setPage((prevPage) => prevPage + 1);
			} catch (e) {
				console.error(e);
			} finally {
				setLoading(false);
			}
		};

		getMoreGames();
	}, [currentGenre, isInView, loading, page, search]);

	return (
		<>
			<GameGrid games={games} ref={sentinelRef} />;
			{loading && (
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
		</>
	);
}

export default GameListManager;

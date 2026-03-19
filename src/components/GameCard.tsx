/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useEffect, useState } from 'react';
import { Game, PlatformWrapper, Tag } from '@/src/types';
import Link from 'next/link';
import { Bookmark } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/src/lib/store/hooks';
import {
	addToVault,
	removeFromVault,
} from '@/src/lib/store/features/vault/vaultSlice';
import Carousel from './Carousel';
import { usePathname } from 'next/navigation';
import UserRating from './UserRating';

interface GameProps {
	game: Game;
	isLink?: boolean;
}

const GameCardContent = ({ game, isLink }: { game: Game; isLink: boolean }) => {
	const {
		name,
		released,
		background_image,
		background_image_additional,
		platforms,
		tags,
		rating,
	} = game;

	const pathname = usePathname();

	const carouselImages = [background_image, background_image_additional].filter(
		Boolean,
	);

	const tagsList = tags.map((tag: Tag) => (
		<li
			key={tag.slug}
			className="bg-slate-500 rounded-md px-3 py-1 text-sm tracking-wide"
		>
			{tag.slug}
		</li>
	));

	const platformsList = platforms.map((plWrapper: PlatformWrapper) => {
		const pl = plWrapper.platform;
		return (
			<li
				key={pl.slug}
				className="bg-slate-500 rounded-md px-3 py-1 text-sm tracking-wide"
			>
				{pl.slug}
			</li>
		);
	});

	return (
		<>
			<Carousel name={name} images={carouselImages} isLink={isLink} />
			<h3 className="text-xl font-semibold">{name}</h3>
			<h3 className="text-lg">{rating}</h3>
			{!isLink && (
				<>
					<h3>Released in: {released}</h3>
					<ul className="list-none flex flex-wrap gap-2 pointer-events-none">
						{tagsList}
					</ul>
				</>
			)}
			<ul className="list-none flex flex-wrap gap-2 pointer-events-none">
				{platformsList}
			</ul>
			{pathname === '/mygames' && (
				<UserRating gameId={game.id} currRating={game.user_rating} />
			)}
		</>
	);
};

function GameCard({ game, isLink = true }: GameProps) {
	const { slug, genres } = game;
	const genre = genres?.[0]?.slug.toLowerCase() || 'unknown';
	const cardClassName =
		'rounded-md p-4 relative aspect-video h-max shadow-[0_0_2px_1px_rgba(256,256,256,0.7)] transition-all duration-200';

	//check if the app is mounted or not
	const [mounted, setMounted] = useState<boolean>(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	const savedGames = useAppSelector((state) => state.vault.savedGames);
	const isBookmarked = savedGames.some((g: Game) => g.id === game.id);
	const dispatch = useAppDispatch();

	const handleBookmark = (e: React.MouseEvent, game: Game) => {
		e.preventDefault();

		if (isBookmarked) {
			dispatch(removeFromVault(game.id));
		} else {
			dispatch(addToVault(game));
		}
	};

	return (
		<div
			className={`${cardClassName} ${isLink ? 'hover:scale-102 hover:shadow-[1px_1px_3px_2px_rgba(256,256,256,0.8)]' : 'max-w-4xl w-full aspect-video justify-self-center'} group`}
		>
			<button
				className={`mr-4 cursor-pointer absolute right-5 z-20 ${isLink ? 'top-72' : 'top-130'}`}
				onClick={(e) => handleBookmark(e, game)}
			>
				<Bookmark
					size={isLink ? 32 : 52}
					fill={isBookmarked && mounted ? '#a1a1a1' : 'none'}
					color="#a1b2c3"
				/>
			</button>

			{isLink ? (
				<Link
					href={`/${genre}/${slug}`}
					className="cursor-pointer flex flex-col gap-6"
				>
					<GameCardContent game={game} isLink={isLink} />
				</Link>
			) : (
				<div className="flex flex-col gap-6">
					<GameCardContent game={game} isLink={false} />
				</div>
			)}
		</div>
	);
}

export default GameCard;

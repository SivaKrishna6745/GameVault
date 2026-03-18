/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useEffect, useState } from 'react';
import { Game } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Bookmark } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import {
	addToVault,
	removeFromVault,
} from '@/lib/store/features/vault/vaultSlice';

interface GameProps {
	game: Game;
	isLink?: boolean;
}

const imageStyle = {
	width: '100%',
	height: '200px',
};

const GameCardContent = ({ game }: { game: Game }) => {
	const { name, background_image, rating } = game;

	return (
		<>
			<Image
				src={background_image}
				alt={name}
				height={0}
				width={0}
				unoptimized
				className="rounded-md group-hover:scale-105 transition-all duration-200"
				style={imageStyle}
			/>
			<div className="mt-4">
				<h3 className="text-xl font-semibold">{name}</h3>
				<h3 className="text-lg">{rating}</h3>
			</div>
		</>
	);
};

function GameCard({ game, isLink = true }: GameProps) {
	const { slug, genres } = game;
	const genre = genres?.[0]?.slug.toLowerCase() || 'unknown';
	const cardClassName =
		'rounded-md p-4 relative aspect-video h-max shadow-[1px_1px_2px_2px_rgba(256,256,256,0.7)] hover:scale-102 hover:shadow-[2px_2px_3px_2px_rgba(256,256,256,0.8)] transition-all duration-200';

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
		<div className={`${cardClassName} group`}>
			<button
				className="mr-4 cursor-pointer absolute bottom-5 right-5 z-20"
				onClick={(e) => handleBookmark(e, game)}
			>
				<Bookmark
					size={32}
					fill={isBookmarked && mounted ? '#a1a1a1' : 'none'}
					color="#a1b2c3"
				/>
			</button>

			{isLink ? (
				<Link href={`/${genre}/${slug}`} className="absolute inset-0 z-10">
					<span className="sr-only">View Details</span>
				</Link>
			) : null}

			<div className="pointer-events-none">
				<GameCardContent game={game} />
			</div>
		</div>
	);
}

export default GameCard;

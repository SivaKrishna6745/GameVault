'use client';

import React from 'react';
import { Game } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Bookmark } from 'lucide-react';

interface GameProps {
	game: Game;
	isLink?: boolean;
}

const imageStyle = {
	borderRadius: '4px',
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
				className="object-contain rounded-sm"
				style={imageStyle}
			/>
			<h3 className="text-xl font-semibold">{name}</h3>
			<h3 className="text-lg">{rating}</h3>
			<Bookmark />
		</>
	);
};

function GameCard({ game, isLink = true }: GameProps) {
	const { slug, genres } = game;
	const genre = genres[0].name.toLowerCase();

	return (
		<>
			{isLink ? (
				<Link
					href={`/${genre}/${slug}`}
					className="border border-slate-300 rounded-sm p-4 relative aspect-video h-max"
				>
					<GameCardContent game={game} />
				</Link>
			) : (
				<div className="border border-slate-300 rounded-sm p-4 relative aspect-video h-max">
					<GameCardContent game={game} />
				</div>
			)}
		</>
	);
}

export default GameCard;

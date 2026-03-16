'use client';

import React from 'react';
import { Game } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Bookmark } from 'lucide-react';

interface GameProps {
	game: Game;
}

const imageStyle = {
	borderRadius: '4px',
	width: '100%',
	height: '200px',
};

function GameCard({ game }: GameProps) {
	const { name, background_image, rating } = game;
	const slugName = name.toLowerCase().replaceAll(' ', '-');

	return (
		<Link
			href={`/genre/${slugName}`}
			className="border border-slate-300 rounded-sm p-4 relative aspect-video"
		>
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
		</Link>
	);
}

export default GameCard;

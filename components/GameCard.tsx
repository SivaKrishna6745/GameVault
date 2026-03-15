import React from 'react';
import { Game } from './GameGrid';
import Image from 'next/image';
import Link from 'next/link';

interface GameProps {
    game: Game;
}

function GameCard({ game }: GameProps) {
    const { name, background_image, rating } = game;
    const slugName = name.toLowerCase().replaceAll(' ', '-');

    return (
        <Link href={`/genre/${slugName}`} className="border border-slate-300 rounded-sm p-4 relative aspect-video">
            <Image src={background_image} alt={name} fill className="object-cover" />
            <h3 className="text-xl font-semibold">{name}</h3>
            <h3 className="text-lg">{rating}</h3>
        </Link>
    );
}

export default GameCard;

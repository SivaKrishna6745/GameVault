'use client';

import { Game } from '@/src/types';
import GameCard from './GameCard';
import { forwardRef } from 'react';
interface GameGridProps {
	games: Game[];
}

const GameGrid = forwardRef<HTMLDivElement, GameGridProps>(({ games }, ref) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
			{games.map((game: Game) => (
				<GameCard key={game.id} game={game} />
			))}
			<div ref={ref} className="h-10 invisible"></div>
		</div>
	);
});

GameGrid.displayName = 'GameGrid';

export default GameGrid;

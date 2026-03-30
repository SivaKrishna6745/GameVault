'use client';

import { Game } from '@/src/types';
import GameCard from './GameCard';
import { forwardRef } from 'react';
interface GameGridProps {
	games: Game[];
}

const GameGrid = forwardRef<HTMLDivElement, GameGridProps>(({ games }, ref) => {
	return (
		<div className="columns-1 lg:columns-2 xl:columns-3 gap-6 space-y-6">
			{games.map((game: Game) => (
				<div key={game.id} className="break-inside-avoid">
					<GameCard game={game} />
				</div>
			))}
			<div ref={ref} className="h-10 invisible"></div>
		</div>
	);
});

GameGrid.displayName = 'GameGrid';

export default GameGrid;

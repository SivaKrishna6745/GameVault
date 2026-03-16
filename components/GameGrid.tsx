import { Game } from '@/types';
import GameCard from './GameCard';

interface GameGridProps {
	games: Game[];
}

function GameGrid({ games }: GameGridProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{games.map((game: Game) => (
				<GameCard key={game.id} game={game} />
			))}
		</div>
	);
}

export default GameGrid;

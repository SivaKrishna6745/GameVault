import { Game } from '@/src/types';
import GameCard from './GameCard';

interface GameGridProps {
    games: Game[];
}

function GameGrid({ games }: GameGridProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {games.map((game: Game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    );
}

export default GameGrid;

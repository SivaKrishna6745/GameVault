import GameCard from '@/src/components/GameCard';
import { getGame } from '@/src/lib/api';
import type { Game } from '@/src/types';

async function Game({ params }: { params: { game: string } }) {
	const { game } = await params;
	const gameDetails: Game = await getGame(game);

	return <GameCard game={gameDetails} isLink={false} />;
}

export default Game;

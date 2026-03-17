import GameCard from '@/components/GameCard';
import { getGame } from '@/lib/api';
import type { Game } from '@/types';

async function Game({ params }: { params: { game: string } }) {
	const { game } = await params;
	const gameDetails: Game = await getGame(game);

	return <GameCard game={gameDetails} isLink={false} />;
}

export default Game;

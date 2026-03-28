import GameListManager from '@/src/components/GameListManager';
import { getAllGames } from '@/src/lib/api';
import { Game } from '@/src/types';

export default async function Home() {
	const games: Game[] = await getAllGames();

	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-3xl font-bold">All Games</h2>
			<GameListManager initialGames={games} />
		</div>
	);
}

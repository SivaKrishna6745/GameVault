import GameGrid from '@/components/GameGrid';
import { Game } from '@/types';

async function getGames() {
	const API_KEY = process.env.RAWG_API_KEY;
	const response = await fetch(`https:/api.rawg.io/api/games?key=${API_KEY}`);
	if (!response.ok) throw new Error('Error while fetching data!!');
	const gamesData = await response.json();
	return gamesData.results;
}

export default async function Home() {
	const games: Game[] = await getGames();
	console.log(games);

	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-3xl font-bold">Game Vault</h2>
			<GameGrid games={games} />
		</div>
	);
}

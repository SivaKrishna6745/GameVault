import GameListManager from '@/src/components/GameListManager';
import { getGamesByGenre } from '@/src/lib/api';

async function Genre({ params }: { params: { genre: string } }) {
	const { genre } = await params;
	const games = await getGamesByGenre(genre.toLowerCase());

	return (
		<div>
			<h2 className="text-2xl font-semibold capitalize text-center mb-4">
				{genre} games
			</h2>
			<GameListManager currentGenre={genre} initialGames={games} />
		</div>
	);
}

export default Genre;

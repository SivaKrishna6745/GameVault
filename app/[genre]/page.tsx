import GameGrid from '@/components/GameGrid';
import { getGamesByGenre } from '@/lib/api';

async function Genre({ params }: { params: { genre: string } }) {
	const { genre } = await params;
	const games = await getGamesByGenre(genre.toLowerCase());

	return (
		<div>
			<h2 className="text-2xl font-semibold capitalize text-center mb-4">
				{genre} games
			</h2>
			<GameGrid games={games} />
		</div>
	);
}

export default Genre;

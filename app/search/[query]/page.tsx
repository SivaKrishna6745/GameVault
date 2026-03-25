import GameGrid from '@/src/components/GameGrid';
import { searchGames } from '@/src/lib/api';
import React from 'react';

async function page({ params }: { params: { query: string } }) {
	const { query } = await params;
	const decodedQuery = decodeURIComponent(query);
	const games = await searchGames(decodedQuery);

	return (
		<div className="p-4 flex flex-col gap-6">
			<h2 className="text-2xl font-bold border-b border-slate-700 pb-2">
				Search Results for:{' '}
				<span className="text-blue-400">{decodedQuery}</span>
			</h2>
			{games && games.length > 0 ? (
				<GameGrid games={games} />
			) : (
				<div className="flex flex-col items-center justify-center gap-4 py-20 opacity-60">
					<span className="text-6xl mb-2">🔍</span>
					<h3 className="text-xl">{`No games found for "${decodedQuery}"`}</h3>
					<p>Try checking your spelling or searching for a broader term.</p>
				</div>
			)}
		</div>
	);
}

export default page;

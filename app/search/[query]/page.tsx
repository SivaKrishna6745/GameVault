import GameGrid from '@/src/components/GameGrid';
import { searchGames } from '@/src/lib/api';
import React from 'react';

async function page({ params }: { params: { query: string } }) {
	const { query } = await params;
	const searchedGames = await searchGames(query);

	return <GameGrid games={searchedGames} />;
}

export default page;

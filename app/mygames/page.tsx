'use client';

import React from 'react';
import { useAppSelector } from '@/lib/store/hooks';
import GameGrid from '@/components/GameGrid';

function MyGamesPage() {
	const games = useAppSelector((state) => state.vault.savedGames);

	return (
		<div>
			<h3 className="text-2xl font-semibold">My Vault</h3>
			<GameGrid games={games} />
		</div>
	);
}

export default MyGamesPage;

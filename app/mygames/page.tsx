/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@/src/lib/store/hooks';
import GameGrid from '@/src/components/GameGrid';

function MyGamesPage() {
	const games = useAppSelector((state) => state.vault.savedGames);
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted)
		return (
			<div>
				<GameGrid games={[]} />
			</div>
		);
	return (
		<div>
			<h3 className="text-2xl font-semibold text-center mb-4">My Vault</h3>
			{games.length > 0 ? (
				<GameGrid games={games} />
			) : (
				<div className="text-lg text-slate-400 mt-4">
					There are no games in your Vault. Go back and bookmark some games to
					see!!
				</div>
			)}
		</div>
	);
}

export default MyGamesPage;

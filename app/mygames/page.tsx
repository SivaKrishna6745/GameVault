/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@/lib/store/hooks';
import GameGrid from '@/components/GameGrid';

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
			<h3 className="text-2xl font-semibold">My Vault</h3>
			<GameGrid games={games} />
		</div>
	);
}

export default MyGamesPage;

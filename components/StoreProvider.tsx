'use client';

import { rehydrateVault } from '@/lib/store/features/vault/vaultSlice';
import { store } from '@/lib/store/store';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

function StoreProvider({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		const savedData = localStorage.getItem('gameVault');
		if (savedData) {
			try {
				const games = JSON.parse(savedData);
				store.dispatch(rehydrateVault(games));
			} catch (err) {
				console.error('Failed to parse vault data', err);
			}
		}
	}, []);

	return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;

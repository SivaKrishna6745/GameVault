import { configureStore, Middleware } from '@reduxjs/toolkit';
import vaultReducer from './features/vault/vaultSlice';

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
	const result = next(action);
	if (typeof action === 'object' && action !== null && 'type' in action) {
		if (typeof action.type === 'string' && action.type.startsWith('vault/')) {
			const state = store.getState() as RootState;
			// Check for window to avoid Next.js server-side errors
			if (typeof window !== 'undefined') {
				localStorage.setItem(
					'gameVault',
					JSON.stringify(state.vault.savedGames),
				);
			}
		}
	}
	return result;
};

export const store = configureStore({
	reducer: { vault: vaultReducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

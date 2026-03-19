import { Game } from '@/src/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
	savedGames: Game[];
};
const initialState: InitialState = {
	savedGames: [],
};

export const vaultSlice = createSlice({
	name: 'vault',
	initialState,
	reducers: {
		addToVault: (state: InitialState, action: PayloadAction<Game>) => {
			const gameExists = state.savedGames.find(
				(g: Game) => g.id === action.payload.id,
			);
			if (!gameExists) state.savedGames.push(action.payload);
		},
		updateRating: (
			state: InitialState,
			action: PayloadAction<{ id: number; user_rating: number }>,
		) => {
			const { id, user_rating } = action.payload;
			const game = state.savedGames.find((game: Game) => game.id === id);
			if (game) {
				game.user_rating = user_rating;
			}
		},
		removeFromVault: (state: InitialState, action: PayloadAction<number>) => {
			state.savedGames = state.savedGames.filter(
				(game: Game) => game.id !== action.payload,
			);
		},
		rehydrateVault: (state: InitialState, action: PayloadAction<Game[]>) => {
			state.savedGames = action.payload;
		},
	},
});

export const { addToVault, updateRating, removeFromVault, rehydrateVault } =
	vaultSlice.actions;
export default vaultSlice.reducer;

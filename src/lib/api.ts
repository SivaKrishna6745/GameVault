const API_KEY = process.env.RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api';

export const getAllGames = async () => {
	const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&page_size=40`);
	if (!response.ok) throw new Error('Error while fetching all games!');
	const gamesData = await response.json();
	return gamesData.results;
};

export const getAllGenres = async () => {
	const response = await fetch(
		`${BASE_URL}/genres?key=${API_KEY}&page_size=40`,
	);
	if (!response.ok) throw new Error('Error while fetching all genres!');
	const genresData = await response.json();
	return genresData.results;
};

export const getGamesByGenre = async (genre: string) => {
	const response = await fetch(
		`${BASE_URL}/games?key=${API_KEY}&page_size=40&genres=${genre}`,
	);
	if (!response.ok) throw new Error('Error while fetching games by genre!');
	const gamesData = await response.json();
	return gamesData.results;
};

export const getGame = async (slug: string) => {
	const response = await fetch(
		`${BASE_URL}/games/${slug}?key=${API_KEY}&page_size=40`,
	);
	if (!response.ok) throw new Error('Error while fetching game data!');
	const gamesData = await response.json();
	return gamesData;
};

export const searchGames = async (searchQuery: string) => {
	const response = await fetch(
		`${BASE_URL}/games?key=${API_KEY}&page_size=40&search=${searchQuery}`,
	);
	if (!response.ok) throw new Error('Error while searching games');
	const searchedGamesData = await response.json();
	return searchedGamesData.results;
};

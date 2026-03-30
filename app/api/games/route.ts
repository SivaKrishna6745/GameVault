import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const page = searchParams.get('page') || 1;
	const search = searchParams.get('search') || '';
	const genre = searchParams.get('genres') || '';
	const API_KEY = process.env.RAWG_API_KEY;
	const BASE_URL = `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&page_size=40`;

	let dynamic_url = BASE_URL;
	if (search) dynamic_url = dynamic_url + `&search=${search}`;
	if (genre) dynamic_url = dynamic_url + `&genres=${genre}`;

	const response = await fetch(dynamic_url);
	if (!response.ok) {
		return NextResponse.json([]);
	}
	const games = await response.json();
	return NextResponse.json(games.results);
}

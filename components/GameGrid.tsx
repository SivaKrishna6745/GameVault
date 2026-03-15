import GameCard from './GameCard';

export type Game = {
    id: number;
    name: string;
    image_background: string;
    rating: number;
};

const dummyGames: Game[] = [
    { id: 1, name: 'The Witcher 3', image_background: 'https://example.com/witcher.jpg', rating: 4.8 },
    { id: 2, name: 'Elden Ring', image_background: 'https://example.com/elden.jpg', rating: 4.9 },
    { id: 3, name: 'The Witcher 3', image_background: 'https://example.com/witcher.jpg', rating: 4.8 },
    { id: 4, name: 'Elden Ring', image_background: 'https://example.com/elden.jpg', rating: 4.9 },
    { id: 5, name: 'The Witcher 3', image_background: 'https://example.com/witcher.jpg', rating: 4.8 },
    { id: 6, name: 'Elden Ring', image_background: 'https://example.com/elden.jpg', rating: 4.9 },
];

function GameGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dummyGames.map((game: Game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    );
}

export default GameGrid;

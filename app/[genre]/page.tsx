import GameGrid from '@/components/GameGrid';

async function Genre({ params }: { params: { genre: string } }) {
    const { genre } = await params;

    return (
        <div>
            <h2 className="text-2x font-semibold">{genre}</h2>
            <GameGrid />
        </div>
    );
}

export default Genre;

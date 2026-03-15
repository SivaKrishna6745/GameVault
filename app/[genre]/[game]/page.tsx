async function Game({ params }: { params: { game: string } }) {
    const { game } = await params;
    const gameName = game.replaceAll(/%20/g, ' ');

    return (
        <div>
            <h2 className="text-2xl font-semibold">{gameName}</h2>
        </div>
    );
}

export default Game;

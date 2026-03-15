import GameGrid from '@/components/GameGrid';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">Game Vault</h2>
            <GameGrid />
        </div>
    );
}

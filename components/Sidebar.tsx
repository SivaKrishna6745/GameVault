import Link from 'next/link';
import React from 'react';

function Sidebar() {
    const buttonClassName =
        'py-3 px-8 text-lg outline-none rounded-sm bg-slate-600 cursor-pointer hover:bg-slate-600/80 active:-translate-y-0.5 active:shadow-[3px_3px_5px_2px_rgba(256,256,256,0.8)]';
    return (
        <div className="flex flex-col gap-4 max-w-sm">
            <Link href={'/action'} className={buttonClassName}>
                Action
            </Link>
            <Link href={'/adventure'} className={buttonClassName}>
                Adventure
            </Link>
            <Link href={'/actionoradventure'} className={buttonClassName}>
                Action/Adventure
            </Link>
            <Link href={'/casual'} className={buttonClassName}>
                Casual
            </Link>
            <Link href={'/platformer'} className={buttonClassName}>
                Platformer
            </Link>
            <Link href={'/card'} className={buttonClassName}>
                Card
            </Link>
            <Link href={'/racing'} className={buttonClassName}>
                Racing
            </Link>
            <Link href={'/puzzle'} className={buttonClassName}>
                Puzzle
            </Link>
            <Link href={'/strategy'} className={buttonClassName}>
                Strategy
            </Link>
            <Link href={'/simulation'} className={buttonClassName}>
                Simulation
            </Link>
        </div>
    );
}

export default Sidebar;

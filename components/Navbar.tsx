import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar() {
    return (
        <nav className="p-4 flex justify-around">
            <Link href="/">
                <Image src="./file.svg" alt="logo" height={30} width={30} />
            </Link>
            <div className="relative flex items-center">
                <input
                    type="text"
                    placeholder="Search"
                    className="border-b border-slate-300 outline-none text-lg px-1/2 py-1"
                />
                <Search className="absolute right-0" size={22} />
            </div>
        </nav>
    );
}

export default Navbar;

import { Search, Vault } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar() {
	return (
		<nav className="p-4 flex justify-between items-center">
			<Link href="/">
				<span className="text-4xl font-semibold font-mono tracking-wide hover:text-indigo-400 hover:text-shadow-sm hover:text-shadow-indigo-300">
					GAMEVAULT
				</span>
			</Link>
			<div className="relative flex items-center">
				<input
					type="text"
					placeholder="Search"
					className="border-b border-slate-300 outline-none text-lg px-1/2 py-1 w-md"
				/>
				<Search className="absolute right-0" size={22} />
			</div>
			<Link href="/mygames">
				<span className="font-semibold text-lg hover:text-blue-300 transition-all duration-200 flex gap-1 items-center">
					<Vault />
					My Vault
				</span>
			</Link>
		</nav>
	);
}

export default Navbar;

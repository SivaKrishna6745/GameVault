'use client';

import { Menu, Search, Vault, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import useMobile from '../hooks/useMobile';

function MenuContent() {
	const { isMobile } = useMobile();

	return (
		<>
			<div className="relative flex items-center">
				<input
					type="text"
					name="search"
					placeholder="Search"
					className={`border-b border-slate-300 outline-none text-lg px-1/2 py-1 ${isMobile ? '' : 'w-md'}`}
				/>
				<Search className="absolute right-0" size={22} />
			</div>
			<Link href="/mygames">
				<span
					className={`font-semibold hover:text-blue-300 transition-all duration-200 flex gap-1 items-center ${!isMobile ? 'text-lg' : 'text-md'}`}
				>
					<Vault />
					My Vault
				</span>
			</Link>
		</>
	);
}

function Navbar() {
	const { isMobile } = useMobile();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

	return (
		<nav
			className={`p-4 flex justify-between ${isMobileMenuOpen ? 'bg-[rgba(0,0,0,0.7)] h-screen' : 'items-center'}`}
		>
			<Link href="/">
				<span className="text-4xl font-semibold font-mono tracking-wide hover:text-indigo-400 hover:text-shadow-sm hover:text-shadow-indigo-300">
					{!isMobile ? 'GAMEVAULT' : 'GV'}
				</span>
			</Link>
			{isMobile && (
				<div className="flex flex-col gap-4">
					<button
						onClick={() => setIsMobileMenuOpen(isMobileMenuOpen ? false : true)}
					>
						{isMobileMenuOpen ? <X /> : <Menu />}
					</button>
					<div
						className={`flex flex-col items-center gap-8 w-full py-4 rounded-sm z-50 absolute top-20 left-0 right-0 bg-[rgba(0,0,0)] transition-all duration-200 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
					>
						<MenuContent />
					</div>
				</div>
			)}
			{!isMobile && <MenuContent />}
		</nav>
	);
}

export default Navbar;

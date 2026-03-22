'use client';

import { Menu, Search, Vault, X } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import useMobile from '../hooks/useBreakpoints';

function MenuContent() {
    const { isMobile, isTablet } = useMobile();

    return (
        <>
            <div className="relative flex items-center">
                <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    className={`border-b border-slate-300 outline-none text-lg px-1/2 py-1 ${isMobile ? '' : isTablet ? 'w-sm' : 'w-md'}`}
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

    useEffect(() => {
        if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'scroll';
    }, [isMobileMenuOpen]);

    return (
        <nav className={`p-4 flex justify-between ${isMobileMenuOpen ? '' : 'items-center'}`}>
            <Link href="/">
                <span className="text-4xl font-semibold font-mono tracking-wide hover:text-indigo-400 hover:text-shadow-sm hover:text-shadow-indigo-300">
                    {!isMobile ? 'GAMEVAULT' : 'GV'}
                </span>
            </Link>
            <div className="h-0.5 w-full mb-4 bg-slate-500 absolute top-18 left-0" />
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}
            {isMobile && (
                <div className="flex flex-col gap-4">
                    <button
                        onClick={() => setIsMobileMenuOpen(isMobileMenuOpen ? false : true)}
                        className="fixed top-5 right-5 z-50"
                    >
                        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                    <div
                        className={`flex flex-col items-center gap-8 w-full py-4 rounded-sm z-50 fixed top-50 left-0 right-0 transition-all duration-200 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-95 pointer-events-none'}`}
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

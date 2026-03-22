'use client';

import { Genre } from '@/src/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useMobile from '../hooks/useBreakpoints';

function SidebarClient({ genres }: { genres: Genre[] }) {
    const { isMobile } = useMobile();

    const buttonBaseClassName = `transition-all duration-200 rounded-lg text-lg min-w-max border border-slate-300 tracking-wide ${!isMobile ? 'py-4 px-8' : 'py-2 px-3 '}`;
    const buttonActiveClassName = `bg-blue-500 border-none text-white font-semibold cursor-not-allowed`;
    const buttonInactiveClassName = 'border-slate-500 bg-transparent text-slate-300 hover:translate-x-5';
    const pathname = usePathname().replace('/', '');

    return (
        <div
            className={`hide-scrollbar px-2 py-4 flex gap-4 top-0 ${!isMobile ? 'flex-col w-64 sticky top-0 bottom-0' : 'overflow-x-scroll w-full bg-[rgba(0,0,0,0.9)]'}`}
        >
            {genres.map((genre: Genre) => {
                const isActive = pathname.toLowerCase() === genre.slug.toLowerCase();

                return (
                    <Link
                        href={`/${genre.slug}`}
                        className={`${buttonBaseClassName} ${isActive ? buttonActiveClassName : buttonInactiveClassName}`}
                        key={genre.slug}
                    >
                        {genre.name}
                    </Link>
                );
            })}
        </div>
    );
}

export default SidebarClient;

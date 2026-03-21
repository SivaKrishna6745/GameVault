'use client';

import { Genre } from '@/src/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useMobile from '../hooks/useMobile';
import Image from 'next/image';

function SidebarClient({ genres }: { genres: Genre[] }) {
	const { isMobile } = useMobile();

	const buttonBaseClassName = `${!isMobile ? 'text-lg py-2 px-6 rounded-md flex justify-between items-center' : 'text-sm py-1 px-2 rounded-sm flex flex-col gap-1 justify-center'} whitespace-nowrap active:shadow-[2px_2px_3px_1px_rgba(256,256,256,0.8)] transition-all duration-200`;
	const buttonActiveClassName =
		'bg-blue-500 text-white shadow-md scale-[1.02] cursor-not-allowed';
	const buttonInactiveClassName =
		'bg-slate-600 text-slate-200 hover:bg-slate-600 hover:text-white';
	const pathname = usePathname().replace('/', '');

	return (
		<div
			className={`flex gap-4 top-0 ${!isMobile ? 'flex-col w-52 h-screen sticky' : 'overflow-x-scroll w-full bg-[rgba(0,0,0,0.9)]'}`}
		>
			{genres.map((genre: Genre) => {
				const isActive = pathname.toLowerCase() === genre.slug.toLowerCase();

				return (
					<Link
						href={`/${genre.slug}`}
						className={`${buttonBaseClassName} ${isActive ? buttonActiveClassName : buttonInactiveClassName}`}
						key={genre.slug}
					>
						<span>{genre.name}</span>
						<Image
							src={genre.image_background}
							alt={genre.slug}
							height={50}
							width={50}
							className="rounded-sm"
						/>
					</Link>
				);
			})}
		</div>
	);
}

export default SidebarClient;

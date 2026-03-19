'use client';

import { Genre } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SidebarClient({ genres }: { genres: Genre[] }) {
	const buttonBaseClassName =
		'py-3 px-6 text-md rounded-md whitespace-nowrap active:shadow-[2px_2px_3px_1px_rgba(256,256,256,0.8)] transition-all duration-200';
	const buttonActiveClassName =
		'bg-blue-500 text-white shadow-md scale-[1.02] cursor-not-allowed';
	const buttonInactiveClassName =
		'bg-slate-600 text-slate-200 hover:bg-slate-600 hover:text-white';
	const pathname = usePathname().replace('/', '');

	return (
		<div className="flex flex-col gap-4 w-64 sticky top-0 h-screen">
			{genres.map((genre: Genre) => {
				const isActive = pathname.toLowerCase() === genre.slug.toLowerCase();

				return (
					<Link
						key={genre.slug}
						href={`/${genre.slug}`}
						className={`${buttonBaseClassName} ${isActive ? buttonActiveClassName : buttonInactiveClassName}`}
					>
						{genre.name}
					</Link>
				);
			})}
		</div>
	);
}

export default SidebarClient;

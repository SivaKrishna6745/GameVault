import { getAllGenres } from '@/lib/api';
import { Genre } from '@/types';
import Link from 'next/link';
import React from 'react';

async function Sidebar() {
	const genres = await getAllGenres();
	const buttonClassName =
		'py-3 px-8 text-lg outline-none rounded-sm bg-slate-600 cursor-pointer hover:bg-slate-600/80 active:-translate-y-0.5 active:shadow-[3px_3px_5px_2px_rgba(256,256,256,0.8)]';

	return (
		<div className="flex flex-col gap-4 max-w-sm">
			{genres.map((genre: Genre) => (
				<Link
					key={genre.slug}
					href={`/${genre.name}`}
					className={buttonClassName}
				>
					{genre.name}
				</Link>
			))}
		</div>
	);
}

export default Sidebar;

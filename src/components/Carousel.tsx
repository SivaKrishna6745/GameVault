'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface CarouselProps {
	name: string;
	images: string[];
	isLink: boolean;
}

function Carousel({ name, images, isLink }: CarouselProps) {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const [loaded, setLoaded] = useState<boolean>(false);

	useEffect(() => {
		if (images.length <= 1) return;

		const interval = setInterval(() => {
			setActiveIndex((prevActiveIndex) =>
				prevActiveIndex === images.length - 1 ? 0 : prevActiveIndex + 1,
			);
		}, 3000);

		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<div className="relative flex flex-col items-center gap-4 z-20">
			{images.map((img, index) => (
				<div
					key={index}
					className={`relative overflow-hidden rounded-md bg-slate-800 ${index === activeIndex ? 'block' : 'hidden'}`}
				>
					{!loaded && (
						<div className="absolute inset-0 animate-pulse bg-slate-700" />
					)}
					<Image
						src={img}
						alt={name}
						height={0}
						width={0}
						unoptimized
						className={` rounded-md ${index === activeIndex ? 'visible' : 'hidden'} ${loaded ? 'opacity-100' : 'opacity-0'}`}
						style={{ width: '100%', height: isLink ? '200px' : 'auto' }}
						onLoad={() => setLoaded(true)}
					/>
				</div>
			))}
			<div className="flex gap-2">
				{images.length > 1 &&
					images.map((_, idx) => (
						<div
							key={idx}
							className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${idx === activeIndex ? 'bg-white w-4' : 'bg-slate-500'}`}
						/>
					))}
			</div>
		</div>
	);
}

export default Carousel;

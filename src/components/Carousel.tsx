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
			<div className="images">
				{images.map((img, index) => (
					<Image
						key={index}
						src={img}
						alt={name}
						height={0}
						width={0}
						unoptimized
						className={` rounded-md ${index === activeIndex ? 'visible' : 'hidden'}`}
						style={{ width: '100%', height: isLink ? '200px' : 'auto' }}
					/>
				))}
			</div>
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

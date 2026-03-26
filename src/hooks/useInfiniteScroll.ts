import { useEffect, useRef, useState } from 'react';

const options = {
	rootMargin: '0px',
	scrollMargin: '0px',
	threshold: 0.1,
};

const useInfiniteScroll = () => {
	const [isInView, setIsInView] = useState<boolean>(false);
	const sentinelRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			if (entry.isIntersecting) {
				console.log('intersecting');
				setIsInView(true);
			} else {
				console.log('not intersecting');
				setIsInView(false);
			}
		}, options);

		if (sentinelRef?.current) observer.observe(sentinelRef?.current);

		return () => {
			if (sentinelRef?.current) observer.unobserve(sentinelRef?.current);
		};
	}, [sentinelRef]);

	return { sentinelRef, isInView };
};

export default useInfiniteScroll;

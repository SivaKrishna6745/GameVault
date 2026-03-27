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
				setIsInView(true);
			} else {
				setIsInView(false);
			}
		}, options);

		if (sentinelRef?.current) observer.observe(sentinelRef?.current);

		return () => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			if (sentinelRef?.current) observer.unobserve(sentinelRef?.current);
		};
	}, [sentinelRef]);

	return { sentinelRef, isInView };
};

export default useInfiniteScroll;

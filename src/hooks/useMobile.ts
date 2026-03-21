'use client';

import { useEffect, useState } from 'react';

const useMobile = () => {
	const [isMobile, setisMobile] = useState<boolean>(false);

	useEffect(() => {
		const checkIfMobile = () => setisMobile(window.innerWidth < 768);
		checkIfMobile();

		window.addEventListener('resize', checkIfMobile);

		return () => window.removeEventListener('resize', checkIfMobile);
	}, []);

	return { isMobile };
};

export default useMobile;

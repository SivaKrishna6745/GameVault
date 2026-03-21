'use client';

import { useEffect, useState } from 'react';

const useMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isTablet, setIsTablet] = useState<boolean>(false);

    useEffect(() => {
        const mobileQuery = window.matchMedia('(max-width: 768px)');
        const tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');

        const updateBreakpoints = () => {
            setIsMobile(mobileQuery.matches);
            setIsTablet(tabletQuery.matches);
        };
        updateBreakpoints();

        mobileQuery.addEventListener('change', updateBreakpoints);
        tabletQuery.addEventListener('change', updateBreakpoints);

        return () => {
            mobileQuery.removeEventListener('change', updateBreakpoints);
            tabletQuery.removeEventListener('change', updateBreakpoints);
        };
    }, []);

    return { isMobile, isTablet };
};

export default useMobile;

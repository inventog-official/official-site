'use client';
import Lenis from 'lenis';
import { useEffect, ReactNode } from 'react';

interface SmoothScrollProps {
    children: ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return <>{children}</>;
};

export default SmoothScroll;
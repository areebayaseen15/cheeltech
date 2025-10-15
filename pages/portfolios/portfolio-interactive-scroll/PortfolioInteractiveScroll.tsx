"use client"
import PersonalPortfolioHeader from '@/layouts/headers/PersonalPortfolioHeader';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import PortfolioScroll from '@/components/portfolio/PortfolioScroll';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const PortfolioInteractiveScroll = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#000" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor" className='cursor-white-bg'>
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <PersonalPortfolioHeader />
            {/* Main Content Sections */}
            <main>
                <PortfolioScroll />
            </main>
        </>
    );
};

export default PortfolioInteractiveScroll;
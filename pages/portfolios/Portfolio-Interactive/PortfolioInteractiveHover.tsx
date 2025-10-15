"use client"
import PersonalPortfolioHeader from '@/layouts/headers/PersonalPortfolioHeader';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import PortfolioHover from '@/components/portfolio/PortfolioHover';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const PortfolioInteractiveHover = () => {
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

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <PortfolioHover />
                    </main>
                </div>
            </div>
        </>
    );
};

export default PortfolioInteractiveHover;
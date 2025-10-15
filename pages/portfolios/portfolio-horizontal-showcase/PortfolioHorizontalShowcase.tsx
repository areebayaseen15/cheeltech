"use client"
import PortfolioFixedHeader from '@/layouts/headers/PortfolioFixedHeader';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import PortfolioSlider from '@/components/portfolio/PortfolioSlider';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import { parallaxSlider } from '@/utils/ParallaxSlider';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const PortfolioHorizontalShowcase = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#fff" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            parallaxSlider();
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
            <PortfolioFixedHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <PortfolioSlider />
                    </main>
                </div>
            </div>
        </>
    );
};

export default PortfolioHorizontalShowcase;
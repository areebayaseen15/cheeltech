"use client"
import PortfolioMasonryArea from '@/components/portfolio/PortfolioMasonryArea';
import PortfolioMasonryGrid from '@/components/portfolio/PortfolioMasonryGrid';
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import { charAnimation, fadeAnimation } from '@/hooks/useGsapAnimation';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const PortfolioMasonryMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground();

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            charAnimation()
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor" className='cursor-bg-red'>
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <InnerPageHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <PortfolioMasonryArea />
                        <PortfolioMasonryGrid />
                    </main>
                    <CreativeAgencyFooter bgColor="#1b1b1d" />
                </div>
            </div>
        </>
    );
};

export default PortfolioMasonryMain;
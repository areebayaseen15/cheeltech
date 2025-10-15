"use client"
import { fadeAnimation, portfolioShowcaseAnimation } from '@/hooks/useGsapAnimation';
import PortfolioShowcase from '@/components/portfolio/PortfolioShowcase';
import DesignStudioFooter from '@/layouts/footers/DesignStudioFooter';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import AboutModernHero from '@/components/hero-banner/AboutModernHero';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import CommonHeader from '@/layouts/headers/CommonHeader';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const PortfolioShowcaseMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#fff" });

    // Enable smooth scroll animations.
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            portfolioShowcaseAnimation();
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
            <CommonHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <AboutModernHero heroTitle="Portfolio" />
                        <PortfolioShowcase />
                    </main>
                    <DesignStudioFooter />
                </div>
            </div>
        </>
    );
};

export default PortfolioShowcaseMain;
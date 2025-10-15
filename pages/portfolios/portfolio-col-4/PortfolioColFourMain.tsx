"use client"
import { buttonBounceAnimation, fadeAnimation } from '@/hooks/useGsapAnimation';
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import PortfolioColFour from '@/components/portfolio/PortfolioColFour';
import BreadcurmbTwo from '@/components/breadcurmb/BreadcurmbTwo';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const PortfolioColFourMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground();

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            buttonBounceAnimation();
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
            <InnerPageHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <BreadcurmbTwo />
                        <PortfolioColFour />
                    </main>
                    <CreativeAgencyFooter bgColor="#1b1b1d" />
                </div>
            </div>
        </>
    );
};

export default PortfolioColFourMain;
"use client"
import PortfolioDetailsVideoMain from '@/components/video-area/PortfolioDetailsVideoMain';
import { fadeAnimation, projectDetailsAnim } from '@/hooks/useGsapAnimation';
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const PortfolioDetailsVideo = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ customClass: "tp-magic-cursor" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            projectDetailsAnim();
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
                        <PortfolioDetailsVideoMain />
                    </main>
                    <CreativeAgencyFooter bgColor="#1b1b1d" Zindex='z-index-9' />
                </div>
            </div>

        </>
    );
};

export default PortfolioDetailsVideo;
"use client"
import BrandShowcaseHero from '@/components/hero-banner/BrandShowcaseHero';
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BrandShowcaseBrand from '@/components/brand/BrandShowcaseBrand';
import { brandImgAnim, fadeAnimation } from '@/hooks/useGsapAnimation';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const PortfolioColTwoMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#fff" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            brandImgAnim();
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor" className='cursor-bg-red-2'>
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <InnerPageHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <BrandShowcaseHero />
                        <BrandShowcaseBrand />
                    </main>
                    <CreativeAgencyFooter bgColor="#1b1b1d" />
                </div>
            </div>
        </>
    );
};

export default PortfolioColTwoMain;
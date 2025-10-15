"use client"
import PortfolioDetailsThreeNavigation from '@/components/portfolio/PortfolioDetailsThreeNavigation';
import PortfolioDetailsThreePortfolio from '@/components/portfolio/PortfolioDetailsThreePortfolio';
import PortfolioDetailsThreeGalleryTwo from '@/components/gallery/PortfolioDetailsThreeGalleryTwo';
import PortfolioDetailsThreeOverview from '@/components/portfolio/PortfolioDetailsThreeOverview';
import PortfolioDetailsThreeGallery from '@/components/gallery/PortfolioDetailsThreeGallery';
import { fadeAnimation, portfolioItemPinAnimation } from '@/hooks/useGsapAnimation';
import PortfolioDetailsThree from '@/components/portfolio/PortfolioDetailsThree';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import DesignStudioFooter from '@/layouts/footers/DesignStudioFooter';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import CommonHeader from '@/layouts/headers/CommonHeader';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const PortfolioDetailsCreativeSlider = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ customClass: "tp-magic-cursor" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            portfolioItemPinAnimation();
            fadeAnimation();
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
            <CommonHeader spacingCls="mt-55" />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <PortfolioDetailsThree />
                        <PortfolioDetailsThreeOverview />
                        <PortfolioDetailsThreeGallery />
                        <PortfolioDetailsThreePortfolio />
                        <PortfolioDetailsThreeGalleryTwo />
                        <PortfolioDetailsThreeNavigation />
                    </main>
                    <DesignStudioFooter />
                </div>
            </div>
        </>
    );
};

export default PortfolioDetailsCreativeSlider;
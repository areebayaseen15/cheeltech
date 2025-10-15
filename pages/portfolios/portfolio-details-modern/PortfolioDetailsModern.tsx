"use client"
import { fadeAnimation, scrollAnimation, textInvertAnim2, textRightScrollAnimation } from '@/hooks/useGsapAnimation';
import PortfolioDetailsFourColorArea from '@/components/portfolio/PortfolioDetailsFourColor';
import PortfolioDetailsFourSlider from '@/components/portfolio/PortfolioDetailsFourSlider';
import PortfolioDetailsFourBanner from '@/components/banner/PortfolioDetailsFourBanner';
import PortfolioDetailsFourArea from '@/components/portfolio/PortfolioDetailsFourArea';
import PortfolioDetailsNextPrv from '@/components/portfolio/PortfolioDetailsNextPrv';
import PortfolioDetailsFourAbout from '@/components/about/PortfolioDetailsFourAbout';
import PortfolioDetailsFourThumb from '@/components/thumb/PortfolioDetailsFourThumb';
import PortfolioDetailsFourWork from '@/components/work/PortfolioDetailsFourWork';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import DesignAgencyFooter from '@/layouts/footers/DesignAgencyFooter';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { useImageHoverReveal } from '@/hooks/useRevealOnHover';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const PortfolioDetailsModern = () => {
    //Background Color & Cursor
    useCursorAndBackground({ customClass: "tp-magic-cursor" });

    // Initialize effects and animations
    useScrollSmooth();
    useImageHoverReveal();

    useGSAP(() => {
        const timer = setTimeout(() => {
            textRightScrollAnimation();
            scrollAnimation();
            fadeAnimation();
            textInvertAnim2();
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
                        <PortfolioDetailsFourArea />
                        <PortfolioDetailsFourBanner />
                        <PortfolioDetailsFourAbout />
                        <PortfolioDetailsFourColorArea />
                        <PortfolioDetailsFourWork />
                        <PortfolioDetailsFourThumb />
                        <PortfolioDetailsFourSlider />
                        <PortfolioDetailsNextPrv />
                    </main>
                    <DesignAgencyFooter spacingCls="" />
                </div>
            </div>
        </>
    );
};

export default PortfolioDetailsModern;
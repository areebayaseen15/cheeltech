"use client"
import { designProjectAnimation, fadeAnimation, revalEffectAnimation, scrollMovingText, textInvertAnim2, textRightScrollAnimation } from '@/hooks/useGsapAnimation';
import PortfolioMertoProject from '@/components/project/PortfolioMertoProject';
import CreativeAgencyBrand from '@/components/brand/CreativeAgencyBrand';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import DesignAgencyFooter from '@/layouts/footers/DesignAgencyFooter';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const PortfolioMetroMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground();

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            textRightScrollAnimation();
            designProjectAnimation();
            revalEffectAnimation();
            scrollMovingText();
            fadeAnimation();
            textInvertAnim2()
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
                        <PortfolioMertoProject />
                        <CreativeAgencyBrand spacingCls='pb-50' subtitleTextColor=''/>
                    </main>
                    <DesignAgencyFooter spacingCls='pt-150'/>
                </div>
            </div>
        </>
    );
};

export default PortfolioMetroMain;
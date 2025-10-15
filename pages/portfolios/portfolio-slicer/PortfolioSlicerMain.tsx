"use client"
import PortfolioProjectArea from '@/components/portfolio/subComponents/PortfolioProjectArea';
import { charAnimation, fadeAnimation, PortfolioSlicerAnimation } from '@/hooks/useGsapAnimation';
import PortfolioMasonryTwo from '@/components/portfolio/PortfolioMasonryTwo';
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const PortfolioSlicerMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#fff" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            PortfolioSlicerAnimation();
            charAnimation();
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
            <InnerPageHeader containerCls='container-1830' />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <PortfolioMasonryTwo />
                        <PortfolioProjectArea />
                    </main>
                    <CreativeAgencyFooter bgColor="#0E0F11" />
                </div>
            </div>
        </>
    );
};

export default PortfolioSlicerMain;
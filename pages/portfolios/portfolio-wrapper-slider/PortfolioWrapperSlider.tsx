"use client"
import PersonalPortfolioHeader from '@/layouts/headers/PersonalPortfolioHeader';
import PortfolioWrapSlider from '@/components/portfolio/PortfolioWrapSlider';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const PortfolioWrapperSlider = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#0E0F11" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
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
            <PersonalPortfolioHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <PortfolioWrapSlider />
                    </main>
                </div>
            </div>
        </>
    );
};

export default PortfolioWrapperSlider;
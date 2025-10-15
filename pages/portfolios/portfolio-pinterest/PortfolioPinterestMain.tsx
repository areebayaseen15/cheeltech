
"use client"
import { fadeAnimation, studioProjectAnimation, textPerspectiveAnimation, textRevealAnimation, videoAnimation } from '@/hooks/useGsapAnimation';
import CreativeAgencyProject from '@/components/project/CreativeAgencyProject';
import CreativeAgencyHero from '@/components/hero-banner/CreativeAgencyHero';
import DesignAgencyVideo from '@/components/video-area/DesignAgencyVideo';
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import CreativeAgencyHeader from '@/layouts/headers/CreativeAgencyHeader';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const PortfolioPinterestMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground();

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            textPerspectiveAnimation();
            studioProjectAnimation();
            textRevealAnimation();
            videoAnimation();
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
            <CreativeAgencyHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <CreativeAgencyHero title='Works' />
                        <DesignAgencyVideo className='video-inner-style' spacing='mb-200' />
                        <CreativeAgencyProject showDataCursor={true} subtitleTextColor=''/>
                    </main>
                    <CreativeAgencyFooter bgColor="#0E0F11" />
                </div>
            </div>
        </>
    );
};

export default PortfolioPinterestMain;
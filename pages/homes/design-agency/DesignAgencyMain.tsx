"use client"
import { designAwardAnimation, designChooseAnimation, designProjectAnimation, fadeAnimation, revalEffectAnimation, textInvertAnim2, textRightScrollAnimation, videoAnimation } from '@/hooks/useGsapAnimation';
import DesignAgencyTestimonial from '@/components/testimonial/DesignAgencyTestimonial';
import DesignAgencyChoose from '@/components/choose-area/DesignAgencyChoose';
import DesignAgencyProject from '@/components/project/DesignAgencyProject';
import DesignAgencyService from '@/components/service/DesignAgencyService';
import DesignAgencyVideo from '@/components/video-area/DesignAgencyVideo';
import DesignAgencyHero from '@/components/hero-banner/DesignAgencyHero';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import DesignAgencyBanner from '@/components/banner/DesignAgencyBanner';
import DesignAgencyFooter from '@/layouts/footers/DesignAgencyFooter';
import DesignAgencyHeader from '@/layouts/headers/DesignAgencyHeader';
import DesignAgencyAward from '@/components/award/DesignAgencyAward';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const DesignAgencyMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground()

    // Initialize effects and animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            textRightScrollAnimation();
            designChooseAnimation();
            designProjectAnimation();
            designAwardAnimation();
            revalEffectAnimation();
            videoAnimation();
            fadeAnimation();
            textInvertAnim2();
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <DesignAgencyHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <DesignAgencyHero />
                        <DesignAgencyBanner />
                        <DesignAgencyProject />
                        <DesignAgencyVideo />
                        <DesignAgencyChoose />
                        <DesignAgencyService />
                        <DesignAgencyTestimonial />
                        <DesignAgencyAward />
                    </main>
                    <DesignAgencyFooter spacingCls='pt-150'/>
                </div>
            </div>
        </>
    );
};

export default DesignAgencyMain;
"use client"
import DesignStudioTextAreaTwo from '@/components/text-slider/DesignStudioTextAreaTwo';
import AboutModernSuccess from '@/components/success-area/AboutModernSuccess';
import { fadeAnimation, scrollMovingText } from '@/hooks/useGsapAnimation';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import AboutModernHero from '@/components/hero-banner/AboutModernHero';
import AboutModernBanner from '@/components/banner/AboutModernBanner';
import DesignStudioFooter from '@/layouts/footers/DesignStudioFooter';
import AboutModernMoving from '@/components/about/AboutModernMoving';
import DesignStudioBrand from '@/components/brand/DesignStudioBrand';
import DesignStudioTeam from '@/components/team/DesignStudioTeam';
import ProjectCounter from '@/components/counter/ProjectCounter';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import CommonHeader from '@/layouts/headers/CommonHeader';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const AboutModernMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ customClass: "white-bg" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            scrollMovingText();
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
            <CommonHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <AboutModernHero />
                        <AboutModernBanner />
                        <AboutModernMoving />
                        <DesignStudioTextAreaTwo spacingCls="pt-20" />
                        <AboutModernSuccess />
                        <div className="des-project-area pt-70 pb-120">
                            <ProjectCounter spacingCls="" />
                        </div>
                        <DesignStudioBrand />
                        <DesignStudioTeam />
                    </main>
                    <DesignStudioFooter />
                </div>
            </div>
        </>
    );
};

export default AboutModernMain;
"use client"
import { fadeAnimation, heroAnimation, portfolioAnimation, scrollMovingText, textInvertAnim3 } from '@/hooks/useGsapAnimation';
import DesignStudioTextAreaTwo from '@/components/text-slider/DesignStudioTextAreaTwo';
import DesignStudioPortfolio from '@/components/portfolio/DesignStudioPortfolio';
import DesignStudioTextArea from '@/components/text-slider/DesignStudioTextArea';
import DesignStudioProject from '@/components/project/DesignStudioProject';
import DesignStudioHero from '@/components/hero-banner/DesignStudioHero';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import DesignStudioAbout from '@/components/about/DesignStudioAbout';
import DesignStudioFooter from '@/layouts/footers/DesignStudioFooter';
import DesignStudioBrand from '@/components/brand/DesignStudioBrand';
import DesignStudioTeam from '@/components/team/DesignStudioTeam';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import CommonHeader from '@/layouts/headers/CommonHeader';
import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';

const DesignStudioMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ customClass: "white-bg" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const timer = setTimeout(() => {
                heroAnimation();
                fadeAnimation();
                scrollMovingText();
                portfolioAnimation();
                textInvertAnim3();
            }, 300);

            return () => clearTimeout(timer);
        });

        return () => ctx.revert();
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
                    {/* Main Content Sections */}
                    <main>
                        <DesignStudioHero />
                        <DesignStudioTextArea />
                        <DesignStudioAbout />
                        <DesignStudioPortfolio />
                        <DesignStudioTextAreaTwo />
                        <DesignStudioProject />
                        <DesignStudioBrand />
                        <DesignStudioTeam />
                    </main>
                    <DesignStudioFooter />
                </div>
            </div>
        </>
    );
};

export default DesignStudioMain;
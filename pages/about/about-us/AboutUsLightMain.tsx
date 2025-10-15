"use client"
import { fadeAnimation, funfactPanelAnimation, panelAnimation } from '@/hooks/useGsapAnimation';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import HomeMainFunFact from '@/components/funfact/HomeMainFunFact';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import AboutUsService from '@/components/service/AboutUsService';
import AboutUsHero from '@/components/hero-banner/AboutUsHero';
import AboutUsBanner from '@/components/banner/AboutUsBanner';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import HomeMainAbout from '@/components/about/HomeMainAbout';
import { textBounceAnimation } from '@/utils/titleAnimation';
import AboutUsBrand from '@/components/brand/AboutUsBrand';
import AboutUsAward from '@/components/award/AboutUsAward';
import HomeMainWork from '@/components/work/HomeMainWork';
import AboutUsTeam from '@/components/team/AboutUsTeam';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const AboutUsLightMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground();

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            funfactPanelAnimation();
            textBounceAnimation()
            fadeAnimation();
            panelAnimation();
        }, 100)
        return () => clearTimeout(timer);
    });
    return (
        <>
            {/* -- Begin magic cursor -- */}
            <div id="magic-cursor" className="cursor-bg-red-2">
                <div id="ball"></div>
            </div>
            {/* Global Components */}
            <BackToTop />
            <InnerPageHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <AboutUsHero />
                        <AboutUsBrand />
                        <AboutUsBanner />
                        <HomeMainAbout bgColur='#F6F6F9' spacingCls='pb-140' />
                        <AboutUsService />
                        <HomeMainFunFact />
                        <HomeMainWork />
                        <AboutUsTeam />
                        <AboutUsAward />
                    </main>
                    <HomeMainFooter />
                </div>
            </div>
        </>
    );
};

export default AboutUsLightMain;
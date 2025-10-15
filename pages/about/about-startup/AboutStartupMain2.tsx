"use client"
import { eyeAnimation, fadeAnimation, panelAnimation } from '@/hooks/useGsapAnimation';
import CorporateAgencyBannerTwo from '@/components/banner/CorporateAgencyBannerTwo';
import CorporateAgencyService from '@/components/service/CorporateAgencyService';
import PersonalPortfolioAward from '@/components/award/PersonalPortfolioAward';
import AboutModernSuccess from '@/components/success-area/AboutModernSuccess';
import CorporateAgencyAbout from '@/components/about/CorporateAgencyAbout';
import CorporateAgencyBrand from '@/components/brand/CorporateAgencyBrand';
import AboutStartupProject from '@/components/project/AboutStartupProject';
import CorporateAgencyFooter from '@/layouts/footers/CorporateAgencyFooter';
import CorporateAgencyHeader from '@/layouts/headers/CorporateAgencyHeader';
import AboutStartupHero from '@/components/hero-banner/AboutStartupHero';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import DesignStudioTeam from '@/components/team/DesignStudioTeam';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const AboutStartupMain = () => {
    //Background Color & Cursor Class
    useCursorAndBackground();

    // Initialize all animations and effects
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            panelAnimation();
            eyeAnimation();
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            {/* -- Begin magic cursor -- */}
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <SearchArea />
            <CorporateAgencyHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <AboutStartupHero />
                        <CorporateAgencyBannerTwo />
                        <CorporateAgencyAbout />
                        <CorporateAgencyBrand />
                        <CorporateAgencyService />
                        <AboutModernSuccess bgColor='#45653C' />
                        <DesignStudioTeam wrapClass='des-team-inner-style' spacingCls='pb-180' />
                        <PersonalPortfolioAward
                            wrapClass='crp-price-area crp-inner-style fix p-relative z-index-1'
                            spacingCls='pt-120 pb-140'
                            bgClass='#edf2ef'
                        />
                        <AboutStartupProject/>
                    </main>
                     <CorporateAgencyFooter />
                </div>
            </div>
        </>
    );
};

export default AboutStartupMain;
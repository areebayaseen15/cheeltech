"use client"
import { animationParagraph, fadeAnimation, scrollMovingText, teamAnimation, textRevealAnimation, zoomInAnimation } from '@/hooks/useGsapAnimation';
import ArchitectureHubFunFact from '@/components/funfact/ArchitectureHubFunFact';
import CreativeAboutService from '@/components/service/CreativeAboutService';
import HomeMainTextSlider from '@/components/text-slider/HomeMainTextSlider';
import CreativeAgencyBrand from '@/components/brand/CreativeAgencyBrand';
import CreativeAgencyAward from '@/components/award/CreativeAgencyAward';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import CreativeAgencyTeam from '@/components/team/CreativeAgencyTeam';
import CreativeAboutTwo from '@/components/about/CreativeAboutTwo';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import HomeMainBanner from '@/components/banner/HomeMainBanner';
import { useImageHoverReveal } from '@/hooks/useRevealOnHover';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import CreativeAbout from '@/components/about/CreativeAbout';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const AboutCreativeMain = () => {
    //Background color and cursor style
    useCursorAndBackground();

    // Initialize effects and animations
    useScrollSmooth();
    useImageHoverReveal();

    useGSAP(() => {
        const timer = setTimeout(() => {
            textRevealAnimation();
            animationParagraph();
            scrollMovingText();
            zoomInAnimation();
            fadeAnimation();
            teamAnimation();
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
            <InnerPageHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <CreativeAbout />
                        <HomeMainTextSlider bgColor='' titleCls='tp-about-us-2-text-title' />
                        <CreativeAboutTwo />
                        <HomeMainBanner ColorStyleCls='pink-style' />
                        <HomeMainTextSlider bgColor='pink-bg' />
                        <CreativeAgencyTeam spacingCls="pt-140" />
                        <CreativeAgencyBrand titleClass='brand-subtitle-color' />
                        <CreativeAgencyAward spacingCls='pb-120' />
                        <ArchitectureHubFunFact spacingCls='mb-60'/>
                        <CreativeAboutService />
                    </main>
                    <HomeMainFooter bgColor="#F6F6F9" buttonCls ="tp-footer-white-style"/>
                </div>
            </div>

        </>
    );
};

export default AboutCreativeMain;
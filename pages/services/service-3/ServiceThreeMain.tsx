"use client"
import DesignStudioTextAreaTwo from '@/components/text-slider/DesignStudioTextAreaTwo';
import AboutModernSuccess from '@/components/success-area/AboutModernSuccess';
import { fadeAnimation, scrollMovingText } from '@/hooks/useGsapAnimation';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import AboutModernHero from '@/components/hero-banner/AboutModernHero';
import AboutModernBanner from '@/components/banner/AboutModernBanner';
import DesignStudioBrand from '@/components/brand/DesignStudioBrand';
import DesignStudioFooter from '@/layouts/footers/DesignStudioFooter';
import ProjectCounter from '@/components/counter/ProjectCounter';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import ServiceThreeFaq from '@/components/faq/ServiceThreeFaq';
import { useImageHoverReveal } from '@/hooks/useRevealOnHover';
import CommonHeader from '@/layouts/headers/CommonHeader';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const ServiceThreeMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground();

    // Enable smooth scroll animations
    useScrollSmooth();

    // Initialize effects and animations
    useImageHoverReveal();

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
                        <AboutModernHero heroTitle='Our Services' />
                        <AboutModernBanner />
                        <DesignStudioTextAreaTwo spacingCls="pt-20" />
                        <AboutModernSuccess />
                        <div className="des-project-area pt-70 pb-120">
                            <ProjectCounter spacingCls="" />
                        </div>
                        <DesignStudioBrand />
                        <ServiceThreeFaq />
                    </main>
                    <DesignStudioFooter />
                </div>
            </div>
        </>
    );
};

export default ServiceThreeMain;
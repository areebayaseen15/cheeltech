"use client"
import { fadeAnimation, imageRevealAnimation, scrollMovingText } from '@/hooks/useGsapAnimation';
import ServiceFiveProcessArea from '@/components/process/ServiceFiveProcessArea';
import ServiceDetailsPrice from '@/components/price-area/ServiceDetailsPrice';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import ServiceFiveHero from '@/components/hero-banner/ServiceFiveHero';
import ServiceFiveBanner from '@/components/banner/ServiceFiveBanner';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import ServiceBenifit from '@/components/benefits/ServiceBenifit';
import ServiceFeature from '@/components/features/ServiceFeature';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const ServiceFiveMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#fff" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            imageRevealAnimation();
            scrollMovingText();
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor" className="cursor-bg-red-2">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <InnerPageHeader />
            
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <ServiceFiveHero />
                        <ServiceFiveBanner />
                        <ServiceFiveProcessArea />
                        <ServiceBenifit />
                        <ServiceFeature />
                        <ServiceDetailsPrice />
                    </main>
                    <HomeMainFooter bgColor='#F6F6F9' quikLinkCls="" socialBtnCls='social-btn-cls'/>
                </div>
            </div>
        </>
    );
};

export default ServiceFiveMain;
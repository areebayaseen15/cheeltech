"use client"
import { fadeAnimation, imageRevealAnimation, scrollMovingText } from '@/hooks/useGsapAnimation';
import DigitalMarketingBrandTwo from '@/components/brand/DigitalMarketingBrandTwo';
import DigitalMarketingFooter from '@/layouts/footers/DigitalMarketingFooter';
import ServiceProcessArea from '@/components/process/ServiceProcessArea';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import ServiceFourHero from '@/components/hero-banner/ServiceFourHero';
import ServiceFourBanner from '@/components/banner/ServiceFourBanner';
import InnerServiceFour from '@/components/service/InnerServiceFour';
import ServiceSolution from '@/components/service/ServiceSolution';
import ServiceFourBrand from '@/components/brand/ServiceFourBrand';
import ServicePricing from '@/components/price-area/ServicePricing';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const ServiceFourMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#F8F9FA" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            imageRevealAnimation();
            scrollMovingText();
            fadeAnimation();
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
                        <ServiceFourHero />
                        <ServiceFourBanner />
                        <ServiceSolution />
                        <div className="tp-service-4-padding-area" style={{ backgroundColor: "#F6F8EF" }}>
                            <InnerServiceFour />
                            <ServiceFourBrand />
                            <ServicePricing />
                        </div>
                        <ServiceProcessArea />
                        <DigitalMarketingBrandTwo/>
                    </main>
                    <DigitalMarketingFooter spacingCls='tp-service-4-padding-area'/>
                </div>
            </div>
        </>
    );
};

export default ServiceFourMain;
"use client"
import { fadeAnimation, imageRevealAnimation, scrollMovingText } from '@/hooks/useGsapAnimation';
import ServiceDetailsTwoProcess from '@/components/process/ServiceDetailsTwoProcess';
import ServiceDetailsTwoPrice from '@/components/price-area/ServiceDetailsTwoPrice';
import ServiceDetailsTwoBanner from '@/components/banner/ServiceDetailsTwoBanner';
import ServiceDetailsTwoAbout from '@/components/about/ServiceDetailsTwoAbout';
import ServiceSolutionTwo from '@/components/service/ServiceSolutionTwo';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import ServiceOverview from '@/components/service/ServiceOverview';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import ServiceThumb from '@/components/service/ServiceThumb';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const ServiceDetailsTwoMain = () => {
    //Background color and cursor class
    useCursorAndBackground();

    // Initialize effects and animations
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
                        <ServiceDetailsTwoAbout />
                        <ServiceDetailsTwoBanner />
                        <ServiceOverview />
                        <ServiceSolutionTwo/>
                        <ServiceThumb/>
                        <ServiceDetailsTwoProcess/>
                        <ServiceDetailsTwoPrice/>
                    </main>
                    <HomeMainFooter bgColor='#F6F6F9' quikLinkCls="" socialBtnCls='social-btn-cls'/>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsTwoMain;
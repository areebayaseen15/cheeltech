"use client"
import { fadeAnimation, innerServiceAnimation, textPerspectiveAnimation } from '@/hooks/useGsapAnimation';
import CreativeAgencyHero from '@/components/hero-banner/CreativeAgencyHero';
import CreativeAgencyBanner from '@/components/banner/CreativeAgencyBanner';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import InnerTextSlider from '@/components/text-slider/InnerTextSlider';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import InnerService from '@/components/service/InnerService';
import ServiceHeader from '@/layouts/headers/ServiceHeader';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const ServiceOneMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground();

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            textPerspectiveAnimation();
            innerServiceAnimation();
            fadeAnimation();
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
            <ServiceHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <CreativeAgencyHero title='Service' fontStyle="fs-400" />
                        <CreativeAgencyBanner />
                        <InnerService />
                        <InnerTextSlider/>
                    </main>
                    <HomeMainFooter bgColor='#F6F6F9' quikLinkCls="" socialBtnCls='social-btn-cls'/>
                </div>
            </div>
        </>
    );
};

export default ServiceOneMain;
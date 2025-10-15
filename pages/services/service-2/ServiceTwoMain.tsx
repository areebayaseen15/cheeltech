"use client"
import { charAnimation, fadeAnimation, innerServiceAnimation, panelAnimation, servicePanelAnimation, textInvertAnim1, videoAnimation } from '@/hooks/useGsapAnimation';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import ServiceTwoHero from '@/components/hero-banner/ServiceTwoHero';
import ServiceTwoBanner from '@/components/banner/ServiceTwoBanner';
import HomeMainService from '@/components/service/HomeMainService';
import HomeMainVideo from '@/components/video-area/HomeMainVideo';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import HomeMainWork from '@/components/work/HomeMainWork';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const ServiceTwoMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#fff" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            innerServiceAnimation();
            servicePanelAnimation()
            fadeAnimation();
            panelAnimation();
            videoAnimation();
            charAnimation();
            textInvertAnim1();
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor" className='cursor-bg-red-2'>
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <InnerPageHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <ServiceTwoHero />
                        <ServiceTwoBanner />
                        <HomeMainService />
                        <HomeMainVideo />
                        <HomeMainWork />
                    </main>
                    <HomeMainFooter bgColor='#F6F6F9' quikLinkCls="" socialBtnCls='social-btn-cls'/>
                </div>
            </div>
        </>
    );
};

export default ServiceTwoMain;
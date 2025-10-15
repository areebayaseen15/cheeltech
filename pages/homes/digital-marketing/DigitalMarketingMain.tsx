"use client"
import DigitalMarketingTestimonial from '@/components/testimonial/DigitalMarketingTestimonial';
import DigitalMarketingService from '@/components/service/DigitalMarketingService';
import DigitalMarketingBrandTwo from '@/components/brand/DigitalMarketingBrandTwo';
import DigitalMarketingProject from '@/components/project/DigitalMarketingProject';
import DigitalMarketingHero from '@/components/hero-banner/DigitalMarketingHero';
import DigitalMarketingAbout from '@/components/about/DigitalMarketingAbout';
import DigitalMarketingFooter from '@/layouts/footers/DigitalMarketingFooter';
import DigitalMarketingBrand from '@/components/brand/DigitalMarketingBrand';
import DigitalMarketingHeader from '@/layouts/headers/DigitalMarketingHeader';
import DigitalMarketingStep from '@/components/step/DigitalMarketingStep';
import DigitalMarketingBlog from '@/components/blog/DigitalMarketingBlog';
import DigitalMarketingTeam from '@/components/team/DigitalMarketingTeam';
import { fadeAnimation, zoomInAnimation } from '@/hooks/useGsapAnimation';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const DigitalMarketingMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground();

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => (
            fadeAnimation(),
            zoomInAnimation()
        ), 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <DigitalMarketingHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content" className='body-padding'>
                    {/* Main Content Sections */}
                    <main>
                        <DigitalMarketingHero />
                        <DigitalMarketingAbout />
                        <DigitalMarketingStep />
                        <DigitalMarketingService />
                        <DigitalMarketingBrand />
                        <DigitalMarketingProject />
                        <DigitalMarketingTeam />
                        <DigitalMarketingBrandTwo />
                        <DigitalMarketingTestimonial />
                        <DigitalMarketingBlog />
                    </main>
                    <DigitalMarketingFooter />
                </div>
            </div>

        </>
    );
};

export default DigitalMarketingMain;
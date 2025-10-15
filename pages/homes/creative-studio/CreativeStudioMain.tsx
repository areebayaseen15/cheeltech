"use client"
import CreativeStudioTestimonial from '@/components/testimonial/CreativeStudioTestimonial';
import CreativeStudioChoose from '@/components/choose-area/CreativeStudioChoose';
import CreativeStudioBrandTwo from '@/components/brand/CreativeStudioBrandTwo';
import CreativeStudioProject from '@/components/project/CreativeStudioProject';
import CreativeStudioService from '@/components/service/CreativeStudioService';
import CreativeStudioHero from '@/components/hero-banner/CreativeStudioHero';
import CreativeStudioAbout from '@/components/about/CreativeStudioAbout';
import CreativeStudioBrand from '@/components/brand/CreativeStudioBrand';
import CreativeStudioFooter from '@/layouts/footers/CreativeStudioFooter';
import CreativeStudioHeader from '@/layouts/headers/CreativeStudioHeader';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import CreativeStudioBlog from '@/components/blog/CreativeStudioBlog';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const CreativeStudioMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground()

    // Initialize effects and animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => { fadeAnimation() }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor" className="cursor-white-bg">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <CreativeStudioHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <CreativeStudioHero />
                        <CreativeStudioAbout />
                        <CreativeStudioBrandTwo />
                        <CreativeStudioProject />
                        <CreativeStudioService />
                        <CreativeStudioChoose />
                        <CreativeStudioTestimonial />
                        <CreativeStudioBrand />
                        <CreativeStudioBlog />
                    </main>
                    <CreativeStudioFooter />
                </div>
            </div>
        </>
    );
};

export default CreativeStudioMain;
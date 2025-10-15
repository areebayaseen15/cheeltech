"use client"
import { charAnimation, fadeAnimation, imageRevealAnimation, portfolioProjectAnimation, zoomInAnimation } from '@/hooks/useGsapAnimation';
import FashionStudioTestimonail from '@/components/testimonial/FashionStudioTestimonail';
import FashionStudioTextSlider from '@/components/text-slider/FashionStudioTextSlider';
import FashionStudioPortfolio from '@/components/portfolio/FashionStudioPortfolio';
import FashionStudioProject from '@/components/project/FashionStudioProject';
import FashionStudioVideo from '@/components/video-area/FashionStudioVideo';
import FashionStudioHero from '@/components/hero-banner/FashionStudioHero';
import FashionStudioHeader from '@/layouts/headers/FashionStudioHeader';
import FashionStudioAbout from '@/components/about/FashionStudioAbout';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import FasionStudioFooter from '@/layouts/footers/FasionStudioFooter';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const FashionStudioMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#F3F1EA" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            imageRevealAnimation();
            portfolioProjectAnimation();
            charAnimation();
            zoomInAnimation();
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
            <FashionStudioHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <FashionStudioHero />
                        <FashionStudioTextSlider />
                        <FashionStudioAbout />
                        <FashionStudioProject />
                        <FashionStudioVideo />
                        <FashionStudioPortfolio />
                        <FashionStudioTestimonail />
                    </main>
                    <FasionStudioFooter />
                </div>
            </div>
        </>
    );
};

export default FashionStudioMain;
"use client"
import { animationParagraph, buttonBounceAnimation, ctaAnimation, fadeAnimation, portfolioTitleAnimation, textRevealAnimation } from '@/hooks/useGsapAnimation';
import StartupAgencyTestimonial from '@/components/testimonial/StartupAgencyTestimonial';
import StartupAgencyPortfolio from '@/components/portfolio/StartupAgencyPortfolio';
import StartupAgencyChoose from '@/components/choose-area/StartupAgencyChoose';
import StartupAgencyService from '@/components/service/StartupAgencyService';
import StartupAgencyCounter from '@/components/counter/StartupAgencyCounter';
import StartupAgencyVideo from '@/components/video-area/StartupAgencyVideo';
import StartupAgencyHero from '@/components/hero-banner/StartupAgencyHero';
import StartupAgencyBanner from '@/components/banner/StartupAgencyBanner';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import StartupAgencyHeader from '@/layouts/headers/StartupAgencyHeader';
import StartupAgencyFooter from '@/layouts/footers/StartupAgencyFooter';
import StartupAgencyBrand from '@/components/brand/StartupAgencyBrand';
import StartupAgencyAbout from '@/components/about/StartupAgencyAbout';
import StartupAgencyAward from '@/components/award/StartupAgencyAward';
import StartupAgencyBlog from '@/components/blog/StartupAgencyBlog';
import StartupAgencyCta from '@/components/cta/StartupAgencyCta';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const StartupagencyMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#F5EFEA" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            animationParagraph()
            fadeAnimation();
            textRevealAnimation();
            portfolioTitleAnimation();
            ctaAnimation();
            buttonBounceAnimation();
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
            <SearchArea />
            <StartupAgencyHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <StartupAgencyHero />
                        <StartupAgencyBanner />
                        <StartupAgencyBrand />
                        <StartupAgencyAbout />
                        <StartupAgencyService />
                        <StartupAgencyPortfolio />
                        <StartupAgencyVideo />
                        <StartupAgencyTestimonial />
                        <StartupAgencyAward />
                        <StartupAgencyChoose />
                        <StartupAgencyCounter />
                        <StartupAgencyBlog />
                        <StartupAgencyCta />
                    </main>
                    <StartupAgencyFooter />
                </div>
            </div>

        </>
    );
};

export default StartupagencyMain;
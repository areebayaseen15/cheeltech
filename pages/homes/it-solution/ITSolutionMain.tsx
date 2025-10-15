"use client"
import { animationParagraph, fadeAnimation, scrollMovingText, servicePanelAnimation, splitTextAnimation, videoAnimation } from '@/hooks/useGsapAnimation';
import ITSolutionTestimonial from '@/components/testimonial/ITSolutionTestimonial';
import ITSolutionComparison from '@/components/comparison/ITSolutionComparison';
import ITSolutionBenifit from '@/components/benefits/ITSolutionBenifit';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import { useParallax } from '@/components/shared/Parallax/useParallax';
import ITSolutionProject from '@/components/project/ITSolutionProject';
import ITSolutionBrandTwo from '@/components/brand/ITSolutionBrandTwo';
import ITSolutionHero from '@/components/hero-banner/ITSolutionHero';
import ITSolutionFeature from '@/components/features/ITSolutionFaq';
import ITSolutionFooter from '@/layouts/footers/ITSolutionFooter';
import ITSolutionBrand from '@/components/brand/ITSolutionBrand';
import ITSolutionAbout from '@/components/about/ITSolutionAbout';
import ITSolutionHeader from '@/layouts/headers/ITSolutionHeader';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import ITSolutionStep from '@/components/step/ITSolutionStep';
import SearchArea from '@/components/search-area/SearchArea';
import ITSolutionFaq from '@/components/faq/ITSolutionFaq';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';
import HomeMainAbout from '@/components/about/WhoWeAre';
import HomeMainTextSlider from '@/components/text-slider/HomeMainTextSlider';
import HomeMainService from '@/components/service/HomeMainService';
import HomeMainVideo from '@/components/video-area/HomeMainVideo';
import DesignStudioBrand from '@/components/brand/DesignStudioBrand';

const ITSolutionMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#08041D" });

    // Enable smooth scroll animations
    useScrollSmooth();

    //parallax animation
    useParallax();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            animationParagraph();
            splitTextAnimation();
            servicePanelAnimation();
             videoAnimation();
                scrollMovingText();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <>
            {/* Magic cursor element */}
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <SearchArea />
            <ITSolutionHeader />

            <div id="smooth-wrapper" style={{ backgroundColor: "whitesmoke" }}>
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <ITSolutionHero />
                             <ITSolutionStep />
                        <ITSolutionBrand />
                             <HomeMainAbout />
                              <HomeMainTextSlider />
                        <HomeMainService />
                     <HomeMainVideo />
                        {/* <ITSolutionFeature /> */}
                        <ITSolutionAbout />
                        <ITSolutionProject />
                        <ITSolutionBrandTwo />
                        <ITSolutionTestimonial />
                        {/* <ITSolutionComparison /> */}
                        <ITSolutionBenifit />
                        <ITSolutionFaq />
                          <DesignStudioBrand />
                    </main>
                    <ITSolutionFooter />
                </div>
            </div>
        </>
    );
};

export default ITSolutionMain;

"use client"
import ArchitectureHubTestimonial from '@/components/testimonial/ArchitectureHubTestimonial';
import ArchitectureHubTextSlider from '@/components/text-slider/ArchitectureHubTextSlider';
import ArchitectureHubCategory from '@/components/category/ArchitectureHubCategory';
import ArchitectureHubFunFact from '@/components/funfact/ArchitectureHubFunFact';
import ArchitectureHubBrandTwo from '@/components/brand/ArchitectureHubBrandTwo';
import ArchitectureHubProject from '@/components/project/ArchitectureHubProject';
import ArchitectureHubService from '@/components/service/ArchitectureHubService';
import ArchitectureHubHero from '@/components/hero-banner/ArchitectureHubHero';
import ArchitectureHubBanner from '@/components/banner/ArchitectureHubBanner';
import ArchitectureHubAward from '@/components/award/ArchitectureHubAward';
import ArchitectureHubAbout from '@/components/about/ArchitectureHubAbout';
import ArchitectureHubBrand from '@/components/brand/ArchitectureHubBrand';
import ArchitectureHubFooter from '@/layouts/footers/ArchitectureHubFooter';
import ArchitectureHubHeader from '@/layouts/headers/ArchitectureHubHeader';
import ArchitectureHubBlog from '@/components/blog/ArchitectureHubBlog';
import ArchitectureHubStep from '@/components/step/ArchitectureHubStep';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const ArchitectureHubMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#F2F1EE" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => { fadeAnimation() }, 100)
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
            <ArchitectureHubHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <ArchitectureHubHero />
                        <ArchitectureHubCategory />
                        <ArchitectureHubBanner />
                        <ArchitectureHubAbout />
                        <ArchitectureHubService />
                        <ArchitectureHubProject />
                        <ArchitectureHubFunFact />
                        <ArchitectureHubTestimonial />
                        <ArchitectureHubTextSlider />
                        <ArchitectureHubStep />
                        <ArchitectureHubBrand />
                        <ArchitectureHubAward />
                        <ArchitectureHubBrandTwo />
                        <ArchitectureHubBlog />
                    </main>
                    <ArchitectureHubFooter />
                </div>
            </div>
        </>
    );
};

export default ArchitectureHubMain;
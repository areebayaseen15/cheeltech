"use client"
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import { fadeAnimation, panelAnimation } from '@/hooks/useGsapAnimation';
import CareerBenifit from '@/components/benefits/CareerBenifit';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import CareerOpening from '@/components/career/CareerOpening';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import CareerBanner from '@/components/banner/CareerBanner';
import CareerHero from '@/components/hero-banner/CareerHero';
import CareerSlider from '@/components/career/CareerSlider';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const CareerMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground({ bgColor: "#fff" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            panelAnimation();
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            {/* -- Begin magic cursor -- */}
            <div id="magic-cursor" className="cursor-bg-red-2">
                <div id="ball"></div>
            </div>
            {/* Global Components */}
            <BackToTop />
            <InnerPageHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <CareerHero />
                        <CareerBanner />
                        <CareerBenifit />
                        <CareerSlider />
                        <CareerOpening />
                    </main>
                    <HomeMainFooter bgColor="#F6F6F9" />
                </div>
            </div>
        </>
    );
};

export default CareerMain;
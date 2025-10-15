"use client"
import thumbImg from "../../../public/assets/img/about-us/about-us-4/about-us-4-thumb-1.jpg"
import { careerAnimation, fadeAnimation } from "@/hooks/useGsapAnimation";
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import AboutUsBanner from '@/components/banner/AboutUsBanner';
import CareerDetails from "@/components/career/CareerDetails";
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const CareerDetailsMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#fff" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            careerAnimation()
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
                        <AboutUsBanner image={thumbImg} spacingCls='pt-100' />
                        <CareerDetails />
                    </main>
                    <HomeMainFooter bgColor='#F6F6F9' buttonCls="tp-footer-white-style" />
                </div>
            </div>
        </>
    );
};

export default CareerDetailsMain;
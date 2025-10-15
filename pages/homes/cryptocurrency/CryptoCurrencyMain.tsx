"use client"
import { animationParagraph, fadeAnimation, heroBgAnimation, textRevealAnimation, zoomInAnimation } from '@/hooks/useGsapAnimation';
import CryptoCurrencyTestimonial from '@/components/testimonial/CryptoCurrencyTestimonial';
import CryptoCurrencyFeatureTwo from '@/components/features/CryptoCurrencyFeatureTwo';
import CryptoCurrencyFeature from '@/components/features/CryptoCurrencyFeature';
import CryptoCurrencyService from '@/components/service/CryptoCurrencyService';
import CryptoCurrencyHero from '@/components/hero-banner/CryptoCurrencyHero';
import CryptoCurrencyHeader from '@/layouts/headers/CryptoCurrencyHeader';
import CryptoCurrencyFooter from '@/layouts/footers/CryptoCurrencyFooter';
import CryptoCurrencyBrand from '@/components/brand/CryptoCurrencyBrand';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import CryptoCurrencyBlog from '@/components/blog/CryptoCurrencyBlog';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const CryptoCurrencyMain = () => {
    // Initialize custom cursor and optional background styles
      useCursorAndBackground();
  
      // Enable smooth scroll animations
      useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            animationParagraph();
            textRevealAnimation();
            zoomInAnimation();
            heroBgAnimation()
        }, 100)
        return () => clearTimeout(timer);
    });
    return (
        <>
            <div id="magic-cursor" className="cursor-white-bg">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <CryptoCurrencyHeader/>

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <CryptoCurrencyHero />
                        <CryptoCurrencyBrand />
                        <CryptoCurrencyFeature />
                        <CryptoCurrencyFeatureTwo />
                        <CryptoCurrencyService/>
                        <CryptoCurrencyTestimonial />
                        <CryptoCurrencyBlog/>
                    </main>
                    <CryptoCurrencyFooter />
                </div>
            </div >
        </>
    );
};

export default CryptoCurrencyMain;
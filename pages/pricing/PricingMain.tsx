"use client"
import MobileApplicationTestimonial from '@/components/testimonial/MobileApplicationTestimonial';
import MobileApplicationFaq from '@/components/faq/MobileApplicationFaq';
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import InnerPriceArea from '@/components/price-area/InnerPriceArea';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import PriceHero from '@/components/hero-banner/PriceHero';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const PricingMain = () => {
     // Initialize custom cursor and optional background styles
    useCursorAndBackground();

    // Enable smooth scroll & animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
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
            <InnerPageHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <PriceHero />
                        <InnerPriceArea />
                        <MobileApplicationTestimonial className="ff-inter" />
                        <MobileApplicationFaq />
                    </main>
                    <CreativeAgencyFooter bgColor="#0E0F11" />
                </div>
            </div>
        </>
    );
};

export default PricingMain;
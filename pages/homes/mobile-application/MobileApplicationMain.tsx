"use client"
import { fadeAnimation, gsapBackgroundAnim, panelPinAnimation } from '@/hooks/useGsapAnimation';
import { useParallax } from '@/components/shared/Parallax/useParallax';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

// Components
import MobileApplicationTestimonial from '@/components/testimonial/MobileApplicationTestimonial';
import MobileApplicationFeatureTwo from '@/components/features/MobileApplicationFeatureTwo';
import MobileApplicationReview from '@/components/review-area/MobileApplicationReview';
import MobileApplicationBenefit from '@/components/benefits/MobileApplicationBenefit';
import MobileApplicationFeature from '@/components/features/MobileApplicationFeature';
import MobileApplicationPrice from '@/components/price-area/MobileApplicationPrice';
import MobileApplicationHero from '@/components/hero-banner/MobileApplicationHero';
import MobileApplicationStack from '@/components/stack-area/MobileApplicationStack';
import MobileApplicationFooter from '@/layouts/footers/MobileApplicationFooter';
import MobileApplicationHeader from '@/layouts/headers/MobileApplicationHeader';
import MobileApplicationBrand from '@/components/brand/MobileApplicationBrand';
import MobileApplicationCta from '@/components/cta/MobileApplicationCta';
import MobileApplicationFaq from '@/components/faq/MobileApplicationFaq';
import BackToTop from '@/components/shared/BackToTop/BackToTop';

const MobileApplicationMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#08041D" });

    // Enable smooth scroll animations
    useScrollSmooth();

    // Initialize effects and animations
    useParallax();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            panelPinAnimation();
            gsapBackgroundAnim()
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <MobileApplicationHeader />

            <div id="smooth-wrapper" style={{ backgroundColor: "#F7F7FD" }}>
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <MobileApplicationHero />
                        <MobileApplicationBrand />
                        <MobileApplicationFeature />
                        <MobileApplicationFeatureTwo />
                        <MobileApplicationReview />
                        <MobileApplicationStack />
                        <MobileApplicationBenefit />
                        <MobileApplicationPrice />
                        <MobileApplicationTestimonial />
                        <MobileApplicationFaq />
                        <MobileApplicationCta />
                    </main>
                    <MobileApplicationFooter />
                </div>
            </div>
        </>
    );
};

export default MobileApplicationMain;
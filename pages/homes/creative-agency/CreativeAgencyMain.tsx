"use client"
import { animationParagraph, fadeAnimation, scrollMovingText, studioProjectAnimation, teamAnimation, textPerspectiveAnimation, textRevealAnimation } from '@/hooks/useGsapAnimation';
import CreativeAgencyShowcase from '@/components/showcase-area/CreativeAgencyShowcase';
import CreativeAgencyTestimonial from '@/components/testimonial/CreativeAgencyTestimonial';
import CreativeAgencyProject from '@/components/project/CreativeAgencyProject';
import CreativeAgencyService from '@/components/service/CreativeAgencyService';
import CreativeAgencyHero from '@/components/hero-banner/CreativeAgencyHero';
import CreativeAgencyBanner from '@/components/banner/CreativeAgencyBanner';
import CreativeAgencyAbout from '@/components/about/CreativeAgencyAbout';
import CreativeAgencyAward from '@/components/award/CreativeAgencyAward';
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import CreativeAgencyHeader from '@/layouts/headers/CreativeAgencyHeader';
import CreativeAgencyBrand from '@/components/brand/CreativeAgencyBrand';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import CreativeAgencyTeam from '@/components/team/CreativeAgencyTeam';
import CreativeAgencyStep from '@/components/step/CreativeAgencyStep';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { useImageHoverReveal } from '@/hooks/useRevealOnHover';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const CreativeAgencyMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground();

    // Enable smooth scroll animations
    useScrollSmooth();

    useImageHoverReveal();

    useGSAP(() => {
        const initializeAnimations = () => {
            textPerspectiveAnimation()
            studioProjectAnimation();
            textRevealAnimation();
            animationParagraph();
            scrollMovingText();
            fadeAnimation();
            teamAnimation();
        };

        if (document.readyState === 'complete') {
            initializeAnimations();
        } else {
            window.addEventListener('load', initializeAnimations);
        }

        return () => {
            window.removeEventListener('load', initializeAnimations);
        };
    });

    return (
        <>
            <div id="magic-cursor" className="cursor-bg-red">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <CreativeAgencyHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <CreativeAgencyHero />
                        <CreativeAgencyBanner />
                        <CreativeAgencyAbout />
                        <CreativeAgencyStep />
                        <CreativeAgencyProject />
                        <CreativeAgencyShowcase />
                        <CreativeAgencyService />
                        <CreativeAgencyBrand />
                        <CreativeAgencyAward />
                        <CreativeAgencyTestimonial />
                        <CreativeAgencyTeam />
                    </main>
                    <CreativeAgencyFooter />
                </div>
            </div>
        </>
    );
};

export default CreativeAgencyMain;
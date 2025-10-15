"use client"
import { eyeAnimation, fadeAnimation, panelAnimation, scrollMovingText, zoomInAnimation } from '@/hooks/useGsapAnimation';
import { useParallax } from '@/components/shared/Parallax/useParallax';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
// Layout Components
import CorporateAgencyFooter from '@/layouts/footers/CorporateAgencyFooter';
// UI Components
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';
// Section Components
import CorporateAgencyTestimonial from '@/components/testimonial/CorporateAgencyTestimonial';
import CorporateAgencyTextSlider from '@/components/text-slider/CorporateAgencyTextSlider';
import CorporateAgencySuccess from '@/components/success-area/CorporateAgencySuccess';
import CorporateAgencyBannerTwo from '@/components/banner/CorporateAgencyBannerTwo';
import CorporateAgencyService from '@/components/service/CorporateAgencyService';
import CorporateAgencyProject from '@/components/project/CorporateAgencyProject';
import CorporateAgencyBrandTwo from '@/components/brand/CorporateAgencyBrandTwo';
import CorporateAgencyProcess from '@/components/process/CorporateAgencyProcess';
import CorporateAgencyPrice from '@/components/price-area/CorporateAgencyPrice';
import CorporateAgencyHero from '@/components/hero-banner/CorporateAgencyHero';
import CorporateAgencyBanner from '@/components/banner/CorporateAgencyBanner';
import CorporateAgencyAbout from '@/components/about/CorporateAgencyAbout';
import CorporateAgencyBrand from '@/components/brand/CorporateAgencyBrand';
import CorporateAgencyBlog from '@/components/blog/CorporateAgencyBlog';
import CorporateAgencyHeader from '@/layouts/headers/CorporateAgencyHeader';

const CorporateAgencyMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#f4f9f8" });

   // Enable smooth scroll animations
      useScrollSmooth();
  
      // Initialize effects and animations
      useParallax();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            zoomInAnimation();
            scrollMovingText();
            panelAnimation();
            eyeAnimation()
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor" className="cursor-bg-red">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <SearchArea />
            <CorporateAgencyHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <CorporateAgencyHero />
                        <CorporateAgencyBannerTwo />
                        <CorporateAgencyAbout />
                        <CorporateAgencyBrand />
                        <CorporateAgencyService />
                        <CorporateAgencySuccess />
                        <CorporateAgencyProject />
                        <CorporateAgencyBanner />
                        <CorporateAgencyBrandTwo />
                        <CorporateAgencyProcess />
                        <CorporateAgencyPrice />
                        <CorporateAgencyTestimonial />
                        <CorporateAgencyTextSlider />
                        <CorporateAgencyBlog />
                    </main>
                    <CorporateAgencyFooter />
                </div>
            </div>
        </>
    );
};

export default CorporateAgencyMain;
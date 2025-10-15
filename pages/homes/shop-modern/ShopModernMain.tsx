"use client"
import { useGSAP } from '@gsap/react';
import React from 'react';

// Animation Hooks
import { charAnimation, fadeAnimation, productBannerAnimation } from '@/hooks/useGsapAnimation';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import useScrollSmooth from '@/hooks/useScrollSmooth';

// Layout Components
import ShopModernHeader from '@/layouts/headers/ShopModernHeader';
import ShopModernFooter from '@/layouts/footers/ShopModernFooter';
import BackToTop from '@/components/shared/BackToTop/BackToTop';

// UI Components
import ProductQuickViewModal from '@/components/modals/ProductQuickViewModal';
import CartOffcanvas from '@/components/offcanvas/CartOffcanvas';
import SearchArea from '@/components/search-area/SearchArea';
import ShopModernSubscribePopup from '@/components/Popup/ShopModernSubscribePopup';

// Page Sections
import ShopModernHero from '@/components/hero-banner/ShopModernHero';
import ShopModernAbout from '@/components/about/ShopModernAbout';
import ShopModernBanner from '@/components/banner/ShopModernBanner';
import ShopModernFeature from '@/components/features/ShopModernFeature';

// Product Sections
import ShopModernProduct from '@/components/product/ShopModernProduct';
import ShopModernProductTwo from '@/components/product/ShopModernProductTwo';
import ModernProductRelatedArea from '@/components/product/ModernProductRelatedArea';

// Marketing Sections
import ShopModernTextSlider from '@/components/text-slider/ShopModernTextSlider';
import ShopModernTestimonial from '@/components/testimonial/ShopModernTestimonial';
import ShopModernNewsletter from '@/components/newsletter/ShopModernNewsletter';
import ShopModernInstagram from '@/components/instagram/ShopModernInstagram';

const ShopModernMain = () => {
    // Initialize custom cursor and  background styles
    useCursorAndBackground({ bgColor: "#F4F0EA" })

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            charAnimation();
            productBannerAnimation();
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
            <CartOffcanvas />
            <SearchArea />
            <ProductQuickViewModal />
            <ShopModernSubscribePopup />
            <ShopModernHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <ShopModernHero />
                        <ShopModernTextSlider />
                        <ShopModernProduct />
                        <ModernProductRelatedArea />
                        <ShopModernAbout />
                        <ShopModernProductTwo />
                        <ShopModernBanner />
                        <ShopModernNewsletter />
                        <ShopModernTestimonial />
                        <ShopModernFeature />
                        <ShopModernInstagram />
                    </main>
                    <ShopModernFooter />
                </div>
            </div>

        </>
    );
};

export default ShopModernMain;
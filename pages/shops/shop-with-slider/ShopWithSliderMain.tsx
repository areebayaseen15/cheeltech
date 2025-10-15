"use client"
import ModernProductRelatedArea from '@/components/product/ModernProductRelatedArea';
import ShopModernSubscribePopup from '@/components/Popup/ShopModernSubscribePopup';
import ShopModernTestimonial from '@/components/testimonial/ShopModernTestimonial';
import ShopModernTextSlider from '@/components/text-slider/ShopModernTextSlider';
import ShopModernNewsletter from '@/components/newsletter/ShopModernNewsletter';
import ProductQuickViewModal from '@/components/modals/ProductQuickViewModal';
import ShopWithSliderHero from '@/components/hero-banner/ShopWithSliderHero';
import ShopModernInstagram from '@/components/instagram/ShopModernInstagram';
import ShopModernProductTwo from '@/components/product/ShopModernProductTwo';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import ShopModernFeature from '@/components/features/ShopModernFeature';
import { charAnimation, fadeAnimation } from '@/hooks/useGsapAnimation';
import ShopModernBanner from '@/components/banner/ShopModernBanner';
import ShopModernFooter from '@/layouts/footers/ShopModernFooter';
import ShopModernHeader from '@/layouts/headers/ShopModernHeader';
import { productBannerAnimation } from '@/hooks/useGsapAnimation';
import ShopModernAbout from '@/components/about/ShopModernAbout';
import CartOffcanvas from '@/components/offcanvas/CartOffcanvas';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import ShopCategory from '@/components/category/ShopCategory';
import SearchArea from '@/components/search-area/SearchArea';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const ShopWithSliderMain = () => {
    // Initialize effects and animations
    useCursorAndBackground({ bgColor: "#F4F0EA" })
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
            <ShopModernHeader variantClass='shop-white-header' useWhiteLogo />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <ShopWithSliderHero />
                        <ShopModernTextSlider varientClass='' />
                        <ShopCategory />
                        <ModernProductRelatedArea spacingCls='pt-40' />
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

export default ShopWithSliderMain;
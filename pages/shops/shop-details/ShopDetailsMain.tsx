"use client"
import ProductQuickViewModal from '@/components/modals/ProductQuickViewModal';
import ProductRelatedArea from '@/components/product/ProductRelatedArea';
import ProductDetailsArea from '@/components/product/ProductDetailsArea';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import { charAnimation, fadeAnimation } from '@/hooks/useGsapAnimation';
import ShopBreadcurmb from '@/components/breadcurmb/ShopBreadcurmb';
import ShopModernFooter from '@/layouts/footers/ShopModernFooter';
import ShopModernHeader from '@/layouts/headers/ShopModernHeader';
import CartOffcanvas from '@/components/offcanvas/CartOffcanvas';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const ShopDetailsMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#F4F0EA" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            charAnimation();
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
            <CartOffcanvas />
            <SearchArea />
            <ProductQuickViewModal />
            <ShopModernHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <ShopBreadcurmb />
                        <ProductDetailsArea />
                        <ProductRelatedArea />
                    </main>
                    <ShopModernFooter />
                </div>
            </div>

        </>
    );
};

export default ShopDetailsMain;
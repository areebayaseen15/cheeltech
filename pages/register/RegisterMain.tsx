"use client"
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import { charAnimation, fadeAnimation } from '@/hooks/useGsapAnimation';
import ShopModernFooter from '@/layouts/footers/ShopModernFooter';
import ShopModernHeader from '@/layouts/headers/ShopModernHeader';
import CartOffcanvas from '@/components/offcanvas/CartOffcanvas';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';
import RegisterForm from '@/components/forms/RegisterForm';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const RegisterMain = () => {
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
            <ShopModernHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <section className="tp-login-area pt-180 pb-140 p-relative z-index-1 fix">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-5 col-lg-8">
                                        <RegisterForm />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                    <ShopModernFooter />
                </div>
            </div>

        </>
    );
};

export default RegisterMain;
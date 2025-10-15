"use client"
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import errorImg from '../../../public/assets/img/error/error.png';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ErrorMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#fff" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
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
                    {/* Main Content Sections */}
                    <main>
                        <div className="tp-error-area pt-190 pb-120">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="tp-error-wrapper text-center">
                                            <h4 className="tp-error-title">Oops!</h4>
                                            <Image style={{ width: "auto", height: "auto" }} src={errorImg} alt="error" />
                                            <div className="tp-error-content">
                                                <h4 className="tp-error-title-sm">Something went Wrong...</h4>
                                                <p>Sorry, we {`couldn't`} find your page.</p>
                                                <Link className="tp-btn" href="/">Back to Home</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    {/* footer */}
                    <CreativeAgencyFooter bgColor="#0E0F11"/>
                </div>
            </div>
        </>
    );
};

export default ErrorMain;
"use client"
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import { charAnimation, fadeAnimation } from '@/hooks/useGsapAnimation';
import teamBgImg from '../../../public/assets/img/team/team-bg.png';
import ApplicationForm from '@/components/forms/ApplicationForm';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { CareerShape } from '@/svg/HeroShape';
import { useGSAP } from '@gsap/react';
import React from 'react';

const JobApplicationForm = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground();

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
            <InnerPageHeader />
            
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <div className="ar-hero-area p-relative" style={{ backgroundImage: `url(${teamBgImg.src})` }}>
                            <div className="tp-career-shape-1">
                                <span><CareerShape /></span>
                            </div>
                            <div className="container container-1230">
                                <div className="ar-about-us-4-hero-ptb">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-12">
                                            <div className="ar-hero-title-box tp_fade_anim" data-delay=".3">
                                                <span className="tp-application-subtitle mb-25">Full time</span>
                                                <h3 className="tp-career-title pb-30">UI/UX Designer</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* -- application-aera -- */}
                        <div className="tp-application-aera pb-140">
                            <div className="container justify-content-center">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="tp-contact-form-wrap tp-application-form-wrap">
                                            <ApplicationForm />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <HomeMainFooter bgColor='#F6F6F9' buttonCls="tp-footer-white-style" />
                </div>
            </div>

        </>
    );
};

export default JobApplicationForm;
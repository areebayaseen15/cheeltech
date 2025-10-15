"use client"
import aboutShape from '../../../public/assets/img/about-us/about-us-4/about-us-4-shape-1.png';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import teamBg from '../../../public/assets/img/team/team-bg.png';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import FaqArea from '@/components/faq/FaqArea';
import { CareerShape } from '@/svg/HeroShape';
import { ArrowTwenty } from '@/svg/ArrowIcons';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

const FaqMain = () => {
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
                        <div className="ar-hero-area p-relative" style={{ backgroundImage: `url(${teamBg.src})` }}>
                            <div className="tp-career-shape-1">
                                <span><CareerShape /></span>
                            </div>
                            <div className="container container-1230">
                                <div className="ar-about-us-4-hero-ptb">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-12">
                                            <div className="ar-hero-title-box tp_fade_anim" data-delay=".3">
                                                <div className="ar-about-us-4-title-box d-flex align-items-center mb-20">
                                                    <span className="tp-section-subtitle pre tp_fade_anim">Faq</span>
                                                    <div className="ar-about-us-4-icon">
                                                        <ArrowTwenty />
                                                    </div>
                                                </div>
                                                <h3 className="tp-career-title pb-30">Frequently <span className="shape-1"><Image src={aboutShape} alt="about shape" /></span> <br />asked question!</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4"></div>
                                        <div className="col-lg-8">
                                            <div className="tp-faq-text  tp_fade_anim">
                                                <p>Agntix is a beacon of best innovation and the dynamic <br /> parent a company of wealcoder and many other subsidiaries.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* faq area */}
                        <FaqArea />

                    </main>
                    <HomeMainFooter bgColor="#F6F6F9" buttonCls='tp-footer-white-style' />
                </div>
            </div>
        </>
    );
};

export default FaqMain;
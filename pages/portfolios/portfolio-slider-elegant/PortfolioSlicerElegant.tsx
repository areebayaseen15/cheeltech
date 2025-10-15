"use client"
import PortfolioFixedHeader from '@/layouts/headers/PortfolioFixedHeader';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import { portfolioSliderElegantData } from '@/data/portfolioTwoData';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioSlicerElegant = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#fff" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor" className='cursor-white-bg'>
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <PortfolioFixedHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <div className="tp-slider-elegant-area pt-140 pb-120">
                            <div className="tp-slider-elegant-wrapper">
                                <div className="tp-slider-elegant-inner-wrap">
                                    {portfolioSliderElegantData.map((item, index) => (
                                        <div key={index} className="tp-slider-elegant-item">
                                            <div
                                                className="tp-slider-elegant-thumb not-hide-cursor"
                                                data-cursor="View<br>Demo"
                                            >
                                                <Link className="cursor-hide" href={item.href}>
                                                    <Image src={item.img} alt={item.title} />
                                                </Link>
                                            </div>
                                            <div className="tp-slider-elegant-content">
                                                <h4 className="tp-slider-elegant-title">
                                                    <Link href={item.href}>{item.title}</Link>
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default PortfolioSlicerElegant;

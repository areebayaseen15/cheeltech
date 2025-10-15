"use client";
import PortfolioThumbSliderHeader from '@/layouts/headers/PortfolioThumbSliderHeader';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { skewSliderData } from '@/data/portfolioTwoData';
import { ArrowNextPrevIcon } from '@/svg/ArrowIcons';
import { useSkewSlider } from '@/hooks/useSkewSlider';
import Link from 'next/link';
import React from 'react';

const PortfolioCreativeSkewSlider = () => {
    const { sliderRef, slideNumberRef, next, prev } = useSkewSlider();

    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#000" });

    return (
        <>
            {/* -- Begin magic cursor -- */}
            <div id="magic-cursor" className="cursor-white-bg">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <PortfolioThumbSliderHeader />

            <main className="skew-slider-main">
                <div className="skew-slider-area">
                    {/* Black background layer */}
                    <div className="skew-slider-bg"></div>

                    {/* Slider container */}
                    <div className="skew-slider-wrap" ref={sliderRef}>
                        {skewSliderData.map((slide, index) => (
                            <div key={index} className="skew-slider-item slide">
                                <div
                                    className="slide__img"
                                    style={{ backgroundImage: `url(${slide.image.src})` }}
                                ></div>
                                <div className="skew-slider-content">
                                    <span>{slide.category}</span>
                                    <h4>
                                        <Link href="/portfolio-details-modern-light">
                                            {slide.title[0]}<br />
                                            {slide.isSpanInTitle ? (
                                                <span>{slide.title[1]}</span>
                                            ) : (
                                                slide.title[1]
                                            )}
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Fixed position controls (won't be affected by slide animations) */}
                    <div className="skew-slider-controls">
                        <div className="tp-portfolio-slider__copyright">
                            <p>Have a project in mind? <Link href="/contact">{`Let's`} Talk.</Link></p>
                        </div>

                        <div className="tp-portfolio-slider__social">
                            {['Fb', 'In', 'Be'].map((social, index) => (
                                <Link key={index} href="#">{social}</Link>
                            ))}
                        </div>

                        <div className="skew-slider-arrow slides-nav">
                            <button onClick={prev} className="skew-slider-prev d-flex align-items-center">
                                <span className="icon-1"><ArrowNextPrevIcon direction="left" /></span>
                                <span className="ml-5">Prev</span>
                            </button>
                            <button onClick={next} className="skew-slider-next d-flex align-items-center">
                                <span className="mr-5">Next</span>
                                <span className="icon-2"><ArrowNextPrevIcon direction="right" /></span>
                            </button>
                        </div>

                        <div className="slides-numbers-wrap">
                            <div className="slides-numbers">
                                <span className="active text-1" ref={slideNumberRef}>01</span>
                                <span className="text-2">/</span>
                                <span className="text-3">{skewSliderData.length.toString().padStart(2, '0')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default PortfolioCreativeSkewSlider;
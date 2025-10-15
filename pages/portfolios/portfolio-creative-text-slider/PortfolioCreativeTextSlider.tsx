"use client";
import { textPortfolioItems, textSliderItems, textSmallSliderItems } from '@/data/portfolioTwoData';
import PortfolioWebglHeader from '@/layouts/headers/PortfolioWebglHeader';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import useSlideshowPortfolio from '@/hooks/useSlideshowPortfolio';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { ArrowNextPrevIcon } from '@/svg/ArrowIcons';
import Link from 'next/link';
import React from 'react';

const PortfolioCreativeTextSlider = () => {
    const { sliderRef, sliderBGRef, sliderFGRef, titlesRef, nextBtnRef, prevBtnRef } = useSlideshowPortfolio();

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
            <PortfolioWebglHeader />
            <main>
                <div className="tp-portfolio-slider__main tp-portfolio-slider__style-2 fix" ref={sliderRef}>
                    {/* Copyright */}
                    <div className="tp-portfolio-slider__copyright">
                        <p>We love to create©2025</p>
                    </div>

                    {/* Contact Mail */}
                    <div className="tp-portfolio-slider__mail">
                        <Link href="mailto:agntix@gmail.com">agntix@gmail.com</Link>
                    </div>

                    {/* Social Links */}
                    <div className="tp-portfolio-slider__social">
                        <Link href="#">Fb</Link>{" "}
                        <Link href="#">In</Link>{" "}
                        <Link href="#">Be</Link>
                    </div>

                    {/* Main Slider */}
                    <div className="tp-portfolio-slider__wrap slider slider--bg" ref={sliderBGRef}>
                        {textSliderItems.map((item, index) => (
                            <div key={index} className="tp-portfolio-slider__item">
                                <div
                                    className="tp-portfolio-slider__item-inner"
                                    style={{ backgroundImage: `url(${item.bgImage.src})` }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Small Slider (hidden) */}
                    <div className="tp-portfolio-slider__wrap tp-portfolio-slider-small__wrap slider slider--fg d-none" ref={sliderFGRef}>
                        {textSmallSliderItems.map((item, index) => (
                            <div key={index} className="tp-portfolio-slider__item">
                                <div
                                    className="tp-portfolio-slider__item-inner"
                                    style={{ backgroundImage: `url(${item.bgImage.src})` }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Portfolio Items */}
                    <div className="tp-portfolio-slider-type">
                        {textPortfolioItems.map((item, index) => (
                            <div key={index} className="type__item"
                                ref={el => {
                                    if (el) titlesRef.current[index] = el;
                                }}
                            >
                                <h4 className="tp-portfolio-slider-type-title">
                                    <Link href={item.link}>{item.name}</Link>
                                </h4>
                            </div>
                        ))}
                    </div>

                    {/* Navigation */}
                    <nav className="slider-nav mb-80">
                        <button ref={prevBtnRef} className="slider-nav__item slider-nav__item--prev d-flex align-items-center ml-100">
                            <span className="icon-1">
                                <ArrowNextPrevIcon direction="left" />
                            </span>
                            <span className="slider-nav-text ml-5">Prev</span>
                        </button>
                        <button ref={nextBtnRef} className="slider-nav__item slider-nav__item--next d-flex align-items-center mr-100">
                            <span className="slider-nav-text mr-5">Next</span>
                            <span className="icon-2">
                                <ArrowNextPrevIcon direction="right" />
                            </span>
                        </button>
                    </nav>
                </div>
            </main>
        </>
    );
};

export default PortfolioCreativeTextSlider;
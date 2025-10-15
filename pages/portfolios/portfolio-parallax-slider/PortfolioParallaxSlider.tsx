"use client";
import { swiperParallaxOptions, useParallaxSwiper } from '@/constants/swiper';
import PortfolioWebglHeader from '@/layouts/headers/PortfolioWebglHeader';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { parallaxSlideItems } from '@/data/portfolioTwoData';
import { ArrowSvg, ButtonBlurFilter } from '@/svg';
import React, { useRef } from 'react';
import Link from 'next/link';

interface SlideItem {
    backgroundImage: string;
    subtitle: string;
    title: string;
    filterId: string;
}

const PortfolioParallaxSlider = () => {
    const swiperRef = useRef<SwiperRef>(null!);
    useParallaxSwiper(swiperRef);

    // Set background color & cursor
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
                <section className="tp-showcase-slider">
                    <div className="tp-showcase-slider-main p-relative">
                        <Swiper ref={swiperRef} {...swiperParallaxOptions}>
                            {parallaxSlideItems.map((slide: SlideItem, index: number) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="tp-showcase-slider-bg"
                                        style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                                        data-swiper-parallax="1152"
                                    >
                                        <div className="container container-1300">
                                            <div className="row">
                                                <div className="tp-showcase-slider-content z-index-2">
                                                    <h6 className="tp-showcase-slider-subtitle">{slide.subtitle}</h6>
                                                    <h1 className="tp-showcase-slider-title">
                                                        <Link href="/portfolio-details-gallery-light">
                                                            <span>{slide.title}</span>
                                                        </Link>
                                                    </h1>
                                                    <Link href="/portfolio-details-gallery-light" className="tp-btn-black btn-green-light-bg">
                                                        <span className="tp-btn-black-filter-blur">
                                                            <ButtonBlurFilter filterId={slide.filterId} />
                                                        </span>
                                                        <span className="tp-btn-black-filter d-inline-flex align-items-center" style={{ filter: `url(#${slide.filterId})` }}>
                                                            <span className="tp-btn-black-text">View our work</span>
                                                            <span className="tp-btn-black-circle">
                                                                <ArrowSvg />
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="tp-showcase-slider-button-wrap">
                            <div className="swiper-button-next" tabIndex={0} role="button" aria-label="Next slide">
                                <div><span>Next Slide</span></div>
                                <div><i className="fas fa-chevron-right"></i></div>
                            </div>
                            <div className="swiper-button-prev" tabIndex={0} role="button" aria-label="Previous slide">
                                <div><i className="fas fa-chevron-left"></i></div>
                                <div><span>Prev Slide</span></div>
                            </div>
                        </div>

                        <div className="swiper-pagination"></div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default PortfolioParallaxSlider;
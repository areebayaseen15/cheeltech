"use client";
import { EffectCoverflow, Keyboard, Mousewheel, Autoplay, Navigation, Controller, Pagination } from 'swiper/modules';
import PortfolioWebglHeader from '@/layouts/headers/PortfolioWebglHeader';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import React, { useRef, useEffect, useState } from 'react';
import {ArrowNextPrevIcon } from '@/svg/ArrowIcons';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import portfolioData from '@/data/portfolioData';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioCoverflowMain = () => {
    const mainSwiperRef = useRef<SwiperType | null>(null);
    const textSwiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#fff" });

    const coverflowParams = {
        modules: [EffectCoverflow, Keyboard, Mousewheel, Autoplay, Navigation, Controller, Pagination],
        className:"coverflow-slider-active fix",
        loop: true,
        effect: "coverflow",
        autoHeight: false,
        mousewheel: true,
        speed: 1500,
        spaceBetween: 0,
        centeredSlides: true,
        grabCursor: true,
        keyboard: { enabled: true },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.coverflow-slider-next',
            prevEl: '.coverflow-slider-prev',
            clickable: true,
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
                coverflowEffect: {
                    scale: 0.7
                }
            },
            991: {
                slidesPerView: 3,
                coverflowEffect: {
                    scale: 0.8
                }
            },
            1400: {
                slidesPerView: 4,
                coverflowEffect: {
                    scale: 0.95
                }
            },
        },
        onSwiper: (swiper: SwiperType) => {
            mainSwiperRef.current = swiper;
        },
        onSlideChange: (swiper: SwiperType) => {
            setActiveIndex(swiper.realIndex);
            if (textSwiperRef.current) {
                textSwiperRef.current.slideTo(swiper.realIndex);
            }
        }
    };
    
    // Sync sliders after mount
    useEffect(() => {
        if (mainSwiperRef.current && textSwiperRef.current) {
            mainSwiperRef.current.controller.control = textSwiperRef.current;
            textSwiperRef.current.controller.control = mainSwiperRef.current;
        }
    }, []);

    // Display portfolio items for the coverflow slider
    const displayPortfolioItems = portfolioData.slice(16, 27);

    return (
        <>
            <div id="magic-cursor" className="cursor-white-bg">
                <div id="ball"></div>
            </div>
            {/* Global Components */}
            <BackToTop />
            <PortfolioWebglHeader customClass='header-fixed tp-header-main-custom pt-10' logoBlack={true} />

            <main>
                {/* -- project slider area start -- */}
                <div className="coverflow-slider-main fix">
                    <div className="coverflow-slider-wrap">
                        <Swiper {...coverflowParams}>
                            {displayPortfolioItems.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="coverflow-slider-item">
                                        <Image src={item.image} style={{ width: "100%", height: "auto" }} priority alt={item.title} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="coverflow-slider-text-wrap">
                        <div className="coverflow-slider-text-inner">
                            <div className="coverflow-slider-content text-center">
                                <h4 className="coverflow-slider-title-sm">
                                    <Link className="tp-line-white" href={displayPortfolioItems[activeIndex].link}>
                                        {displayPortfolioItems[activeIndex].title}
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="coverflow-slider-arrow">
                        <button className="coverflow-slider-prev pl-100">
                            <span><ArrowNextPrevIcon direction="left" strokeColor='currentcolor'/></span>
                            <span>Prev</span>
                        </button>
                        <button className="coverflow-slider-next pr-100">
                            <span>Next</span>
                            <span><ArrowNextPrevIcon direction="right" strokeColor='currentcolor'/></span>
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default PortfolioCoverflowMain;
"use client"
import { addEvents, slideNextTransitionStart, slidePrevTransitionStart, verTextFragment } from '@/utils/WebglAnim';
import { portfolioWebglSlides, sliderImages } from '@/data/portfolioTwoData';
import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import PortfolioWebglHeader from '@/layouts/headers/PortfolioWebglHeader';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef } from 'react';
import { WebGL } from '@/plugins';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioWebglMain = () => {
    const webGLContainerRef = useRef<HTMLDivElement>(null);
    // Set background color & cursor
    useCursorAndBackground({ bgColor: "#000" });

    useEffect(() => {
        if (webGLContainerRef.current) {
            const webGL = new WebGL({
                vertex: verTextFragment().vertex,
                fragment: verTextFragment().fragment,
            });
            // Instantiate WebGL
            addEvents(webGL)
            webGLContainerRef.current.appendChild(webGL.renderer.domElement);
            return () => {
                webGL.stop();
            };
        }
    }, []);

    return (
        <>
            <div id="magic-cursor" className="cursor-white-bg">
                <div id="ball"></div>
            </div>
            {/* Global Components */}
            <BackToTop />
            <PortfolioWebglHeader />
            <main>
                <div id="port-showcase-slider-main">
                    <div className="port-showcase-slider-spaces p-relative">
                        <div className="port-showcase-slider-wrap tp-slider-parallax fix" id="showcase-slider-holder"
                            data-pattern-img="assets/img/webgl/1.jpg">
                            <div id="showcase-slider" className="swiper-container parallax-slider-active-2 p-relative">
                                <Swiper
                                    direction="horizontal"
                                    slidesPerView="auto"
                                    touchStartPreventDefault={false}
                                    speed={1000}
                                    effect="fade"
                                    loop={true}
                                    mousewheel={true}
                                    simulateTouch={true}
                                    navigation={{
                                        nextEl: '.swiper-next',
                                        prevEl: '.swiper-prev',
                                    }}
                                    pagination={{
                                        el: '.tp-slider-dot',
                                        clickable: true,
                                    }}
                                    modules={[Navigation, Pagination, Autoplay, Mousewheel]}
                                    onSlidePrevTransitionStart={slidePrevTransitionStart}
                                    onSlideNextTransitionStart={slideNextTransitionStart}
                                    id="trigger-slides"
                                >
                                    {portfolioWebglSlides.map((item, i) => (
                                        <SwiperSlide key={item.id}>
                                            <div className={`slide-wrap ${i === 0 ? 'active' : ''}`} data-slide={i}></div>
                                            <div className="container container-1230">
                                                <div className="row justify-content-center">
                                                    <div className="col-xl-8">
                                                        <div className="port-showcase-slider-item">
                                                            <div className="port-showcase-slider-content">
                                                                <span className="port-showcase-slider-subtitle">
                                                                    <span>[ {item.categories.join(", ")} ]</span>
                                                                </span>
                                                                <Link href={item.link}>
                                                                    <h4 className="port-showcase-slider-title">
                                                                        <span>{item.title}</span>
                                                                    </h4>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            <div className="tp-showcase-arrow-box d-flex justify-content-between">
                                <button className="tp-showcase__button-prev swiper-prev d-inline-flex align-items-center">
                                    <i className="fas fa-chevron-left"></i>
                                    <span>Prev</span>
                                </button>
                                <button className="tp-showcase__button-next swiper-next d-inline-flex align-items-center">
                                    <span>Next</span>
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
                            <div className="tp-slider-dot d-none d-md-block"></div>
                            <div className="port-showcase-slider-social d-none d-md-block">
                                <Link className="tp-hover-btn-item" href="#">Fb</Link>
                                <Link className="tp-hover-btn-item" href="#">In</Link>
                                <Link className="tp-hover-btn-item" href="#">Be</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  canvas slider */}
                <div id="canvas-slider" className="canvas-slider" ref={webGLContainerRef}>
                    {sliderImages.map((imgSrc, index) => (
                        <div key={index} className="slider-img" data-slide={index}>
                            <Image
                                className="slide-img"
                                src={imgSrc}
                                alt="showcase-img"
                                style={{ height: "auto" }}
                            />
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default PortfolioWebglMain;
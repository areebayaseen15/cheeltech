"use client"
import authorImg from '../../../../public/assets/img/portfolio/portfolio-details-6/portfolio-details-author.jpg';
import ImageComparisonHeader from '@/layouts/headers/ImageComparisonHeader';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import { portfolioDetailsImgSlider } from '@/data/portfolioTwoData';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import React, { useEffect, useRef, useState } from 'react';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import CircleIcon from '@/svg/CircleIcon';
import { useGSAP } from '@gsap/react';
import Slider from 'react-slick';
import { ArrowSvg } from '@/svg';
import Link from 'next/link';
import Image from 'next/image';

const PortfolioImageComparison = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ customClass: "tp-magic-cursor" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
        }, 100)
        return () => clearTimeout(timer);
    });

    // Slider state and ref
    const sliderRef = useRef<Slider>(null);
    const sliderContainerRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);

    // Slider settings
    const sliderSettings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        vertical: true,
        verticalSwiping: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: false,
                    dots: true,
                    verticalSwiping: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: false,
                    dots: true,
                    verticalSwiping: false,
                }
            }
        ],
        beforeChange: (_: number, next: number) => {
            setCurrentSlide(next);
            updateProgress(next, totalSlides);
        }
    };

    // Progress update function
    const updateProgress = (current: number, total: number) => {
        const progressPercentage = ((current + 1) / total) * 100;
        const circle = document.querySelector('.circle') as SVGPathElement;
        const percentageText = document.querySelector('.percentage-text') as SVGTextElement;

        if (circle && percentageText) {
            circle.setAttribute('stroke-dasharray', `${progressPercentage}, 100`);
            percentageText.textContent = `${Math.round(progressPercentage)}%`;
        }
    };

    // Wheel event handler
    const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            sliderRef.current?.slickPrev();
        } else {
            sliderRef.current?.slickNext();
        }
    };

    // Add and remove wheel event listener
    useEffect(() => {
        const sliderElement = sliderContainerRef.current;
        if (!sliderElement) return;

        // Options to make event listener non-passive
        const options = {
            passive: false as const
        };

        sliderElement.addEventListener('wheel', handleWheel, options);

        return () => {
            sliderElement.removeEventListener('wheel', handleWheel);
        };
    }, []);

    // Initialize slider
    useEffect(() => {
        if (sliderRef.current) {
            const slick = sliderRef.current;
            const childrenLength = slick.props.children ? React.Children.count(slick.props.children) : 0;
            setTotalSlides(childrenLength);
            updateProgress(0, childrenLength);
        }
    }, []);

    return (
        <>
            <div id="magic-cursor" className='cursor-bg-red'>
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <ImageComparisonHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <div className="tp-pd-6-hero-ptb z-index-1 pt-100">
                            <div className="container-fluid">
                                <div className="tp-pd-6-hero-wrapper">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 order-2 order-lg-1">
                                            <div className="tp-pd-6-hero-heading pt-100 pb-80">
                                                <h3 className="tp-pd-6-hero-title">Simple
                                                    Logistics</h3>
                                                <p>Studio focusing on designing and <br />
                                                    developing advanced and intuitive <br />
                                                    mobile ecosystems.</p>
                                                <div className="tp-pd-6-hero-btn-wrap">
                                                    <Link className="tp-portfolio-details-btn" href="#">Visit Site <span><ArrowSvg strokeWidth={2} /></span></Link>
                                                </div>
                                            </div>
                                            <div className="tp-pd-6-hero-progress d-none d-lg-block">
                                                <div className="progress-circle"><CircleIcon /></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                                            <div className="tp-pd-6-hero-slider-wrapper">
                                                <div
                                                    className="tp-pd-6-hero-slider-active"
                                                    ref={sliderContainerRef}
                                                >
                                                    <Slider ref={sliderRef} {...sliderSettings}>
                                                        {portfolioDetailsImgSlider.map((src, index) => (
                                                            <div key={index} className="tp-pd-6-hero-slider-thumb">
                                                                <Image priority style={{ width: "100%", height: "auto" }} src={src} alt={`portfolio-slide-${index + 1}`} />
                                                            </div>
                                                        ))}
                                                    </Slider>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 order-3 order-lg-3">
                                            <div className="tp-pd-6-hero-wrap">
                                                <div className="tp-pd-6-hero-content pb-100">
                                                    <div className="tp-pd-6-hero-fraction">
                                                        <div id="slider-counter">
                                                            <span id="current-slide">{currentSlide + 1}</span><span className="ml-10">/</span><span id="total-slides">{totalSlides}</span>
                                                        </div>
                                                    </div>
                                                    <div className="tp-pd-6-hero-info-box">
                                                        <div className="tp-pd-6-hero-info-item mb-20">
                                                            <span>Client</span>
                                                            <h5>Envato Market</h5>
                                                        </div>
                                                        <div className="tp-pd-6-hero-info-item mb-20">
                                                            <span>Role</span>
                                                            <h5>full stack dev/ motion</h5>
                                                        </div>
                                                        <div className="tp-pd-6-hero-info-item mb-20">
                                                            <span>Date</span>
                                                            <h5>8 March 2025</h5>
                                                        </div>
                                                        <div className="tp-pd-6-hero-info-item mb-20">
                                                            <span>Awards</span>
                                                            <h5>FWA of the day</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tp-pd-6-hero-thumb p-relative d-none d-lg-block">
                                                    <div className="tp-pd-6-hero-thumb-text">
                                                        <span className="text-1">02</span>
                                                        <span className="text-2">2025</span>
                                                    </div>
                                                    <Image style={{ width: "100%", height: "auto" }} src={authorImg} alt="author image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default PortfolioImageComparison;
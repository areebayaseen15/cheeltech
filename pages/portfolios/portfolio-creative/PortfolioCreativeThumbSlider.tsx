"use client";
import PortfolioThumbSliderHeader from '@/layouts/headers/PortfolioThumbSliderHeader';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import { portfolioThumbSliderItems } from '@/data/portfolioTwoData';
import useSlideshowPortfolio from '@/hooks/useSlideshowPortfolio';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { ArrowNextPrevIcon } from '@/svg/ArrowIcons';
import Link from 'next/link';

const PortfolioCreativeThumbSlider: React.FC = () => {
    const { sliderRef, sliderBGRef, sliderFGRef, titlesRef, nextBtnRef, prevBtnRef } = useSlideshowPortfolio();

    // Initialize custom cursor and optional background styles
    useCursorAndBackground();

    return (
        <>
            <div id="magic-cursor" className="cursor-white-bg">
                <div id="ball"></div>
            </div>
            {/* Global Components */}
            <BackToTop />
            <PortfolioThumbSliderHeader />
            <main>
                <div className="tp-portfolio-slider__main fix" ref={sliderRef}>
                    {/* Contact information */}
                    <div className="tp-portfolio-slider__copyright d-none d-lg-block">
                        <p>
                            Have a project in mind?{' '}
                            <Link href="#">
                                Let&apos;s Talk.
                            </Link>
                        </p>
                    </div>

                    <div className="tp-portfolio-slider__mail d-none d-sm-block">
                        <Link href="mailto:agntix@gmail.com">
                            agntix@gmail.com
                        </Link>
                    </div>

                    <div className="tp-portfolio-slider__social d-none d-sm-block">
                        <Link href="#">Fb</Link>{" "}
                        <Link href="#">In</Link>{" "}
                        <Link href="#">Be</Link>
                    </div>

                    {/* Main slider */}
                    <div className="tp-portfolio-slider__wrap slider slider--bg" ref={sliderBGRef}>
                        {portfolioThumbSliderItems.map((item) => (
                            <div key={`main-${item.id}`} className="tp-portfolio-slider__item">
                                <div
                                    className="tp-portfolio-slider__item-inner"
                                    style={{ backgroundImage: `url(${item.image.src})` }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Small slider */}
                    <div className="tp-portfolio-slider__wrap tp-portfolio-slider-small__wrap slider slider--fg" ref={sliderFGRef}>
                        {portfolioThumbSliderItems.map((item) => (
                            <div key={`small-${item.id}`} className="tp-portfolio-slider__item">
                                <div
                                    className="tp-portfolio-slider__item-inner"
                                    style={{ backgroundImage: `url(${item.smallImage.src})` }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Portfolio names */}
                    <div className="tp-portfolio-slider-type">
                        {portfolioThumbSliderItems.map((item, index) => (
                            <div
                                key={`name-${item.id}`}
                                className="type__item"
                                ref={el => {
                                    if (el) titlesRef.current[index] = el;
                                }}
                            >
                                <h4 className="tp-portfolio-slider-type-title">
                                    <Link href={item.link}>
                                        {item.name}
                                    </Link>
                                </h4>
                            </div>
                        ))}
                    </div>

                    {/* Navigation */}
                    <nav className="slider-nav mb-80">
                        <button
                            className="slider-nav__item slider-nav__item--prev d-flex align-items-center ml-100"
                            aria-label="Previous slide"
                            ref={prevBtnRef}>
                            <span className="icon-1"><ArrowNextPrevIcon direction="left" /></span>
                            <span className="slider-nav-text ml-5">Prev</span>
                        </button>

                        <button
                            className="slider-nav__item slider-nav__item--next d-flex align-items-center mr-100"
                            aria-label="Next slide"
                            ref={nextBtnRef}>
                            <span className="slider-nav-text mr-5">Next</span>
                            <span className="icon-2"> <ArrowNextPrevIcon direction="right" /></span>
                        </button>
                    </nav>
                </div>
            </main>
        </>
    );
};

export default PortfolioCreativeThumbSlider;
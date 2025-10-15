"use client"
import PortfolioDetailsBrandOverview from '@/components/brand/PortfolioDetailsBrandOverview';
import PortfolioDetailsThumbSlider from '@/components/thumb/PortfolioDetailsThumbSlider';
import PortfoliDetailsGalleryBanner from '@/components/banner/PortfoliDetailsGalleryBanner';
import PortfolioDetailsThumbThree from '@/components/thumb/PortfolioDetailsThumbThree';
import PortfolioDetailsTwoArea from '@/components/portfolio/PortfolioDetailsTwoArea';
import PortfolioDetailsStep from '@/components/step/PortfolioDetailsStep';
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import PrevNextArrow from '@/svg/PrevNextArrow';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

const PortfolioDetailsGallery = () => {
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

    return (
        <>
            <div id="magic-cursor" className='cursor-bg-red'>
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <InnerPageHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <PortfolioDetailsTwoArea />
                        <PortfoliDetailsGalleryBanner />
                        <PortfolioDetailsBrandOverview />
                        <PortfolioDetailsThumbSlider />
                        <PortfolioDetailsStep />
                        <PortfolioDetailsThumbThree />
                        {/* portfolio details np start */}
                        <div className="tp-pd-2-np-ptb pb-120">
                            <div className="container container-1230">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="tp-pd-2-np-content d-flex justify-content-center align-items-center flex-wrap">
                                            <div className="tp_fade_anim" data-delay=".3" data-fade-from="top" data-ease="bounce">
                                                <Link href="#"><span><PrevNextArrow direction='left' /></span> Prev Work
                                                </Link>
                                            </div>
                                            <div className="tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                                <Link href="#">Next Work <span><PrevNextArrow direction='right' /></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <CreativeAgencyFooter bgColor="#1b1b1d" />
                </div>
            </div>
        </>
    );
};

export default PortfolioDetailsGallery;
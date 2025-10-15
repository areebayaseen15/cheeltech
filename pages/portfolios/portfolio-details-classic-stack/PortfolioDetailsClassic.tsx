
"use client"
import portfolioImg from '../../../../public/assets/img/portfolio/portfolio-details-1/portfolio-details-4.jpg';
import PortfolioDetailsThumbTwo from '@/components/thumb/PortfolioDetailsThumbTwo';
import PortfolioDetailsNextPrv from '@/components/portfolio/PortfolioDetailsNextPrv';
import PortfolioDetailsThumb from '@/components/thumb/PortfolioDetailsThumb';
import PortfolioDetailsBanner from '@/components/banner/PortfolioDetailsBanner';
import PortfolioDetailsAbout from '@/components/about/PortfolioDetailsAbout';
import PortfolioDetailsWork from '@/components/work/PortfolioDetailsWork';
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { useImageHoverReveal } from '@/hooks/useRevealOnHover';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import { ArrowSvg } from '@/svg';
import Link from 'next/link';

const PortfolioDetailsClassic = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground();

    // Enable smooth scroll animations
    useScrollSmooth();

    // image hover animations
    useImageHoverReveal();

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
                        <PortfolioDetailsBanner />
                        <div className="tp-portfolio-details-1-ptb pb-100">
                            <div className="container container-1430">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="tp-portfolio-details-1-heading">
                                            <span className="tp-portfolio-details-1-sub tp_fade_anim" data-delay=".3">Digital platform</span>
                                            <h3 className="tp-portfolio-details-1-title tp_fade_anim" data-delay=".5">
                                                Olivia Rivers
                                            </h3>
                                            <div className="tp-portfolio-details-1-btn tp_fade_anim" data-delay=".7">
                                                <Link className="tp-portfolio-details-btn" href="#">Visit Site <span><ArrowSvg strokeWidth={2} /></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tp-portfolio-details-1-content">
                                            <p>We provide digital experience services to startups & <br />
                                                small businesses. We help our clients succeed by creating <br />
                                                brand identities, digital experiences.</p>
                                            <div className="tp-portfolio-details-1-list">
                                                <ul>
                                                    <li><span>Client :</span> Aqlova</li>
                                                    <li><span>Date :</span> 17 September 2025</li>
                                                    <li><span>Role :</span> Brand , Product</li>
                                                    <li><span>Share :</span> Facebook ,Twitter, LinkedIn</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <PortfolioDetailsThumb />
                        <PortfolioDetailsAbout />
                        <PortfolioDetailsBanner
                            varientCls="hight"
                            spacingCls=""
                            image={portfolioImg}
                            alt="Portfolio bottom banner"
                        />
                        <PortfolioDetailsWork />
                        <PortfolioDetailsThumbTwo />
                        <PortfolioDetailsNextPrv />
                    </main>
                    <CreativeAgencyFooter bgColor="#1b1b1d" />
                </div>
            </div>
        </>
    );
};

export default PortfolioDetailsClassic;
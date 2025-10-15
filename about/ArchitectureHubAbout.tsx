
import aboutShape from '../../../public/assets/img/home-08/about/about-shape.png';
import aboutBg from '../../../public/assets/img/home-08/hero/hero-bg-shape-2.png';
import about1 from '../../../public/assets/img/home-08/about/about-1.jpg';
import about2 from '../../../public/assets/img/home-08/about/about-2.jpg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowFour } from '@/svg';

const ArchitectureHubAbout = () => {
    return (
        <div className="ar-about-area pt-120 pb-160">
            <div className="container">
                <div className="ar-about-title-wrap mb-60">
                    <div className="row align-items-end">
                        <div className="col-xl-8 col-lg-8">
                            <div className="ar-about-title-box">
                                <span className="tp-section-subtitle-satisfy mb-20 tp_fade_anim" data-delay=".3">Agntix Office</span>
                                <h3 className="tp-section-title-clash-600 fs-60 fw-400 mb-0 pb-40 tp_fade_anim" data-delay=".4">
                                    Through a unique combination of engineering,
                                    construction and design disciplines & expertise.
                                </h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 d-none d-lg-block">
                            <div className="ar-about-top-img text-end">
                                <Image data-speed=".9" src={about1} alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-end">
                    <div className="col-xl-5 col-lg-5 col-md-7">
                        <div className="ar-about-thumb p-relative">
                            <Image style={{ width: "100%", height: "auto" }} data-speed=".8" src={about2} alt="about" />
                            <Image className="ar-about-shape" src={aboutShape} alt="about-shape" />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-10 order-1 order-lg-0">
                        <div className="ar-about-content">
                            <h3 className="ar-about-title-sm tp_fade_anim" data-delay=".3">
                                Urban design do
                                together the many
                                strands of place-making,
                                but the majority have
                                suffered.
                            </h3>
                            <div className="tp_fade_anim" data-delay=".4">
                                <p>
                                    One began as a collaborative
                                    architectural & landscape workshop,
                                    and has remained true to its trans
                                    disciplinary
                                </p>
                            </div>
                            <div className="tp-btn-red-circle-box tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                <Link className="tp-btn-red-circle-icon" href="/about-us-light">
                                    <span><ArrowFour /></span>
                                </Link>
                                <Link className="tp-btn-red-circle-text" href="/about-us-light">About Us</Link>
                                <Link className="tp-btn-red-circle-icon" href="/about-us-light">
                                    <span><ArrowFour /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-5 order-0 order-lg-0">
                        <div data-speed="1.1" className="ar-about-exp-wrap d-flex justify-content-xxl-start justify-content-end">
                            <div className="ar-about-exp-box" style={{ backgroundImage: `url(${aboutBg.src})` }}>
                                <span>Years of <br /> Experience</span>
                                <h4>17</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArchitectureHubAbout;
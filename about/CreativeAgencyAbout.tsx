import about1 from '../../../public/assets/img/home-06/about/about-1.jpg';
import about2 from '../../../public/assets/img/home-06/about/about-3.jpg';
import about3 from '../../../public/assets/img/home-06/about/about-2.jpg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CreativeAgencyAbout = () => {
    return (
        <div className="studio-about-area pt-200 pb-140">
            <div className="container container-1830">
                <div className="studio-about-wrap">
                    <div className="row align-items-start">
                        <div className="col-xl-10">
                            <div className="studio-about-title-box mb-80">
                                <span className="tp-section-subtitle-clash clash-subtitle-pos">
                                    Our <br /> Services
                                    <i>
                                        <svg width="102" height="9" viewBox="0 0 102 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M98 8L101.5 4.5L98 1M1 4H101V5H1V4Z" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </i>
                                </span>
                                <h3 className="tp-section-title-clash tp-text-revel-anim"><span className="clash-subtitle-space-1">{`We're`}</span><br /> a creative digital studio.</h3>
                            </div>
                        </div>
                        <div className="col-xl-2 d-none d-xl-block">
                            <div className="studio-about-thumb">
                                <Image style={{ width: "100%", height: "auto" }} data-speed=".8" src={about2} alt="about" />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="studio-about-thumb thumb-1">
                                <Image data-speed=".8" src={about1} alt="about" />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="studio-about-content tp_text_anim">
                                <p className="mb-30">
                                    We have been creating digital
                                    products & providing design support
                                    to ambitious startups & corporations
                                    since 2016.
                                </p>
                                <p className="mb-40">
                                    As an award-winning agency with
                                    in the digital jungle, agntix® transcends aesthetics,
                                    crafting your vision into a legacy that endures.
                                </p>
                                <div className="tp_fade_anim" data-fade-from="top" data-delay=".7" data-ease="bounce">
                                    <Link className="tp-btn-red-border" href="/contact">Get in Touch</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 d-none d-xl-block">
                            <div className="studio-about-thumb text-end text-xxl-start">
                                <Image data-speed="1.1" src={about3} alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyAbout;
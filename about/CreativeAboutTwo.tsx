import about1 from '../../../public/assets/img/about-us/about-us/about-us-2-1.jpg';
import about2 from '../../../public/assets/img/about-us/about-us/about-us-2-2.jpg';
import bgShape from '../../../public/assets/img/home-08/hero/hero-bg-shape-2.png';
import { ArrowTwenty } from '@/svg/ArrowIcons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CreativeAboutTwo = () => {
    return (
        <div className="studio-about-area pt-200 pb-140">
            <div className="container container-1830">
                <div className="studio-about-wrap">
                    <div className="row align-items-start">
                        <div className="col-xl-10">
                            <div className="studio-about-title-box mb-80">
                                <span className="tp-section-subtitle-clash clash-subtitle-pos about-us-2">
                                    About <br />
                                    our Studio
                                    <i><ArrowTwenty /></i>
                                </span>
                                <h3 className="tp-section-title-clash tp-text-revel-anim"><span className="clash-subtitle-space-1">{`We're`}</span><br /> a creative digital studio.</h3>
                            </div>
                        </div>
                        <div className="col-xl-2 d-none d-xl-block">
                            <div className="studio-about-thumb">
                                <Image style={{ width: "100%", height: "auto" }} data-speed=".8" src={about1} alt="about image" />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="studio-about-thumb thumb-1">
                                <Image style={{ width: "100%", height: "auto" }} data-speed=".8" src={about2} alt="about image" />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="studio-about-content about-us-2 tp_text_anim">
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
                                    <Link className="tp-btn-red-border about-us-2" href="/contact">Get in Touch</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 d-none d-xl-block">
                            <div data-speed="1.1" className="ar-about-exp-wrap d-flex justify-content-xxl-start justify-content-end">
                                <div className="ar-about-exp-box" style={{ backgroundImage: `url(${bgShape.src})` }}>
                                    <span>Years of <br /> Experience</span>
                                    <h4>17</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeAboutTwo;
import { ArrowEightteen, ArrowSvg, ArrowTwo } from '@/svg'; import Image from 'next/image';
import shape from '../../../public/assets/img/home-14/about/about-shape.png';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Link from 'next/link';
import React from 'react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollToPlugin);

const PersonalPortfolioAbout = () => {
    return (
        <div className="pp-about-area pp-about-ptb p-relative pt-160 pb-160">
            <div className="pp-about-shape">
                <Image data-speed=".8" src={shape} alt="shape" />
            </div>
            <div className="container container-1430">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="pp-about-left">
                            <span className="tp-section-subtitle-clash clash-subtitle-pos body-ff">
                                About Me
                                <i> <ArrowTwo /> </i>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="pp-about-heading pb-55">
                            <h3 className="tp-section-title-teko fs-80 tp_fade_anim">
                                I’m a <span>selectively skilled</span> product <br />
                                designer with strong focus on producing <br />
                                high quality and impactful digital <br />
                                experience.
                            </h3>
                        </div>
                        <div className="pp-about-wrap">
                            <div className="pp-about-bottom-btn smooth">
                                <Link href="#" onClick={(e) => {
                                    e.preventDefault();
                                    gsap.to(window, { duration: 1, scrollTo: "#down" });
                                }}><span><ArrowEightteen /></span> </Link>
                            </div>
                            <div className="pp-about-content tp_text_anim">
                                <p>
                                    {`I'm`} a French digital designer and web developer <br />
                                    with over 10 years of experience. At the crossroads <br />
                                    of design, motion and web development, <br />
                                    the diversity of my skills
                                </p>
                                <div className="pp-about-btn">
                                    <div className="tp-btn-red-circle-box tp-pp-btn-style tp_fade_anim" data-delay=".7" data-fade-from="top" data-ease="bounce">
                                        <Link className="tp-btn-red-circle-icon" href="/about-me-light">
                                            <span>
                                                <ArrowSvg width={12} height={12} />
                                            </span>
                                        </Link>
                                        <Link className="tp-btn-red-circle-text" href="/about-me-light">About Me</Link>
                                        <Link className="tp-btn-red-circle-icon" href="/about-me-light">
                                            <span>
                                                <ArrowSvg width={12} height={12} />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioAbout;
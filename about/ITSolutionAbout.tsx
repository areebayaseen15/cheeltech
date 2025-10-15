import aboutShape1 from '../../../public/assets/img/images/about-shape-1.png';
import aboutShape2 from '../../../public/assets/img/images/abou-shape-2.png';
import aboutImg from '../../../public/assets/img/home-11/about/about-1.jpg';
import aboutImg2 from '../../../public/assets/img/home-11/about/about-2.jpg';
import aboutImg3 from '../../../public/assets/img/home-11/about/about-3.jpg';
import { ArrowNine } from '@/svg/ArrowIcons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ITSolutionAbout = () => {
    return (
        <div className="it-about-area it-about-ptb pt-140 pb-90 p-relative">
            <div className="it-about-shape-wrap">
                <Image data-speed="1.1" className="it-about-shape-1 d-none d-xxl-block" src={aboutShape1} alt="about-shape" />
                <Image data-speed=".9" className="it-about-shape-2" src={aboutShape2} alt="about-shape" />
            </div>
            <div className="container container-1230">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="it-about-title-box z-index-2">
                            <span className="tp-section-subtitle-platform platform-text-black mb-20 tp-split-text tp-split-right">Our company</span>
                            <h4 className="tp-section-title-platform platform-text-black fs-84 mb-30 tp-split-text tp-split-right">More About our Success Stories</h4>
                            <div className="tp_text_anim">
                                <p>
                                    {`That’s why we’re`} dedicated to providing innovative, reliable, and responsive IT solutions that keep your operations running smoothly and securely
                                </p>
                            </div>
                            <div className="tp_fade_anim" data-fade-from="top" data-ease="bounce">
                                <Link className="tp-btn-black-radius btn-blue-bg  d-inline-flex align-items-center justify-content-between mr-15" href="/about-us-light">
                                    <span>
                                        <span className="text-1">More about Us</span>
                                        <span className="text-2">More about Us</span>
                                    </span>
                                    <i>
                                        <span>
                                            <ArrowNine />
                                            <ArrowNine />
                                        </span>
                                    </i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="row align-items-end">
                            <div className="col-lg-6">
                                <div className="it-about-thumb">
                                    <div className="p-relative">
                                        <div className="it-about-thumb-inner mb-50">
                                            <Image className="img-1" data-speed=".9" src={aboutImg} alt="about-image" />
                                        </div>
                                        <div className="it-about-info-wrap">
                                            <div className="it-about-info-item d-inline-flex align-items-center" data-parallax='{"x": 50, "smoothness": 30}'>
                                                <i><span>15</span>+</i>
                                                <p>Years of <br /> Experience</p>
                                            </div>
                                            <div className="it-about-info-item d-inline-flex align-items-center" style={{ backgroundColor: "#DACBFF" }} data-parallax='{"x": -50, "smoothness": 30}'>
                                                <i><span>61</span>+</i>
                                                <p>Projects <br /> Worldwide</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Image style={{ width: "100%", height: "auto" }} className="img-2 mb-100" src={aboutImg2} alt="about-image" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="it-about-thumb">
                                    <Image className="img-3" data-speed="1.1" src={aboutImg3} alt="about-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionAbout;
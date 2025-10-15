import abShape from '../../../public/assets/img/home-09/about/ab-shape-1.png';
import AnimatedCounter from '../counter/AnimatedCounter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CorporateAgencyAbout = () => {
    return (
            <div className="crp-about-area pt-140 pb-160 z-index-1">
                <div className="container container-1330">
                    <div className="crp-about-wrapper p-relative">
                        <div className="crp-about-shape">
                            <Image data-speed="1.2" src={abShape} alt="shape" data-lag="0" />
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4">
                                <div className="crp-about-left">
                                    <span className="tp-section-subtitle-teko mb-120 tp_fade_anim" data-delay=".3">our <br /> <i>Corporate</i> agency</span>
                                    <div className="crp-about-exp tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                        <div className="crp-about-exp-item text-center">
                                            <AnimatedCounter min={0} max={16} />
                                            <i>Years of <br /> Experience</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8">
                                <div className="crp-about-right">
                                    <h4 className="tp-section-title-teko mb-55 tp_fade_anim" data-delay=".3">
                                        {`We're`} equipped to cater to all
                                        facets of <span>your creative journey</span>.
                                        solutions that your vision with
                                        precision and finesse.
                                    </h4>
                                    <div className="crp-about-bottom-wrap d-flex">
                                        <div className="crp-about-btn-box tp_fade_anim" data-delay=".5" >
                                            <Link className="tp-btn-yellow-green lg" href="/about-us-light">
                                                <span>
                                                    <span className="text-1">About our Agency</span>
                                                    <span className="text-2">About our Agency</span>
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="crp-about-text tp_fade_anim" data-delay=".7">
                                            <p>
                                                We strive to develop real-world web
                                                solutions that are ideal for small to large
                                                projects with bespoke project requirements.
                                            </p>
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

export default CorporateAgencyAbout;
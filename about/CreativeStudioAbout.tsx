import { ArrowSvg, ButtonBlurFilter } from '@/svg';
import Link from 'next/link';
import React from 'react';

const CreativeStudioAbout = () => {
    return (
        <div className="creative-about-area pt-120 pb-100">
            <div className="container container-1580">
                <div className="row">
                    <div className="col-xxl-5 col-xl-3">
                        <div className="creative-about-title-box">
                            <span className="tp-section-subtitle fs-17 pre-circle">Who we are ?</span>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-9">
                        <div className="creative-about-right">
                            <div className="creative-about-text tp_fade_anim">
                                <p>
                                    Our design and strategy solutions support social impact businesses, forward-thinking brands, and eco-friendly products guiding consumers toward smarter, more sustainable choices.
                                </p>
                            </div>
                            <div className="creative-about-btn-box d-flex align-items-center">
                                <div className="tp_fade_anim" data-fade-from="top" data-delay=".3" data-ease="bounce">
                                    <Link href="/about-us-light" className="tp-btn-black btn-green-light-bg mb-20 pr-15">
                                        <span className="tp-btn-black-filter-blur">
                                            <ButtonBlurFilter />
                                        </span>
                                        <span className="tp-btn-black-filter d-inline-flex align-items-center" style={{ filter: 'url(#buttonFilter1)' }}>
                                            <span className="tp-btn-black-text">About Agntix</span>
                                            <span className="tp-btn-black-circle">
                                                <ArrowSvg />
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                                <div className="tp_fade_anim" data-fade-from="top" data-delay=".5" data-ease="bounce">
                                    <Link href="/team-light" className="tp-btn-black btn-transparent-bg mb-20">
                                        <span className="tp-btn-black-filter-blur">
                                            <ButtonBlurFilter filterId='buttonFilter2' />
                                        </span>
                                        <span className="tp-btn-black-filter d-inline-flex align-items-center" style={{ filter: 'url(#buttonFilter2)' }}>
                                            <span className="tp-btn-black-text">Meet the team</span>
                                            <span className="tp-btn-black-circle">
                                                <ArrowSvg />
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeStudioAbout;
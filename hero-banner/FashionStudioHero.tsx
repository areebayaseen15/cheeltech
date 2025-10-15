import hero1 from '../../../public/assets/img/home-15/hero/hero-1.jpg';
import hero2 from '../../../public/assets/img/home-15/hero/hero-2.jpg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FashionStudioHero = () => {
    return (
        <div className="tp-hero-5-area p-relative">
            <div className="container container-1750">
                <div className="tp-hero-5-bdr-left tp-hero-5-ptb">
                    <div className="row">
                        <div className="col-xxl-3 tp-hero-5-thumb-wrap">
                            <div className="tp-hero-5-thumb-wrap">
                                <div className="tp-hero-5-thumb-content">
                                    <p>
                                        <span>01</span> <br />
                                        I fell in love <br /> with modelling.
                                    </p>
                                </div>
                                <div className="tp-hero-5-thumb-sm">
                                    <div className="tp_img_reveal">
                                        <Image src={hero1} alt="hero image" data-speed="1.1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-9">
                            <div className="tp-hero-5-title-box z-index-5 mb-120">
                                <h4 className="tp-hero-5-title tp_fade_anim" data-delay=".3"><span>Hello</span> <br /> I’m Rose</h4>
                                <div className="tp_fade_anim" data-delay=".5">
                                    <p>A Creative Fashion Designer</p>
                                </div>
                                <div className="tp_fade_anim" data-delay=".7">
                                    <Link className="tp-btn-cream-bdr" href="/portfolio-details-modern-light">See portfolio</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-hero-5-big-thumb anim-zoomin-wrap">
                <div className="anim-zoomin">
                    <Image src={hero2} alt="hero image" />
                </div>
            </div>
        </div>
    );
};

export default FashionStudioHero;
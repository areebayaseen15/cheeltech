import aboutAvater from '../../../public/assets/img/home-01/about/about-avater.png';
import heroShape from '../../../public/assets/img/home-12/hero/hero-shape.png';
import ballImg from '../../../public/assets/img/home-12/about/about-ball.png';
import thumbImg from '../../../public/assets/img/home-12/about/about-thumb-1.jpg';
import AnimatedCounterTwo from '../counter/AnimatedCounterTwo';
import { ArrowSvg } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Constants
const COUNTER_DATA = [
    {
        id: 1,
        value: 98,
        suffix: '%',
        description: 'Clients Satisfied and\nRepeating',
        delay: '.3',
    },
    {
        id: 2,
        value: 125,
        suffix: '+',
        description: 'Projects Completed in\n24 Countries',
        delay: '.5',
    }
];

const StartupAgencyAbout = () => {
    return (
        <div className="st-about-area st-about-ptb p-relative pt-160 pb-160">
            <div className="st-about-shape" data-speed=".9">
                <Image src={heroShape} alt="hero shape" />
            </div>
            <div className="container container-1320">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="st-about-wrap pl-80">
                            <div className="st-about-card">
                                <div className="st-about-card-content">
                                    <div className="st-about-card-top d-flex align-items-center justify-content-between mb-35">
                                        <div className="st-about-card-tag">
                                            <span>2019, 2025</span>
                                        </div>
                                        <div className="st-about-card-btn">
                                            <Link href="/about-creative-light">
                                                <ArrowSvg />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="st-about-card-thumb text-center mb-35">
                                        <Image src={ballImg} alt="about ball" />
                                    </div>
                                    <div className="st-about-card-bottom">
                                        <span>Award <br />
                                            winning agency</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="st-about-wrapper">
                            <div className="st-about-heading mb-60">
                                <div className="tp_fade_anim" data-delay=".3">
                                    <h4 className="st-about-title">{`We're`} a San Francisco design and <br />
                                        development team dedicated to <br />
                                        creating user-friendly digital <br />
                                        Products experiences.</h4>
                                </div>
                            </div>
                            <div className="st-about-box">
                                <div className="tp-about-funcact-wrap">
                                    <div className="tp-about-avater-info">
                                        <Image className="tp_fade_anim" data-delay=".3" data-fade-from="right" src={aboutAvater} alt="about avater" />
                                        <div className="tp_text_anim">
                                            <p>Driven by a passion for innovation, we specialize in <br /> delivering top-quality design solutions</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {COUNTER_DATA.map((count) => (
                                            <div className="col-md-6 col-sm-6" key={count.id}>
                                                <div
                                                    className="tp-about-funcact-item tp_fade_anim mb-30"
                                                    data-delay={count.delay}
                                                >
                                                    <span>
                                                        <AnimatedCounterTwo min={0} max={count.value} />
                                                        {count.suffix}
                                                    </span>
                                                    <p dangerouslySetInnerHTML={{ __html: count.description.replace('\n', '<br />') }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="st-about-thumb-box" data-speed="1.1">
                            <Image src={thumbImg} alt="about thumb" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyAbout;
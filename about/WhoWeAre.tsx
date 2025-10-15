import aboutShape from "../../../public/assets/img/home-01/about/about-shape-1.png"
import aboutImgOne from "../../../public/assets/img/home-01/about/about-1.jpg"
import aboutAvater from "../../../public/assets/img/home-01/about/about-avater.png"
import HomeMainCounter from "../counter/HomeMainCounter";
import Image from "next/image";
import React from 'react';

interface aboutPropsDT {
    bgColur?: string;
    spacingCls?: string
}

const HomeMainAbout = ({ bgColur, spacingCls = "pb-120" }: aboutPropsDT) => {
    return (
        <div className={`tp-about-area pt-140 ${spacingCls} tp-bounce-trigger`} style={{ backgroundColor: bgColur }}>
            <div className="container">
                <div className="tp-about-box p-relative">
                    <div className="tp-about-shape-1 tp-bounce d-none d-md-block">
                        <Image style={{ width: "100%", height: "auto" }} src={aboutShape} alt="about-shape" />
                    </div>
                    <div className="row">
                        <div className="col-xl-3">
                            <div className="tp-about-title-box">
                                <span className="tp-section-subtitle pre tp_fade_anim">WHO WE ARE</span>
                            </div>
                        </div>

                        <div className="col-xl-9">
                            <div className="tp-about-wrap">
                                <div className="tp-about-text tp_fade_anim">
                                    <p>
                                        An independent web design and branding agency in Manchester set up in 2010 who care,
                                        build relationships, have industry experience, and win awards.
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-xl-5 col-lg-4 col-md-5">
                                        <div className="tp-about-thumb">
                                            <Image style={{ width: "100%", height: "auto" }} data-speed=".8" src={aboutImgOne} alt="about-image" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-8 col-md-7">
                                        <div className="tp-about-funcact-wrap">
                                            <div className="tp-about-avater-info">
                                                <Image className="tp_fade_anim" data-delay=".3"
                                                    data-fade-from="right" src={aboutAvater} alt="about-avater" />
                                                <div className="tp_text_anim">
                                                    <p>Driven by a passion for innovation, we specialize in <br /> delivering top-quality design solutions</p>
                                                </div>
                                            </div>
                                            {/* counter area */}
                                            <HomeMainCounter />
                                            {/* counter area end */}
                                        </div>
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

export default HomeMainAbout;
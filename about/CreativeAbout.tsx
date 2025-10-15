import aboutLine from '../../../public/assets/img/about-us/about-us/about-us-line.png';
import aboutImg1 from '../../../public/assets/img/about-us/about-us/about-us-2-4.jpg';
import aboutShape from '../../../public/assets/img/about-us/about-us/about-us-shape.png';
import aboutShape2 from '../../../public/assets/img/about-us/about-us/about-us-shape-2.png';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CreativeAbout = () => {
    return (
        <section className="tp-about-us-2-area tp-about-us-2-ptb pt-200 p-relative">
            <div className="container container-1800 gx-0">
                <div className="tp-about-us-2-top pb-20 p-relative">
                    <div className="tp-about-us-2-line">
                        <Image style={{ width: "auto", height: "auto" }} height={10} src={aboutLine}  alt="about line"/>
                    </div>
                    <div className="row gx-0">
                        <div className="col-lg-6">
                            <div className="tp-about-us-2-text d-flex justify-content-between">
                                <div className="tp-about-us-2-text-1">
                                    <p>@agntix.studio</p>
                                </div>
                                <div className="tp-about-us-2-text-2 pr-200">
                                    <p>(About)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-about-us-2-text text-end">
                                <p>@2025</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-about-us-2-wrap">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tp-about-us-2-thumb anim-zoomin-wrap p-relative text-center">
                                <div className="anim-zoomin">
                                    <Image style={{width:"auto", height:"auto"}} priority src={aboutImg1} alt="Agntix studio"/>
                                </div>
                                <div className="tp-about-us-2-thumb-shape">
                                    <div className="shape-1">
                                        <Image 
                                            src={aboutShape} 
                                            alt="decorative shape"
                                        />
                                    </div>
                                    <div className="shape-2">
                                        <Image 
                                            src={aboutShape} 
                                            alt="decorative shape"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-about-us-2-right p-relative">
                                <div className="tp-about-us-2-btn d-flex pb-130">
                                    <Link href="#" className="hover-underline">Loading...</Link>
                                    <Link href="#" className="hover-underline">Introduction</Link>
                                </div>
                                <div className="tp-about-us-2-heading">
                                    <span className="tp-about-us-2-subtitle">About Agntix</span>
                                    <h3 className="tp-about-us-2-title tp-text-revel-anim">
                                        Our <br />Studio
                                    </h3>
                                </div>
                                <div className="tp-about-us-2-right-shape">
                                    <Image 
                                        src={aboutShape2} 
                                        alt="decorative shape"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreativeAbout;
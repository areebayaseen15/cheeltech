import aboutShape from '../../../public/assets/img/home-14/about/about-shape.png';
import aboutShape2 from '../../../public/assets/img/home-14/about/about-shape-2.png';
import ServiceDetailsTwoCounter from '../counter/ServiceDetailsTwoCounter';
import { ButtonShape, CareerShapeTwo } from '@/svg/HeroShape';
import Image from 'next/image';
import React from 'react';

const ServiceDetailsTwoAbout = () => {
    return (
        <div className="pp-about-area pp-service-details-ptb p-relative pb-100">
            <div className="pp-about-shape">
                <Image data-speed=".8" src={aboutShape} alt="about shape" />
            </div>
            <div className="pp-service-shape service-details-shape">
                <Image data-speed="1.1" src={aboutShape2} alt="about shape" />
            </div>
            <div className="pp-service-details-top pb-50">
                <div className="container container-1230">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pp-service-details-heading pb-55 tp_fade_anim mb-80" data-delay=".3">
                                <h3 className="pp-service-details-title">
                                    Website Designs <br />
                                    That Turn Clicks into <i>
                                        <CareerShapeTwo />
                                    </i> <br />
                                    Customers <span>Web Design <ButtonShape /></span>
                                </h3>
                            </div>
                            <div className="pp-service-details-about-wrap ">
                                <div className="pp-about-content tp_text_anim">
                                    <p>
                                        Crafting your website can be brutal…For <br />
                                        10 years we make iteasier, more predictable <br />
                                        and stress free for small businesses.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Counter section */}
            <ServiceDetailsTwoCounter />
        </div>
    );
};

export default ServiceDetailsTwoAbout;
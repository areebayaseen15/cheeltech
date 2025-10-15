import circleText from '../../../public/assets/img/shop-home/about/circle-text.jpg';
import about1 from '../../../public/assets/img/shop-home/about/about-1.jpg';
import about2 from '../../../public/assets/img/shop-home/about/about-2.jpg';
import about3 from '../../../public/assets/img/shop-home/about/about-3.jpg';
import about4 from '../../../public/assets/img/shop-home/about/about-4.jpg';
import about5 from '../../../public/assets/img/shop-home/about/about-5.jpg';
import about6 from '../../../public/assets/img/shop-home/about/about-6.jpg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShopModernAbout = () => {
    return (
        <div className="tp-shop-about-area tp-shop-about-ptb pt-100 pb-100">
            <div className="container container-1730">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="tp-shop-about-thumb">
                            <div className="img-1">
                                <Image data-speed="1.1" src={about2} alt="about image" />
                            </div>
                            <div className="img-2">
                                <Image data-speed="1.2" src={about1} alt="about image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="tp-shop-about-middle">
                            <div className="tp-shop-about-circle-text text-center">
                                <Image src={circleText} alt="circle image" />
                            </div>
                            <div className="tp-shop-about-content text-center">
                                <p>
                                    Furniture inspired by our <br /> land & resources, clear
                                    lines that reflect a patient & mastered <br /> gesture.
                                </p>
                                <div className="tp-shop-about-btn tp_fade_anim" data-delay=".3" data-fade-from="top" data-ease="bounce">
                                    <Link className="tp-checkout-btn border-style" href="/about-us-light">
                                        More About Us
                                        <span>
                                            <svg width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.4243 5.42524C20.6586 5.19093 20.6586 4.81103 20.4243 4.57671L16.6059 0.758336C16.3716 0.524021 15.9917 0.524021 15.7574 0.758336C15.523 0.992651 15.523 1.37255 15.7574 1.60686L19.1515 5.00098L15.7574 8.39509C15.523 8.6294 15.523 9.0093 15.7574 9.24362C15.9917 9.47793 16.3716 9.47793 16.6059 9.24362L20.4243 5.42524ZM0 5.00098V5.60098H20V5.00098V4.40098H0V5.00098Z" fill="currentcolor" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="tp-shop-about-thumb">
                                <div className="img-3">
                                    <Image data-speed=".9" src={about3} alt="about image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="tp-shop-about-thumb text-end">
                            <div className="img-4 z-index-1">
                                <Image style={{ width: "auto", height: "auto" }} data-speed="1.1" src={about4} alt="about image" />
                            </div>
                            <div className="img-5">
                                <Image data-speed="1.2" src={about5} alt="about image" />
                            </div>
                            <div className="img-6">
                                <Image data-speed="1.1" src={about6} alt="about image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopModernAbout;
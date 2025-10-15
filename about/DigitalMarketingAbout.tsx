"use client"
import aboutImg from "../../../public/assets/img/home-03/about/about-1.jpg";
import aboutImg2 from "../../../public/assets/img/home-03/about/about-2.jpg";
import { ArrowFour, StarIcon } from "@/svg";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DigitalMarketingAbout = () => {

    return (
        <div className="dgm-about-area pt-120 pb-120">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="dgm-about-thumb-wrap p-relative">
                            <Image className="tp_fade_anim" data-delay=".3" data-fade-from="left" src={aboutImg} alt="about-image" />
                            <Image className="dgm-about-thumb-1 tp_fade_anim" data-speed="1.1" data-delay=".5" src={aboutImg2} alt="about-image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="dgm-about-right">
                            <div className="dgm-about-title-box z-index-1 mb-35">
                                <span className="tp-section-subtitle subtitle-black mb-15 tp_fade_anim" data-delay=".3">About our Agency</span>
                                <h4 className="tp-section-title-grotesk tp_fade_anim" data-delay=".5">
                                    Social {" "}
                                    <span className="p-relative">
                                        marketing
                                        <span className="tp-section-title-shape">
                                            <svg width="280" height="15" viewBox="0 0 280 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M157.643 0.463566C152.553 0.665187 132.813 1.06843 113.879 1.37086C64.4049 2.12693 43.5474 2.7822 26.6628 3.94151C13.5027 4.8488 1.02542 6.15933 0.342587 6.71379C0.218435 6.8146 0.094283 8.07472 0.0322071 9.48606C-0.0919446 11.7543 0.094283 12.1575 1.45995 12.964C2.32901 13.4681 3.50846 13.9721 4.00506 14.1233C4.87413 14.3753 38.5193 12.8632 46.527 12.2079C50.0654 11.9559 159.009 10.847 185.577 10.7966C195.137 10.7966 217.36 11.099 234.927 11.5023C252.495 11.9055 268.386 12.1575 270.186 12.1071C274.656 12.0063 278.629 10.2421 278.815 8.32675C278.877 7.16743 278.691 6.96581 277.263 6.91541C275.711 6.865 275.711 6.8146 277.636 6.46176C280.305 5.95771 280.615 5.65528 279.063 4.94961C277.573 4.29435 277.325 3.43746 278.691 3.43746C279.187 3.43746 279.622 3.18544 279.622 2.93341C279.622 2.63098 279.312 2.42936 278.877 2.42936C278.505 2.42936 276.891 1.92531 275.339 1.32045L272.483 0.211542L219.719 0.161136C190.729 0.110732 162.795 0.261946 157.643 0.463566ZM200.475 2.47977C200.848 2.68139 204.572 2.88301 208.855 2.88301C213.139 2.93341 221.209 3.13503 226.857 3.38706C235.858 3.7903 234.865 3.8407 218.788 3.63908C208.731 3.53827 192.281 3.43746 182.225 3.43746C172.169 3.43746 164.099 3.33665 164.223 3.23584C164.409 3.08463 171.3 2.93341 179.556 2.88301C187.812 2.7822 194.888 2.58058 195.323 2.32855C196.254 1.87491 199.544 1.92531 200.475 2.47977ZM264.538 3.28625C263.296 3.38706 261.31 3.38706 260.192 3.28625C259.137 3.18544 260.192 3.08463 262.551 3.08463C264.972 3.08463 265.841 3.18544 264.538 3.28625ZM128.095 3.63908C127.971 3.73989 113.631 3.89111 96.1877 3.99192C78.8065 4.14313 68.8744 4.09273 74.1508 3.94151C85.2624 3.58868 128.467 3.33665 128.095 3.63908ZM159.009 3.73989C158.822 3.89111 158.264 3.94151 157.829 3.7903C157.332 3.63908 157.519 3.48787 158.202 3.48787C158.884 3.43746 159.257 3.58868 159.009 3.73989ZM268.759 7.01622C269.193 7.36905 267.393 7.46986 263.172 7.41946C259.758 7.31865 247.591 7.31865 236.169 7.36905C224.747 7.41946 213.822 7.36905 211.959 7.26824C206.435 6.91541 176.576 6.865 154.229 7.11703C131.261 7.41946 129.833 7.16743 150.815 6.51217C169.624 5.90731 267.952 6.36095 268.759 7.01622ZM118.845 7.52027C100.099 7.92351 80.7929 7.92351 85.3245 7.46986C87.1867 7.26824 98.7949 7.11703 111.086 7.11703C132.999 7.16743 133.185 7.16743 118.845 7.52027ZM200.786 7.97391C200.786 8.22594 200.351 8.32675 199.854 8.17553C199.358 7.97391 198.923 7.77229 198.923 7.67148C198.923 7.57067 199.358 7.46986 199.854 7.46986C200.351 7.46986 200.786 7.67148 200.786 7.97391ZM202.648 7.97391C202.648 8.22594 202.338 8.47796 201.965 8.47796C201.655 8.47796 201.531 8.22594 201.717 7.97391C201.903 7.67148 202.213 7.46986 202.4 7.46986C202.524 7.46986 202.648 7.67148 202.648 7.97391ZM207.304 7.97391C207.49 8.22594 207.242 8.47796 206.745 8.47796C206.186 8.47796 205.752 8.22594 205.752 7.97391C205.752 7.67148 206 7.46986 206.31 7.46986C206.683 7.46986 207.117 7.67148 207.304 7.97391ZM266.276 8.47796C267.393 8.8812 267.393 8.93161 265.965 8.8812C265.096 8.8812 263.606 8.67958 262.551 8.47796L260.689 8.07472H262.862C264.041 8.07472 265.593 8.22594 266.276 8.47796ZM122.694 8.8308C113.383 8.93161 98.2983 8.93161 89.1732 8.8308C80.048 8.78039 87.6833 8.72999 106.12 8.72999C124.556 8.72999 132.006 8.78039 122.694 8.8308ZM5.86734 10.4942C5.86734 10.7462 4.9362 10.9982 3.88091 10.9478C2.14279 10.9478 2.01864 10.847 3.07393 10.4942C4.81205 9.8893 5.86734 9.8893 5.86734 10.4942ZM15.7374 10.1917C15.6133 10.2925 13.3785 10.4942 10.8334 10.6454C7.79169 10.847 6.4881 10.7966 7.10886 10.4942C7.97792 10.0405 16.3582 9.73809 15.7374 10.1917ZM258.392 11.351C257.461 11.4519 255.785 11.4519 254.667 11.351C253.55 11.2502 254.295 11.1494 256.344 11.1494C258.392 11.1494 259.323 11.2502 258.392 11.351Z" fill="url(#paint0_linear_5012_164)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_5012_164" x1="53.5" y1="18.1094" x2="56.4335" y2="31.6184" gradientUnits="userSpaceOnUse">
                                                        <stop offset="1" stopColor="#43E508" />
                                                        <stop offset="1" stopColor="#F7EF33" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                    </span>{" "}
                                    & advertising.
                                </h4>
                            </div>
                            <div className="dgm-about-content">
                                <div className="tp_fade_anim" data-delay=".3">
                                    <p>
                                        We provide digital experience services to start up and small businesses. We
                                        help our clients succeed by creating brand identities, digital experiences,
                                        and print materials. Install any demo, plugin or template in a matter of
                                        seconds.
                                    </p>
                                </div>
                                <div className="tp_fade_anim" data-delay=".5">
                                    <Link className="tp-btn-yellow-green green-solid btn-60 mb-50" href="/about-us-light">
                                        <span>
                                            <span className="text-1">More about us</span>
                                            <span className="text-2">More about us</span>
                                        </span>
                                        <i>
                                            <ArrowFour />
                                            <ArrowFour />
                                        </i>
                                    </Link>
                                </div>
                                <div className="dgm-about-review-wrap tp_fade_anim" data-delay=".6">
                                    <div className="dgm-about-review-box d-inline-flex align-items-center">
                                        <div className="dgm-about-review">
                                            <h4>4.9</h4>
                                            <span>( 24 review )</span>
                                        </div>
                                        <div className="dgm-about-ratting">
                                            <h4>Average Rating</h4>
                                            <div className="dgm-about-ratting-icon">
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <span key={index} style={{ marginRight: '5px' }}><StarIcon /></span>
                                                ))}
                                            </div>
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

export default DigitalMarketingAbout;
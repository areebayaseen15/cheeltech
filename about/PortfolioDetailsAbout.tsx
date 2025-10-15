import { ArrowTwo } from '@/svg';
import React from 'react';

const PortfolioDetailsAbout = () => {
    return (
        <div className="tp-portfolio-details-1-about-ptb pb-150">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-xl-6 col-lg-5">
                        <div className="tp-pd-1-about-heading tp_fade_anim" data-delay=".3">
                            <span className="tp-pd-1-about-title">About <br />
                                Our project <ArrowTwo />
                            </span>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="tp-portfolio-details-1-about-content">
                            <h3 className="tp-pd-1-about-text">From 2004, We have harvest more
                                of a thirties of price, Who are there
                                guarantee that {`Welet's`} give THE best
                                has each project.</h3>
                            <div className="tp-pd-1-about-list">
                                <ul>
                                    <li>UX/UI Design</li>
                                    <li>App Design</li>
                                    <li>Brand Development</li>
                                    <li>Copywriting</li>
                                    <li>Front-end Development</li>
                                    <li>Shopify Development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsAbout;
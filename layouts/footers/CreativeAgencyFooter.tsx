import CreativeAgencyCopyright from './subComponents/CreativeAgencyCopyright';
import { FooterSocialIcons } from './subComponents/FooterSocialIcons';
import Link from 'next/link';
import React from 'react';

interface FooterProps {
    bgColor?: string;
    className?: string;
    Zindex?:string;
}

const CreativeAgencyFooter: React.FC<FooterProps> = ({ bgColor = "#1b1b1d", className="", Zindex="" }) => {
    return (
        <>
            <div className={`tp-footer-area tp-footer-style-6 ${className} ${Zindex} pt-120 pb-35`} style={{ backgroundColor: bgColor }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="tp-footer-widget tp-footer-col-1 pb-40 tp_fade_anim" data-delay=".3">
                                <h4 className="tp-footer-widget-title">Helping <br /> start-ups scale & grow.</h4>
                                <div className="tp-footer-widget-social">
                                    {/* footer social icons */}
                                    <FooterSocialIcons className="tp-footer-widget-social" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4 col-md-6">
                            <div className="tp-footer-widget tp-footer-col-2 pb-40 tp_fade_anim" data-delay=".5">
                                <h4 className="tp-footer-widget-title-sm pre mb-25">Quick links</h4>
                                <div className="tp-footer-widget-menu">
                                    <ul>
                                        <li><Link href="#">About</Link></li>{" "}
                                        <li><Link href="#">Who we are</Link></li>{" "}
                                        <li><Link href="#">Services</Link></li>{" "}
                                        <li><Link href="#">Projects</Link></li>{" "}
                                        <li><Link href="#">Blog</Link></li>{" "}
                                        <li><Link href="#">Pricing</Link></li>{" "}
                                        <li><Link href="#">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tp-footer-widget tp-footer-col-3 pb-40 mb-30 tp_fade_anim" data-delay=".7">
                                <h4 className="tp-footer-widget-title-sm pre mb-20">Contact</h4>
                                <div className="tp-footer-widget-info">
                                    <Link href="mailto:agntixs@studio.com">agntixs@studio.com</Link>
                                    <Link href="tel:+3025550107">+(302) 555-0107</Link>
                                </div>
                                <div className="tp-footer-widget-info">
                                    <Link href="https://www.google.com/maps/" target="_blank">4517 Washington Ave. Manchester, <br />
                                        Kentucky 39495</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer copyright */}
            <CreativeAgencyCopyright bgColor={bgColor} Zindex={Zindex}/>
        </>
    );
};

export default CreativeAgencyFooter;
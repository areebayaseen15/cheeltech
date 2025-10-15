import aboutImg from '../../../public/assets/img/home-15/about/about-img.jpg';
import Image from 'next/image';
import React from 'react';

const FashionStudioAbout = () => {
    return (
        <div className="tp-about-5-area pt-140 pb-120">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-about-5-title-wrap text-xl-end text-center">
                            <div className="tp-about-5-title-box text-center p-relative">
                                <span className="tp-about-5-subtitle tp-char-animation">GET TO <br /> X <br /> KNOW ME</span>
                                <h2 className="tp-section-title-5 fs-140 tp-char-animation">
                                    Fashion
                                    <span className="d-none d-md-inline-block">
                                        <Image src={aboutImg} alt="about image" />
                                    </span>
                                    <br />for passion and <em>life style</em>
                                </h2>
                                <p>Working as a creative & outsource your fashion design project & get it quickly done and delivered remotely online.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FashionStudioAbout;
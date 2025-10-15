"use client"
import Link from 'next/link';
import React from 'react';


const DesignStudioAbout = () => {
    return (
        <div className="des-about-area pb-200">
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="des-about-text text-center">
                            <p className="tp_text_invert_3 mb-45">
                                With over 10 years of experience as a versatile Front-End and Full-Stack
                                Developer, I excel in crafting a wide range of solutions, from dynamic web
                                applications and interactive configurators to robust backend automation
                                software, ensuring innovative and effective outcomes for any project.
                            </p>
                            <Link className="tp-btn-border" href="/about-modern-light">
                                More About Us
                                <span>
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9.99999H15.2222M8.11121 1.11108L17.0001 9.99997L8.11121 18.8889" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignStudioAbout;
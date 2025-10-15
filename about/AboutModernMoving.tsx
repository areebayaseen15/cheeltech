import { ArrowTwentyTwo } from '@/svg/ArrowIcons';
import React from 'react';

const AboutModernMoving = () => {
    return (
        <div className="des-about-2-area pb-150">
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="des-text-about-us-wrap p-relative text-center">
                            <div className="des-text-shape d-flex justify-content-center align-items-center">
                                <span className="shape-1">
                                    <ArrowTwentyTwo direction='left' />
                                </span>
                                <h4 className="des-text-title">Our Vision</h4>
                                <span className="shape-2">
                                    <ArrowTwentyTwo direction='right' />
                                </span>
                            </div>
                        </div>
                        <div className="des-about-text text-center">
                            <p>
                                With over <span>10 years</span> of experience as a versatile Front-End and Full-Stack
                                Developer, I excel in crafting a wide range of solutions, from dynamic <span>web applications and interactive configurators</span> to robust <span>backend automation software</span>, ensuring innovative and effective outcomes for any project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutModernMoving;
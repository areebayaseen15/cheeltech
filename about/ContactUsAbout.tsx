import contactShape from '../../../public/assets/img/contact/contact-us/contact-us-shape.png';
import React from 'react';

const ContactUsAbout = () => {
    return (
        <div className="cn-contactform-support-area mb-140">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="cn-contactform-support-bg d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${contactShape.src})` }}>
                            <div className="cn-contactform-support-text text-center">
                                <span>Or, you can contact one of our studios
                                    directly below. We aim to respond
                                    within 24 hours.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsAbout;
"use client"
import ReturnCustomerLoginForm from '@/components/forms/ReturnCustomerLoginForm';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import { charAnimation, fadeAnimation } from '@/hooks/useGsapAnimation';
import CheckoutCouponForm from '@/components/forms/CheckoutCouponForm';
import CheckoutBillForm from '@/components/forms/CheckoutBillForm';
import CheckoutPayment from '@/components/forms/CheckoutPayment';
import ShopModernFooter from '@/layouts/footers/ShopModernFooter';
import ShopModernHeader from '@/layouts/headers/ShopModernHeader';
import CartOffcanvas from '@/components/offcanvas/CartOffcanvas';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React, { useState } from 'react';
import Link from 'next/link';

const CheckoutMain = () => {
    // state for toggles
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showCouponForm, setShowCouponForm] = useState(false);

    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#F4F0EA" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            charAnimation();
        }, 100)
        return () => clearTimeout(timer);
    });
    return (
        <>
            <div id="magic-cursor" className="cursor-bg-red">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <CartOffcanvas />
            <SearchArea />
            <ShopModernHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <section className="tp-checkout-area pb-120 pt-200">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-7">
                                        <div className="tp-checkout-verify">
                                            <div className="tp-checkout-verify-item">
                                                <p className="tp-checkout-verify-reveal">Returning customer? <button onClick={() => setShowLoginForm(!showLoginForm)} type="button" className="tp-checkout-login-form-reveal-btn">Click here to login</button></p>
                                                <div id="tpReturnCustomerLoginForm" className="tp-return-customer tp-slide-toggle" style={{ display: showLoginForm ? "block" : "none" }}>
                                                    <ReturnCustomerLoginForm />
                                                </div>
                                            </div>
                                            <div className="tp-checkout-verify-item">
                                                <p className="tp-checkout-verify-reveal">Have a coupon? <button onClick={() => setShowCouponForm(!showCouponForm)} type="button" className="tp-checkout-coupon-form-reveal-btn">Click here to enter your code</button></p>

                                                <div id="tpCheckoutCouponForm" className="tp-return-customer" style={{ display: showCouponForm ? "block" : "none" }}>
                                                    <CheckoutCouponForm />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="tp-checkout-bill-area">
                                            <h3 className="tp-checkout-bill-title">Billing Details</h3>
                                            <div className="tp-checkout-bill-form">
                                                <CheckoutBillForm />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        {/* -- checkout place order -- */}
                                        <div className="tp-checkout-place white-bg">
                                            <h3 className="tp-checkout-place-title">Your Order</h3>

                                            <div className="tp-order-info-list">
                                                <ul>

                                                    {/* -- header -- */}
                                                    <li className="tp-order-info-list-header">
                                                        <h4>Product</h4>
                                                        <h4>Total</h4>
                                                    </li>

                                                    {/* -- item list -- */}
                                                    <li className="tp-order-info-list-desc">
                                                        <p>Xiaomi Redmi Note 9 Global V. <span> x 2</span></p>
                                                        <span>$274:00</span>
                                                    </li>
                                                    <li className="tp-order-info-list-desc">
                                                        <p>Office Chair Multifun <span> x 1</span></p>
                                                        <span>$74:00</span>
                                                    </li>
                                                    <li className="tp-order-info-list-desc">
                                                        <p>Apple Watch Series 6 Stainless <span> x 3</span></p>
                                                        <span>$362:00</span>
                                                    </li>
                                                    <li className="tp-order-info-list-desc">
                                                        <p>Body Works Mens Collection <span> x 1</span></p>
                                                        <span>$145:00</span>
                                                    </li>

                                                    {/* -- subtotal -- */}
                                                    <li className="tp-order-info-list-subtotal">
                                                        <span>Subtotal</span>
                                                        <span>$507.00</span>
                                                    </li>

                                                    {/* -- shipping -- */}
                                                    <li className="tp-order-info-list-shipping">
                                                        <span>Shipping</span>
                                                        <div className="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
                                                            <span>
                                                                <input id="flat_rate" type="radio" name="shipping" />
                                                                <label htmlFor="flat_rate">Flat rate: <span>$20.00</span></label>
                                                            </span>
                                                            <span>
                                                                <input id="local_pickup" type="radio" name="shipping" />
                                                                <label htmlFor="local_pickup">Local pickup: <span>$25.00</span></label>
                                                            </span>
                                                            <span>
                                                                <input id="free_shipping" type="radio" name="shipping" />
                                                                <label htmlFor="free_shipping">Free shipping</label>
                                                            </span>
                                                        </div>
                                                    </li>

                                                    {/* -- total -- */}
                                                    <li className="tp-order-info-list-total">
                                                        <span>Total</span>
                                                        <span>$1,476.00</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* checkout payment option */}
                                            <CheckoutPayment />
                                            <div className="tp-checkout-agree">
                                                <div className="tp-checkout-option">
                                                    <input id="read_all" type="checkbox" />
                                                    <label htmlFor="read_all">I have read and agree to the website.</label>
                                                </div>
                                            </div>
                                            <div className="tp-checkout-btn-wrapper">
                                                <Link href="#" className="tp-checkout-btn w-100">Place Order</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                    <ShopModernFooter />
                </div>
            </div>

        </>
    );
};

export default CheckoutMain;
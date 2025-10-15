"use client"
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import { charAnimation, fadeAnimation } from '@/hooks/useGsapAnimation';
import ShopModernFooter from '@/layouts/footers/ShopModernFooter';
import CartProductArea from '@/components/product/CartProductArea';
import ShopModernHeader from '@/layouts/headers/ShopModernHeader';
import CartOffcanvas from '@/components/offcanvas/CartOffcanvas';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { productData } from '@/data/productData';
import { useGSAP } from '@gsap/react';
import React from 'react';
import Link from 'next/link';

const CartMain = () => {
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
                        <section className="tp-cart-area pb-120 pt-200">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-9 col-lg-8">
                                        <div className="tp-cart-list mb-25 mr-30">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th colSpan={2} className="tp-cart-header-product">Product</th>
                                                        <th className="tp-cart-header-price">Price</th>
                                                        <th className="tp-cart-header-quantity">Quantity</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {productData.slice(4, 8).map((product) => (
                                                        <CartProductArea key={product.id} product={product} />
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tp-cart-bottom">
                                            <div className="row align-items-end">
                                                <div className="col-xl-6 col-md-8">
                                                    <div className="tp-cart-coupon">
                                                        <form action="#">
                                                            <div className="tp-cart-coupon-input-box">
                                                                <label>Coupon Code:</label>
                                                                <div className="tp-cart-coupon-input d-flex align-items-center">
                                                                    <input type="text" placeholder="Enter Coupon Code" />
                                                                    <button type="submit">Apply</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-md-4">
                                                    <div className="tp-cart-update text-md-end">
                                                        <button type="button" className="tp-cart-update-btn">Update Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="tp-cart-checkout-wrapper">
                                            <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between">
                                                <span className="tp-cart-checkout-top-title">Subtotal</span>
                                                <span className="tp-cart-checkout-top-price">$942</span>
                                            </div>
                                            <div className="tp-cart-checkout-shipping">
                                                <h4 className="tp-cart-checkout-shipping-title">Shipping</h4>
                                                <div className="tp-cart-checkout-shipping-option-wrapper">
                                                    <div className="tp-cart-checkout-shipping-option">
                                                        <input id="flat_rate" type="radio" name="shipping" />
                                                        <label htmlFor="flat_rate">Flat rate: <span>$20.00</span></label>
                                                    </div>
                                                    <div className="tp-cart-checkout-shipping-option">
                                                        <input id="local_pickup" type="radio" name="shipping" />
                                                        <label htmlFor="local_pickup">Local pickup: <span> $25.00</span></label>
                                                    </div>
                                                    <div className="tp-cart-checkout-shipping-option">
                                                        <input id="free_shipping" type="radio" name="shipping" />
                                                        <label htmlFor="free_shipping">Free shipping</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tp-cart-checkout-total d-flex align-items-center justify-content-between">
                                                <span>Total</span>
                                                <span>$964</span>
                                            </div>
                                            <div className="tp-cart-checkout-proceed">
                                                <Link href="/checkout" className="tp-cart-checkout-btn w-100">Proceed to Checkout</Link>
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

export default CartMain;
"use client"
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import { charAnimation, fadeAnimation } from '@/hooks/useGsapAnimation';
import CartProductArea from '@/components/product/CartProductArea';
import ShopModernFooter from '@/layouts/footers/ShopModernFooter';
import ShopModernHeader from '@/layouts/headers/ShopModernHeader';
import CartOffcanvas from '@/components/offcanvas/CartOffcanvas';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { productData } from '@/data/productData';
import { useGSAP } from '@gsap/react';
import React from 'react';
import Link from 'next/link';

const WishlistMain = () => {
    // Set cursor & background color
    useCursorAndBackground({ bgColor: "#F4F0EA" });

    // Enable smooth scroll & animations
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
                        <div className="tp-cart-area pb-120 pt-200">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-9 col-lg-8">
                                        <div className="tp-cart-list mb-25">
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
                                                    {/* Cart product area */}
                                                    {productData.slice(8, 12).map((product) => (
                                                        <CartProductArea key={product.id} product={product} spacingCls='text-end'/>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tp-cart-bottom">
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="profile__btn">
                                                        <Link href="/cart" className="tp-btn-cart sm">Go To Cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <ShopModernFooter />
                </div>
            </div>

        </>
    );
};

export default WishlistMain;
import ShopWithSliderMain from '../../../pages/shops/shop-with-slider/ShopWithSliderMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Shop With Slider light",
};

const page = () => {

    return (
        <ShopWithSliderMain />
    );
};

export default page;
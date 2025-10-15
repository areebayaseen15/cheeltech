import ShopMain from '@/pages/shops/shop/ShopMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Shop Main",
};

const page = () => {

    return (
        <ShopMain />
    );
};

export default page;
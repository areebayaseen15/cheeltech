
import ShopDetailsMain from '@/pages/shops/shop-details/ShopDetailsMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Shop Details",
};

const page = () => {

    return (
        <ShopDetailsMain />
    );
};

export default page;
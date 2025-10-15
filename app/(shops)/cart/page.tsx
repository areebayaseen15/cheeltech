
import CartMain from '@/pages/shops/cart/CartMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Cart Main",
};

const page = () => {

    return (
        <CartMain />
    );
};

export default page;
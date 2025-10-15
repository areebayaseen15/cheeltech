import CheckoutMain from '@/pages/shops/checkout/CheckoutMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Checkout Main",
};

const page = () => {
    return (
        <CheckoutMain />
    );
};

export default page;
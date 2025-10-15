import PricingMain from '@/pages/pricing/PricingMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Pricing Light",
};

const page = () => {
    return (
        <PricingMain />
    );
};

export default page;
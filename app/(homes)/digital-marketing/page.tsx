import DigitalMarketingMain from '@/pages/homes/digital-marketing/DigitalMarketingMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Digital Marketing Light",
};

const page = () => {
    return (
        <DigitalMarketingMain />
    );
};

export default page;
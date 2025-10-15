import AboutUsLightMain from '@/pages/about/about-us/AboutUsLightMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - About Us light",
};

const page = () => {
    return (
        <AboutUsLightMain />
    );
};

export default page;
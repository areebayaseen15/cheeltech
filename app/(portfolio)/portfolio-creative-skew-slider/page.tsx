import PortfolioCreativeSkewSlider from '@/pages/portfolios/portfolio-skew-slider/PortfolioCreativeSkewSlider';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Portfolio Creative skew Slider",
};

const page = () => {
    return (
        <PortfolioCreativeSkewSlider />
    );
};

export default page;
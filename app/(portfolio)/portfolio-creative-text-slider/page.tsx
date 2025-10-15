import PortfolioCreativeTextSlider from '@/pages/portfolios/portfolio-creative-text-slider/PortfolioCreativeTextSlider';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Portfolio Creative Text Slider",
};

const page = () => {
    return (
        <PortfolioCreativeTextSlider />
    );
};

export default page;
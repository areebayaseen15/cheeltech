import PortfolioWrapperSlider from '@/pages/portfolios/portfolio-wrapper-slider/PortfolioWrapperSlider';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Portfolio Wrapper Slider",
};

const page = () => {
    return (
        <PortfolioWrapperSlider />
    );
};

export default page;
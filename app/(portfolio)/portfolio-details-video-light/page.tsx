import PortfolioDetailsVideo from '@/pages/portfolios/portfolio-details-video/PortfolioDetailsVideo';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Portfolio Details Video Light",
};

const page = () => {
    return (
        <PortfolioDetailsVideo />
    );
};

export default page;




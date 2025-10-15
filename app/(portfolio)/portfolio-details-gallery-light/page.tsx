import PortfolioDetailsGallery from '@/pages/portfolios/portfolio-details-gallery/PortfolioDetailsGallery';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Portfolio Details Gallery Light",
};

const page = () => {
    return (
        <PortfolioDetailsGallery />
    );
};

export default page;




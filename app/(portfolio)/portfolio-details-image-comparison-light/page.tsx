import PortfolioImageComparison from '@/pages/portfolios/portfolio-details-image-comparison/PortfolioImageComparison';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Portfolio Details Image Comparison",
};

const page = () => {
    return (
        <PortfolioImageComparison />
    );
};

export default page;




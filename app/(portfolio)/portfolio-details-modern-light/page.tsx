import PortfolioDetailsModern from '@/pages/portfolios/portfolio-details-modern/PortfolioDetailsModern';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Portfolio Details Modern Light",
};

const page = () => {
    return (
        <PortfolioDetailsModern />
    );
};

export default page;




import PortfolioShowcaseMain from '@/pages/portfolios/portfolio-showcase/PortfolioShowcaseMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Portfolio Showcase Light",
};

const page = () => {
    return (
        <PortfolioShowcaseMain />
    );
};

export default page;
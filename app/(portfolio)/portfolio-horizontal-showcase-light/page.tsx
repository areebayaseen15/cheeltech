
import PortfolioHorizontalShowcase from '@/pages/portfolios/portfolio-horizontal-showcase/PortfolioHorizontalShowcase';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Portfolio Horizontal Showcase Light",
};

const page = () => {
    return (
        <PortfolioHorizontalShowcase />
    );
};

export default page;
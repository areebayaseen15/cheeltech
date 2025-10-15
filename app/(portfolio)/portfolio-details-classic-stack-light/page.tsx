import PortfolioDetailsClassic from '@/pages/portfolios/portfolio-details-classic-stack/PortfolioDetailsClassic';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Portfolio details classic Light",
};

const page = () => {
    return (
        <PortfolioDetailsClassic />
    );
};

export default page;
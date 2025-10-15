import PortfolioColFourMain from '@/pages/portfolios/portfolio-col-4/PortfolioColFourMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Portfolio Col 4 Light",
};

const page = () => {
    return (
        <PortfolioColFourMain />
    );
};

export default page;
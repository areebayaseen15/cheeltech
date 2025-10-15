import PortfolioColTwoMain from '@/pages/portfolios/portfolio-col-2/PortfolioColTwoMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Portfolio Col 2 Light",
};

const page = () => {
    return (
        <PortfolioColTwoMain />
    );
};

export default page;
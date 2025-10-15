import PortfolioMetroMain from '@/pages/portfolios/portfolio-metro/PortfolioMetroMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Portfolio Metro Light",
};

const page = () => {
    return (
        <PortfolioMetroMain />
    );
};

export default page;
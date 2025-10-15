import PortfolioInteractiveHover from '@/pages/portfolios/Portfolio-Interactive/PortfolioInteractiveHover';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Portfolio Interactive With Hover",
};

const page = () => {
    return (
        <PortfolioInteractiveHover />
    );
};

export default page;
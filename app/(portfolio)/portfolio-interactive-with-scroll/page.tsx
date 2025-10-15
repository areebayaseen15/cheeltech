import PortfolioInteractiveScroll from '@/pages/portfolios/portfolio-interactive-scroll/PortfolioInteractiveScroll';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Portfolio Interactive With Scroll",
};

const page = () => {
    return (
        <PortfolioInteractiveScroll />
    );
};

export default page;
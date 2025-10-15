import PortfolioCoverflowMain from '@/pages/portfolios/portfolio-coverflow/PortfolioCoverflowMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Agntix - Portfolio Coverflow Slider Light",
};

const page = () => {
  return (
    <PortfolioCoverflowMain />
  );
};

export default page;
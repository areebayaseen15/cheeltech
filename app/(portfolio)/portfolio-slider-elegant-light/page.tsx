import PortfolioSlicerElegant from '@/pages/portfolios/portfolio-slider-elegant/PortfolioSlicerElegant';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Agntix - Portfolio Slicer elegant Light",
};

const page = () => {
  return (
    <PortfolioSlicerElegant />
  );
};

export default page;
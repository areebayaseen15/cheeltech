import AboutStartupMain from '@/pages/about/about-startup/AboutStartupMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Agntix - About Startup light",
};

const page = () => {
  return (
    <AboutStartupMain />
  );
};

export default page;
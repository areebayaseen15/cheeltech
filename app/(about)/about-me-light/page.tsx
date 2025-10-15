import AboutMeMain from '@/pages/about/about-me/AboutMeMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Agntix - About Me light",
};

const page = () => {
    return (
          <AboutMeMain/>
    );
};

export default page;
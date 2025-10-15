import PersonalPortfolioMain from '@/pages/homes/personal-portfolio/PersonalPortfolioMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Personal Portfolio Light",
};

const page = () => {
    return (
        <PersonalPortfolioMain />
    );
};

export default page;
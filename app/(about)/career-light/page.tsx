import CareerMain from '@/pages/about/career/CareerMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Career light",
};

const page = () => {
    return (
        <CareerMain />
    );
};

export default page;
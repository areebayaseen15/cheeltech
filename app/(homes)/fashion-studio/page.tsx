
import FashionStudioMain from '@/pages/homes/fashion-studio/FashionStudioMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Fashion Studio Light",
};

const page = () => {
    return (
        <FashionStudioMain />
    );
};

export default page;
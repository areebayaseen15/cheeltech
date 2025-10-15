
import CreativeStudioMain from '@/pages/homes/creative-studio/CreativeStudioMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Creative Studio Light",
};

const page = () => {
    return (
        <CreativeStudioMain />
    );
};

export default page;
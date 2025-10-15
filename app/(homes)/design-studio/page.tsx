import DesignStudioMain from '@/pages/homes/design-studio/DesignStudioMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Design Studio Light",
};

const page = () => {
    return (
        <DesignStudioMain />
    );
};

export default page;
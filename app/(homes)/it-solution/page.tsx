import ITSolutionMain from '@/pages/homes/it-solution/ITSolutionMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - IT Solution Light",
};

const page = () => {
    return (
        <ITSolutionMain />
    );
};

export default page;
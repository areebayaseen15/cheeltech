import FaqMain from '@/pages/faq/FaqMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Faq Light",
};

const page = () => {
    return (
        <FaqMain />
    );
};

export default page;
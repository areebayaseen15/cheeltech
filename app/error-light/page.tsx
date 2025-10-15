import ErrorMain from '@/pages/error/ErrorMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Not Found Page",
};

const page = () => {
    return (
        <ErrorMain />
    );
};

export default page;
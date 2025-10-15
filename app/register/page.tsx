import RegisterMain from '@/pages/register/RegisterMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Register Main",
};

const page = () => {
    return (
        <RegisterMain />
    );
};

export default page;
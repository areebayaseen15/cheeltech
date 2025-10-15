import CryptoCurrencyMain from '@/pages/homes/cryptocurrency/CryptoCurrencyMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Cryptocurrency Light",
};


const page = () => {
    return (
        <CryptoCurrencyMain />
    );
};

export default page;
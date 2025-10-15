import MobileApplicationMain from '@/pages/homes/mobile-application/MobileApplicationMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Mobile Application Light",
};

const page = () => {
    return (
        <MobileApplicationMain />
    );
};

export default page;
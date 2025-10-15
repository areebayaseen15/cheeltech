import StartupagencyMain from '@/pages/homes/startup-agency/StartupagencyMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Startup agency Light",
};


const page = () => {
    return (
        <StartupagencyMain />
    );
};

export default page;
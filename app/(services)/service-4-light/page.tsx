import ServiceFourMain from '@/pages/services/service-4/ServiceFourMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Service 4 Light",
};

const page = () => {
    return (
        <ServiceFourMain />
    );
};

export default page;
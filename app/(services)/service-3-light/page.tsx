import ServiceThreeMain from '@/pages/services/service-3/ServiceThreeMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Service 3 Light",
};

const page = () => {
    return (
        <ServiceThreeMain />
    );
};

export default page;
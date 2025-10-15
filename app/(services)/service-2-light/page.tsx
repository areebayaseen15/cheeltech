
import ServiceTwoMain from '@/pages/services/service-2/ServiceTwoMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Service 2 Light",
};

const page = () => {
    return (
        <ServiceTwoMain />
    );
};

export default page;
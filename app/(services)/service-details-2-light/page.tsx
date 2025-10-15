import ServiceDetailsTwoMain from '@/pages/services/service-details-2/ServiceDetailsTwoMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Service details 2 Light",
};

const page = () => {
    return (
        <ServiceDetailsTwoMain />
    );
};

export default page;
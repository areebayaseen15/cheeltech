import DesignAgencyMain from '@/pages/homes/design-agency/DesignAgencyMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Design Agency Light",
};

const page = () => {
    return (
        <DesignAgencyMain />
    );
};

export default page;
import CorporateAgencyMain from '@/pages/homes/corporate-agency/CorporateAgencyMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Corporate Agency Light",
};

const page = () => {
    return (
        <CorporateAgencyMain />
    );
};

export default page;
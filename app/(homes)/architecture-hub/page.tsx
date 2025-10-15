import ArchitectureHubMain from '@/pages/homes/architecture-hub/ArchitectureHubMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Architecture hub light",
};

const page = () => {
    return (
        <ArchitectureHubMain />
    );
};

export default page;
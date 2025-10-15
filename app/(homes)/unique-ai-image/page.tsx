import UniqueAIImageMain from '@/pages/homes/unique-ai-image/UniqueAIImageMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Unique AI Image Light",
};

const page = () => {
    return (
        <UniqueAIImageMain />
    );
};

export default page;

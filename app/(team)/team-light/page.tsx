import TeamMain from '@/pages/team/team-light/TeamMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Team Light",
};

const page = () => {
    return (
        <TeamMain />
    );
};

export default page;
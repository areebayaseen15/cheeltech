import TeamDetailsMain from '@/pages/team/team-details/TeamDetailsMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Agntix - Team details light",
};

const page = () => {
  return (
    <TeamDetailsMain />
  );
};

export default page;
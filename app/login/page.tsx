import LoginMain from '@/pages/login/LoginMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Login Main",
};

const page = () => {
    return (
        <LoginMain />
    );
};

export default page;
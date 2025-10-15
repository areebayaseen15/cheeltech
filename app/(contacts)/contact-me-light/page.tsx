import ContactMeMain from '@/pages/contacts/contact-me/ContactMeMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Contact Me Light",
};

const page = () => {
    return (
        <ContactMeMain />
    );
};

export default page;
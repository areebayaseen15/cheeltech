
import JobApplicationForm from '@/pages/job-application-form/JobApplicationForm';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Job Application form",
};

const page = () => {
    return (
        <JobApplicationForm />
    );
};

export default page;



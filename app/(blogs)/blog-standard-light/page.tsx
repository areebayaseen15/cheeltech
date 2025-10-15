import BlogStandardMain from '@/pages/blogs/blog-standard/BlogStandardMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Blog Standard Light",
};

const page = () => {
    return (
        <BlogStandardMain />
    );
};

export default page;
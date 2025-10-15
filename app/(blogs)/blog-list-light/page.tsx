import BlogListMain from '@/pages/blogs/blog-list/BlogListMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Blog List Light",
};

const page = () => {
    return (
        <BlogListMain />
    );
};

export default page;
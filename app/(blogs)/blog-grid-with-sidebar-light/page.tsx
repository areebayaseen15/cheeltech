import BlogGridWithSidebar from '@/pages/blogs/blog-grid-with-sidebar/BlogGridWithSidebar';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Blog Grid With Sidebar Light",
};

const page = () => {
    return (
        <BlogGridWithSidebar />
    );
};

export default page;
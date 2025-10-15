import BlogGridTwoCol from '@/pages/blogs/blog-grid-2-col/BlogGridTwoCol';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Blog Grid 2 Col Light",
};

const page = () => {
    return (
        <BlogGridTwoCol />
    );
};

export default page;
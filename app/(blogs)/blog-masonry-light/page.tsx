import BlogMasonryMain from '@/pages/blogs/blog-masonry/BlogMasonryMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Blog Masonry Light",
};

const page = () => {
    return (
        <BlogMasonryMain />
    );
};

export default page;
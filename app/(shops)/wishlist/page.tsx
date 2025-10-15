import WishlistMain from '@/pages/shops/wishlist/WishlistMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Agntix - Wishlist Main",
};

const page = () => {
    return (
        <WishlistMain />
    );
};

export default page;
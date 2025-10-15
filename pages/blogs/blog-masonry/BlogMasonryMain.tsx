"use client"
import BlogMasonryItem from '@/components/blog/subComponents/BlogMasonryItem';
import BlogListBreadCrumb from '@/components/breadcurmb/BlogListBreadCrumb';
import CreativeStudioFooter from '@/layouts/footers/CreativeStudioFooter';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useEffect, useRef, useState } from 'react';
import imagesLoaded from 'imagesloaded';
import { useGSAP } from '@gsap/react';
// Import Isotope type for proper typing
import type Isotope from 'isotope-layout';

const BlogMasonryMain = () => {
    const gridRef = useRef<HTMLDivElement | null>(null);
    const isoRef = useRef<Isotope | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    //Background Color & Cursor
    useCursorAndBackground();

    // Initialize effects and animations 
    useScrollSmooth();
    useGSAP(() => {
        const timer = setTimeout(() => { fadeAnimation(); }, 100);
        return () => clearTimeout(timer);
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted || !gridRef.current) return;

        // Dynamically import Isotope only on client side
        const initializeIsotope = async () => {
            try {
                const Isotope = (await import('isotope-layout')).default;
                
                imagesLoaded(gridRef.current!, () => {
                    isoRef.current = new Isotope(gridRef.current as HTMLElement, {
                        itemSelector: ".grid-item",
                        percentPosition: true,
                        masonry: {
                            columnWidth: ".grid-item",
                        },
                    });
                });
            } catch (error) {
                console.error('Failed to load Isotope:', error);
            }
        };

        initializeIsotope();

        return () => {
            if (isoRef.current) {
                isoRef.current.destroy();
            }
        };
    }, [isMounted]);

    return (
        <>
            <div id="magic-cursor" className="cursor-white-bg">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <InnerPageHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <BlogListBreadCrumb containerCls='container-1330' />
                        <div id="down" className="tp-blog-masonry-ptb pb-70">
                            <div className="container container-1330">
                                <div className="row grid" ref={gridRef}>
                                    <BlogMasonryItem />
                                </div>
                            </div>
                        </div>
                    </main>
                    <CreativeStudioFooter buttonCls="blog-footer-style" />
                </div>
            </div>
        </>
    );
};

export default BlogMasonryMain;
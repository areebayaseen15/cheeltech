"use client"
import UniqueAIImageTextSlider from '@/components/text-slider/UniqueAIImageTextSlider';
import UniqueAIImageInstagram from '@/components/instagram/UniqueAIImageInstagram';
import UniqueAIImageChoose from '@/components/choose-area/UniqueAIImageChoose';
import UniqueAIImageService from '@/components/service/UniqueAIImageService';
import UniqueAIImageProject from '@/components/project/UniqueAIImageProject';
import { animationParagraph, fadeAnimation } from '@/hooks/useGsapAnimation';
import UniqueAIImagePrice from '@/components/price-area/UniqueAIImagePrice';
import UniqueAIImageHero from '@/components/hero-banner/UniqueAIImageHero';
import UniqueAIImageFooter from '@/layouts/footers/UniqueAIImageFooter';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import UniqueAIImageAbout from '@/components/about/UniqueAIImageAbout';
import UniqueAIImageBrand from '@/components/brand/UniqueAIImageBrand';
import UniqueAIImageHeader from '@/layouts/headers/UniqueAIImageHeader';
import UniqueAIImageBlog from '@/components/blog/UniqueAIImageBlog';
import UniqueAIImageFaq from '@/components/faq/UniqueAIImageFaq';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const UniqueAIImageMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground();

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            animationParagraph()
            fadeAnimation();
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <SearchArea />
            <UniqueAIImageHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <UniqueAIImageHero />
                        <UniqueAIImageBrand />
                        <UniqueAIImageChoose />
                        <UniqueAIImageAbout />
                        <UniqueAIImageTextSlider />
                        <UniqueAIImageService />
                        <UniqueAIImageProject />
                        <UniqueAIImagePrice />
                        <UniqueAIImageFaq />
                        <UniqueAIImageBlog />
                        <UniqueAIImageInstagram />
                    </main>
                    <UniqueAIImageFooter />
                </div>
            </div>

        </>
    );
};

export default UniqueAIImageMain;
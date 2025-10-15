
"use client"
import PersonalPortfolioFooter from '@/layouts/footers/PersonalPortfolioFooter';
import { animationParagraph, fadeAnimation, setupTextHoverEffect } from '@/hooks/useGsapAnimation';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import ContactMeArea from '@/components/contacts/ContactMeArea';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import ContactArea from '@/components/contacts/ContactArea';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const ContactMeMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground();

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            setupTextHoverEffect();
            animationParagraph();
            fadeAnimation();
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor" className="cursor-bg-yellow">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <InnerPageHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <ContactArea />
                        <ContactMeArea />
                    </main>
                    <PersonalPortfolioFooter />
                </div>
            </div>
        </>
    );
};

export default ContactMeMain;
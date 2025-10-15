"use client"
import { contactBgAnimation, fadeAnimation } from '@/hooks/useGsapAnimation';
import ContactLocationArea from '@/components/contacts/ContactLocationArea';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import ContactFormArea from '@/components/contacts/ContactFormArea';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import InnerMapArea from '@/components/contacts/InnerMapArea';
import ContactHero from '@/components/contacts/ContactHero';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const ContactMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#fff" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            contactBgAnimation()
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor" className="cursor-bg-red-2">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <InnerPageHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <ContactHero />
                        <InnerMapArea />
                        <ContactFormArea />
                        <ContactLocationArea />
                    </main>
                    <HomeMainFooter />
                </div>
            </div>
        </>
    );
};

export default ContactMain;
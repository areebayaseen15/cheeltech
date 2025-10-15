"use client"
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import ContactUsForm from '@/components/contacts/ContactUsForm';
import ContactUsAbout from '@/components/about/ContactUsAbout';
import ContactUsArea from '@/components/contacts/ContactUsArea';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import ContactUsHero from '@/components/contacts/ContactUsHero';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const ContactUsMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground();

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
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
                        <ContactUsHero />
                        <ContactUsForm />
                        <ContactUsAbout />
                        <ContactUsArea />
                    </main>
                    <CreativeAgencyFooter bgColor="#1B1B1D" />
                </div>
            </div>
        </>
    );
};

export default ContactUsMain;
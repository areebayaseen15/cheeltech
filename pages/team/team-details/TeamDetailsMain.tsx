"use client"
import { buttonBounceAnimation, fadeAnimation } from '@/hooks/useGsapAnimation';
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import TeamDetailsHero from '@/components/hero-banner/TeamDetailsHero';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import TeamFunfact from '@/components/funfact/TeamFunfact';
import TeamDetails from '@/components/team/TeamDetails';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const TeamMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: '#fff' });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            buttonBounceAnimation();
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
                        <TeamDetailsHero />
                        <TeamDetails />
                        <section className="tp-team-part-ptb pb-120">
                            <div className="container container-1350">
                                <div className="row">
                                    <TeamFunfact spacing='' />
                                </div>
                            </div>
                        </section>
                    </main>
                    <CreativeAgencyFooter bgColor="#0E0F11" className='footer-menu-style' />
                </div>
            </div>
        </>
    );
};

export default TeamMain;
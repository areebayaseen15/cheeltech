"use client"
import { buttonBounceAnimation, fadeAnimation } from '@/hooks/useGsapAnimation';
import AboutModernSuccess from '@/components/success-area/AboutModernSuccess';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import DesignStudioTeam from '@/components/team/DesignStudioTeam';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import InnerTeamPart from '@/components/team/InnerTeamPart';
import TeamHero from '@/components/hero-banner/TeamHero';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import TeamThumb from '@/components/team/TeamThumb';
import { useGSAP } from '@gsap/react';

const TeamMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground();

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
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <InnerPageHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <TeamHero />
                        <TeamThumb />
                        <DesignStudioTeam className='team-inner-color' />
                        <AboutModernSuccess spacingCls='mb-100' />
                        <InnerTeamPart />
                    </main>
                    <HomeMainFooter bgColor="#F6F6F9" buttonCls="tp-footer-white-style" />
                </div>
            </div>
        </>
    );
};

export default TeamMain;
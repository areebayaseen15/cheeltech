"use client";
import PerspectiveSlideCard from '@/components/portfolio/subComponents/PerspectiveSlideCard';
import { perspectiveAnim, revalEffectAnimation } from '@/hooks/useGsapAnimation';
import PortfolioFixedHeader from '@/layouts/headers/PortfolioFixedHeader';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import portfolioData from '@/data/portfolioData';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';


const PortfolioPerspectiveSlider = () => {
  // Initialize custom cursor and background styles
  useCursorAndBackground({ customClass: "tp-magic-cursor" });

  // Enable smooth scroll animations
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      revalEffectAnimation()
      perspectiveAnim()
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* -- Begin magic cursor -- */}
      <div id="magic-cursor" className="cursor-white-bg">
        <div id="ball"></div>
      </div>

      {/* Global Components */}
      <BackToTop />
      <PortfolioFixedHeader />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="tp-perspective-area">
              <div className="container container-1685">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-perspective-slider">
                      {portfolioData.slice(54, 60).map((item, index) => (
                        <PerspectiveSlideCard key={index} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="tp-perspective-social-wrap pb-40">
        <div className="container container-1800">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-6">
              <div className="tp-perspective-social-info">
                <span>© 2025 | Agntix</span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-6">
              <div className="tp-perspective-scroll text-end smooth">
                <Link href="#">(Scroll)</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPerspectiveSlider;
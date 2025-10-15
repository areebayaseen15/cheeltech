import titleShape from "../.././../public/assets/img/title-shape/title-shape-1.png";
import aboutImgTwo from "../.././../public/assets/img/home-07/about/about-1.jpg";
import aboutImg from "../.././../public/assets/img/home-07/about/about-2.jpg";
import React from 'react';import AiImageItem from "./subComponents/AiImageItem";
import Image from 'next/image';

interface AboutSevenProps {
  className?: string;
}

const UniqueAIImageAbout: React.FC<AboutSevenProps> = ({ className = '' }) => {
  // List items data
  const features = [
    { id: 1, title: 'Improve SEO Ranking' },
    { id: 2, title: 'Search Engine Optimization' },
    { id: 3, title: 'Market Research' }
  ];
  // List items data
  const images = [
    { id: 1, image: aboutImg, dataSpeed: "1" },
    { id: 2, image: aboutImgTwo, dataSpeed: "1.1" }
  ];

  return (
    <div className={`ai-about-area pb-110 ${className}`}>
      <div className="container container-1230">
        <div className="row">
          {/* Left Column - Images */}
          <div className="col-lg-6">
            <div className="ai-about-thumb-box d-flex">
              {
                images.map((item) => (
                  <AiImageItem key={item.id} {...item} />
                ))
              }
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-6">
            <div className="ai-about-right mt-20">
              <div className="ai-about-title-box mb-60">
                <div className="tp-section-subtitle-gradient icon-left mb-20 tp_fade_anim" data-delay=".3">
                  <div>
                    <Image src={titleShape} alt="Decoration" />
                  </div>
                  Fully Unique
                </div>
                <h4 className="tp-section-title fs-54 fs-60 mb-15 tp_fade_anim" data-delay=".5">
                  Generate <br /> Unique images.
                </h4>
                <div className="tp_fade_anim" data-delay=".7">
                  <p>
                    Say goodbye to the days of tedious editing with
                    our revolutionary platform
                  </p>
                </div>
              </div>

              <div className="ai-about-list tp_fade_anim" data-delay=".7">
                <ul>
                  {features.map((feature) => (
                    <li key={feature.id}>
                      <span>
                        <span>
                          <i></i>
                          <CheckmarkIcon />
                        </span>
                      </span>
                      <p>{feature.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Extracted SVG component
const CheckmarkIcon: React.FC = () => (
  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.1594 8C12.1594 8 12.0094 9 8.90942 13C5.99942 16.77 10.2094 19.64 10.7094 19.97C10.7394 19.99 10.7694 19.99 10.8094 19.97C11.4894 19.55 19.0594 14.68 12.1594 8Z" fill="currentcolor" />
    <path d="M9.75977 5.79006C9.75977 3.49006 8.85977 1.39006 7.95977 0.190058C7.65977 -0.109942 7.15977 -0.00994164 7.05977 0.390058C6.65977 1.89006 5.45977 5.09006 2.55977 8.89006C-1.14023 13.6901 2.25977 18.8901 5.75977 19.8901C7.65977 20.3901 5.25977 18.8901 4.95977 15.7901C4.65977 11.8901 9.75977 8.99006 9.75977 5.79006Z" fill="currentcolor" />
  </svg>
);

export default UniqueAIImageAbout;
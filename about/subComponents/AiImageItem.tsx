import { useHoverEffectTwo } from '@/hooks/useHoverEffect';
import Image, { StaticImageData } from 'next/image';
import React, { useRef } from 'react';

interface PropsDT {
    id: number,
    image: StaticImageData,
    dataSpeed: string
}

const AiImageItem = ({ id, image, dataSpeed }: PropsDT) => {
    const hoverContainerRef = useRef<HTMLDivElement>(null);

    // Pass the entire image object (can be string or StaticImageData)
    useHoverEffectTwo(hoverContainerRef, image);

    return (
        <div key={id} className="tp--hover-item" data-speed={dataSpeed}>
            <div
                ref={hoverContainerRef}
                className={`ai-about-thumb tp--hover-img thumb-${id}`}>
                <Image src={image} alt="About our company" className="img-fluid" />
            </div>
        </div>
    );
};

export default AiImageItem;
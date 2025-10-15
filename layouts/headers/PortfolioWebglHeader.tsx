import MobileMenus from '@/layouts/subComponents/MobileMenus';
import logoWhite from '../../../public/assets/img/logo/logo-white.png';
import logoB from '../../../public/assets/img/logo/logo-black.png';
import MobileOffcanvas from '@/components/offcanvas/MobileOffcanvas';
import React, { useState } from 'react';
import { MenubarIcon } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioWebglHeaderProps {
    customClass?: string;
    logoBlack?: boolean;
    logoWidth?: number;
    logoHeight?: number;
}

const PortfolioWebglHeader: React.FC<PortfolioWebglHeaderProps> = (
    {
        customClass = 'header-transparent',
        logoBlack,
        logoWidth = 120

    }) => {
    const [openOffCanvas, setOpenOffCanvas] = useState(false);

    return (
        <>
            <div className={`tp-header-14-area ${customClass ? customClass : 'header-transparent'}`}>
                <div className="container container-1800">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-header-14-wrapper d-flex align-items-center justify-content-between">
                                <div className="tp-header-14-left">
                                    <div className="tp-header-logo">
                                        <Link href="/">
                                            <Image
                                                src={logoBlack ? logoB : logoWhite}
                                                alt={logoBlack ? "Dark logo" : "Light logo"}
                                                width={logoWidth}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="tp-header-14-right d-flex align-items-center">
                                    <div className="tp-header-14-info d-none d-md-block">
                                        <Link className="tp-line-white" href="mailto:hello@agntix.com">hello@agntix.com</Link>
                                    </div>
                                    <div className="tp-header-14-bar-wrap ml-20">
                                        <button onClick={() => setOpenOffCanvas(true)} className="tp-header-8-bar tp-offcanvas-open-btn">
                                            <span>Menu</span>{" "}
                                            <span>
                                                <MenubarIcon />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="tp-mobile-menu-active d-none">
                <MobileMenus />
            </nav>

            {/* off canvas */}
            <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
            {/* off canvas */}
        </>
    );
};

export default PortfolioWebglHeader;
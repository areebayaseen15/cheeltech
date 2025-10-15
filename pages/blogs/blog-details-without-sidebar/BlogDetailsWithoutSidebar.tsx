"use client"
import blogBanner from '../../../../public/assets/img/blog/blog-details/blog-details-banner.jpg';
import blogSmall from '../../../../public/assets/img/blog/blog-details/blog-details-sm-1.jpg';
import blogSmall2 from '../../../../public/assets/img/blog/blog-details/blog-details-sm-2.jpg';
import authorImg2 from '../../../../public/assets/img/blog/blog-standard/blog-av-1.jpg';
import { TwitterFour, TwitterSvg, TwitterTwo } from '@/svg/social-icons/Twitter';
import { DribbleTwo, FacebookTwo, InstagramSvg, QuoteIconSix } from '@/svg';
import CreativeStudioFooter from '@/layouts/footers/CreativeStudioFooter';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import PostboxDetailsThumb from '@/components/blog/PostboxDetailsThumb';
import PostboxDetailsForm from '@/components/forms/PostboxDetailsForm';
import BlogDetailsPostbox from '@/components/blog/BlogDetailsPostbox';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import PostboxComment from '@/components/blog/PostboxComment';
import { InstagramFive } from '@/svg/social-icons/Instagram';
import { DribbleThree } from '@/svg/social-icons/Dribbble';
import { FacebookFour } from '@/svg/social-icons/Facebook';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';

const BlogDeailsMain = () => {
    //Background Color & Cursor
    useCursorAndBackground();

    // Initialize effects and animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor" className="cursor-white-bg">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <InnerPageHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        {/* Post box area */}
                        <BlogDetailsPostbox />
                        {/* Post box area end */}

                        <section id="postbox" className="postbox-area tp-blog-details-ptb pt-110 pb-80">
                            <div className="container container-1750">
                                <div className='tp-blog-details-banner fix mb-100'>
                                    <Image style={{ width: "100%", height: "auto" }} data-speed=".8" src={blogBanner} alt="banner image" />
                                </div>
                            </div>
                            <div className="container container-1230">
                                <div className='row justify-content-center'>
                                    <div className="col-lg-2">
                                        <div className="creative-footer-style blog-details-social-style blog-details-social">
                                            <div className="tp-footer-widget-social">
                                                <div className="tp_fade_anim" data-delay=".9" data-fade-from="top" data-ease="bounce">
                                                    <Link href="#">
                                                        <span><FacebookTwo /></span>
                                                    </Link>
                                                </div>{" "}
                                                <div className="tp_fade_anim" data-delay=".7" data-fade-from="top" data-ease="bounce">
                                                    <Link href="#">
                                                        <span><TwitterTwo /></span>
                                                    </Link>
                                                </div>{" "}
                                                <div className="tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                                    <Link href="#">
                                                        <span> <DribbleTwo /></span>
                                                    </Link>
                                                </div>{" "}
                                                <div className="tp_fade_anim" data-delay=".3" data-fade-from="top" data-ease="bounce">
                                                    <Link href="#">
                                                        <span><InstagramSvg /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xxl-8 col-xl-8 col-lg-8">
                                        <div className="postbox-wrapper mb-115">
                                            <div className="postbox-details-text mb-45">
                                                <p className="mb-25">
                                                    We love to bring designs to life as a developer, and I aim to do this using whatever front end tools
                                                    are necessary. My preferred tools are more modern javascript libraries like React.js but I like to use whatever is best for the websites needs. There are several reasons why a business would consider
                                                    a rebrand and it doesn’t necessarily mean the business has been unsuccessful.
                                                </p>
                                                <p>
                                                    But in order that you may see whence all this born error of those who accuse pleasure and praise pain, I will open the whole matter, and explain the very things which were said by that discoverer of truth and, as it were, the architect of a happy life.
                                                </p>
                                            </div>
                                            <div className="postbox-details-text mb-40">
                                                <h4 className="postbox-title fs-34">Using a Query</h4>
                                                <p>
                                                    We love to bring designs to life as a developer, and I aim to do this using whatever front end tools are necessary. My preferred tools are more modern javascript libraries like React.js but I like to use whatever is best for the websites needs. There are several reasons why a business would consider a rebrand and it doesn’t necessarily mean the business has been unsuccessful.
                                                </p>
                                            </div>
                                            <div className="postbox-details-thumb d-flex align-items-center mb-50">
                                                <div>
                                                    <Image style={{ width: "100%", height: "auto" }} src={blogSmall} alt="blog small" />
                                                </div>
                                                <div>
                                                    <Image style={{ width: "100%", height: "auto" }} src={blogSmall2} alt="blog small" />
                                                </div>
                                            </div>
                                            <div className="postbox-details-text mb-50">
                                                <p>
                                                    faucibus enim. In aliquam tempus porta. Mauris vel finibus risus. Maecenas egestas mi sed neque finibus, nec faucibus ipsum aliquet. Duis scelerisque at odio vel tempus. Morbi a tincidunt nunc, id rutrum erat. Fusce egestas quam vel facilisis tempor.Morbi non orci elementum, sollicitudin mauris laoreet, luctus est. Donec in mi lorem.
                                                </p>
                                            </div>
                                            <div className="postbox-details-quote-box mb-45">
                                                <blockquote>
                                                    <div className="postbox-details-quote-box d-flex align-items-start">
                                                        <i><QuoteIconSix /></i>
                                                        <div className="postbox-details-quote">
                                                            <p>
                                                                “Success is the result of perfection, <br />
                                                                hard work, learning from failure, loyalty, & <br />
                                                                persistence”
                                                            </p>
                                                            <span>Phil Martinez</span>
                                                        </div>
                                                    </div>
                                                </blockquote>
                                            </div>
                                            <div className="postbox-details-text mb-45">
                                                <p>
                                                    faucibus enim. In aliquam tempus porta. Mauris vel finibus risus. Maecenas egestas mi sed neque finibus, nec faucibus ipsum aliquet. Duis scelerisque at odio vel tempus. Morbi a tincidunt nunc, id rutrum erat. Fusce egestas quam vel facilisis tempor.Morbi non orci elementum, sollicitudin mauris laoreet, luctus est. Donec in mi lorem.
                                                </p>
                                            </div>
                                            <div className="postbox-details-text mb-25">
                                                <h4 className="postbox-title fs-34">On the specificity of selectors</h4>
                                                <p>
                                                    The specificity of the : <span>not()</span> pseudo-class is the specificity of its argument. The :not() pseudo-class does not add to the selector specificity, unlike other pseudo-classes.
                                                </p>
                                            </div>
                                            <div className="postbox-details-text mb-60">
                                                <p className="mb-30">
                                                    The simple <span>selector that</span> : <span>not()</span> takes as an argument can be any of the following:
                                                </p>
                                                <div className="postbox-details-list">
                                                    <ul>
                                                        <li>Type selector (e.g <span>p, span,</span> etc.)</li>
                                                        <li>Class selector (e.g <span>.element, .sidebar,</span> etc.)</li>
                                                        <li>ID selector (e. #header)</li>
                                                        <li>Pseudo-class selector (e.g <i>:first-child, :last-of-type</i>)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="postbox-details-code mb-40">
                                                <pre>
                                                    {`li:not(.old)::after {    
content: "New!";
color: deepPink;
}`}
                                                </pre>
                                            </div>
                                            <div className="postbox-details-text mb-50">
                                                <p>
                                                    The specificity of the <span>:not()</span> pseudo-class is the specificity of its argument. The :not() pseudo-class does not add to the selector specificity, unlike other pseudo-classes.
                                                </p>
                                            </div>
                                            <div className="postbox-details-tag-wrap d-flex justify-content-between align-items-center">
                                                <div className="postbox-details-tag d-flex align-items-center mb-0">
                                                    <span>Tagged with :</span>
                                                    <div className="tagcloud">
                                                        <Link href="#">Blog</Link>
                                                        <Link href="#">Creative</Link>
                                                        <Link href="#">Portfolio</Link>
                                                        <Link href="#">Theme</Link>
                                                    </div>
                                                </div>
                                                <div className="postbox-details-social">
                                                    <Link href="#">
                                                        <span><FacebookTwo /></span>
                                                    </Link>{" "}
                                                    <Link href="#">
                                                        <span><TwitterSvg /></span>
                                                    </Link>{" "}
                                                    <Link href="#">
                                                        <span> <DribbleTwo /></span>
                                                    </Link>{" "}
                                                    <Link href="#">
                                                        <span><InstagramSvg /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="postbox-details-author mt-30">
                                                <div className="sidebar-widget-author d-flex align-items-start">
                                                    <div className="sidebar-widget-author-img">
                                                        <Image style={{ width: "100%", height: "auto" }} src={authorImg2} alt="author" />
                                                    </div>
                                                    <div className="postbox-details-content">
                                                        <div className="sidebar-widget-author-content">
                                                            <span>About Author</span>
                                                            <h4 className="sidebar-widget-author-name">Peter Bowman</h4>
                                                            <p>
                                                                Phasellus et ipsum justo. Aenean fringilla a fermentum mauris non venenatis. <br />
                                                                Praesent at nulla aliquam ligula.
                                                            </p>
                                                        </div>
                                                        <div className="sidebar-widget-author-social">
                                                            <Link href="#">
                                                                <span><FacebookFour /></span>
                                                            </Link>{" "}
                                                            <Link href="#">
                                                                <span><TwitterFour /></span>
                                                            </Link>{" "}
                                                            <Link href="#">
                                                                <span><DribbleThree /></span>
                                                            </Link>{" "}
                                                            <Link href="#">
                                                                <span><InstagramFive /></span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container container-1750">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <PostboxDetailsThumb />
                                    </div>
                                </div>
                            </div>
                            <div className='container container-1330'>
                                <div className='row justify-content-center'>
                                    <div className='col-xl-8'>
                                        <div className="postbox__comment pt-115 pb-50">
                                            <h3 className="postbox__comment-title">Comments(02)</h3>
                                            <PostboxComment />
                                        </div>
                                        <div className="postbox-details-form">
                                            <h3 className="postbox-details-form-title">Leave a Reply</h3>
                                            <p>Your email address will not be published. Required fields are marked *</p>
                                            <div className="postbox-details-form-wrapper">
                                                <PostboxDetailsForm />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                    <CreativeStudioFooter buttonCls="blog-footer-style" />
                </div>
            </div>
        </>
    );
};

export default BlogDeailsMain;
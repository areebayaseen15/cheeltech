"use client"
import blogImg from '../../../../public/assets/img/blog/blog-details/blog-details-1.jpg';
import authorImg from '../../../../public/assets/img/blog/blog-standard/blog-av-2.jpg';
import authorImg2 from '../../../../public/assets/img/blog/blog-standard/blog-av-1.jpg';
import blogSmall from '../../../../public/assets/img/blog/blog-details/blog-details-sm-1.jpg';
import blogSmall2 from '../../../../public/assets/img/blog/blog-details/blog-details-sm-2.jpg';
import BlogStandardBreadcrumb from '@/components/breadcurmb/BlogStandardBreadCrumb';
import BlogSidebarSearchInput from '@/components/forms/BlogSidebarSearchInput';
import BlogSidebarAuthorInfo from '@/components/blog/BlogSidebarAuthorInfo';
import BlogSidebarCategory from '@/components/category/BlogSidebarCategory';
import { DribbleTwo, FacebookTwo, InstagramSvg, QuoteIconSix } from '@/svg';
import CreativeStudioFooter from '@/layouts/footers/CreativeStudioFooter';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import PostboxDetailsForm from '@/components/forms/PostboxDetailsForm';
import PostboxDetailsThumb from '@/components/blog/PostboxDetailsThumb';
import { TwitterFour, TwitterSvg } from '@/svg/social-icons/Twitter';
import BlogSidebarPost from '@/components/blog/BlogSidebarPost';
import BlogSidebarTags from '@/components/blog/BlogSidebarTags';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import PostboxComment from '@/components/blog/PostboxComment';
import { InstagramFive } from '@/svg/social-icons/Instagram';
import { DribbleThree } from '@/svg/social-icons/Dribbble';
import { FacebookFour } from '@/svg/social-icons/Facebook';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { EditIcon } from '@/svg/CategoriesIcons';
import { CommentIcon } from '@/svg/ContactIcons';
import ClockIcon from '@/svg/ClockIcon';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';

const BlogDeailsMain = () => {
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
                        <BlogStandardBreadcrumb title='Blog Details' subTitle='Blog Details' />

                        <section id="postbox" className="postbox-area pt-110 pb-80">
                            <div className="container container-1330">
                                <div className="row">
                                    <div className="col-xxl-8 col-xl-8 col-lg-8">
                                        <div className="postbox-wrapper mb-115">
                                            <article className="postbox-details-item item-border mb-20">
                                                <div className="postbox-details-info-wrap">
                                                    <div className="postbox-tag postbox-details-tag">
                                                        <span>
                                                            <i><EditIcon /></i>{" "}
                                                            Inspiration
                                                        </span>
                                                        <span>4 min read</span>
                                                    </div>
                                                    <h4 className="postbox-title fs-54">Lessons learned from professional challenges</h4>
                                                    <div className="postbox-details-meta d-flex align-items-center">
                                                        <div className="postbox-author-box d-flex align-items-center ">
                                                            <div className="postbox-author-img">
                                                                <Image style={{ width: "100%", height: "auto" }} className="w-100" src={authorImg} alt="Author image" />
                                                            </div>
                                                            <div className="postbox-author-info">
                                                                <h4 className="postbox-author-name">Phil Martinez</h4>
                                                            </div>
                                                        </div>
                                                        <div className="postbox-meta">
                                                            <i><ClockIcon /></i>{" "}
                                                            <span>April 15, 2025</span>
                                                        </div>
                                                        <div className="postbox-meta">
                                                            <i><CommentIcon /></i>
                                                            <span>0 comments</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                            <div className="postbox-details-thumb mb-45">
                                                <Image style={{ width: "100%", height: "auto" }} className="w-100" src={blogImg} alt="blog image" />
                                            </div>
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
  olor: deepPink;
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
                                    <div className="col-xxl-4 col-xl-4 col-lg-4">
                                        <div className="sidebar-wrapper">
                                            <div className="sidebar-widget mb-30">
                                                <div className="sidebar-search">
                                                    <BlogSidebarSearchInput />
                                                </div>
                                            </div>
                                            <div className="sidebar-widget mb-55">
                                                <BlogSidebarAuthorInfo />
                                            </div>
                                            <div className="sidebar-widget mb-55">
                                                <h3 className="sidebar-widget-title">Category</h3>
                                                <BlogSidebarCategory />
                                            </div>
                                            <div className="sidebar-widget mb-55">
                                                <h3 className="sidebar-widget-title">Latest Posts</h3>
                                                <BlogSidebarPost />
                                            </div>
                                            <div className="sidebar-widget">
                                                <h3 className="sidebar-widget-title">Tags</h3>
                                                <BlogSidebarTags />
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
                            <div className="container container-1330">
                                <div className="row">
                                    <div className="col-xl-8">
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

import BlogDeailsMain from "@/pages/blogs/blog-details/BlogDeailsMain";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Agntix - Blog Details",
};

const page = () => {
    return (
        <BlogDeailsMain />
    );
};

export default page;
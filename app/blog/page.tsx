import React from "react";
import BlogSection from "@/components/BlogSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Blog: Tips, Trends & Strategies",
  description:
    "Explore expert articles on SEO, digital marketing, content strategy & AI tools. Stay ahead of the curve with AA Marketing's blog. Read now!",
  openGraph: {
    title: "Marketing Blog: Tips, Trends & Strategies | AA Marketing",
    description:
      "Explore expert articles on SEO, digital marketing, content strategy & AI tools. Stay ahead of the curve with AA Marketing's blog. Read now!",
    url: "https://aamarktng.com/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

const page = () => {
  return (
    <div className="min-h-screen my-20 ">
      <BlogSection />
    </div>
  );
};

export default page;

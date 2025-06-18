import React from "react";
import BlogSection from "@/components/BlogSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read our latest insights on digital marketing, web development, design trends, and industry best practices.",
  openGraph: {
    title: "Blog | AA Marketing",
    description:
      "Read our latest insights on digital marketing, web development, design trends, and industry best practices.",
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

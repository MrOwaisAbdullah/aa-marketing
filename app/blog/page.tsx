import React from "react";
import BlogSection from "@/components/BlogSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AA Marketing Blog | Insights & Tips for Digital Success",
  description:
    "Get the latest news and easy tips on digital marketing and design. Learn how to grow your business and stay ahead with simple, smart ideas.",
  openGraph: {
    title: "AA Marketing Blog | Insights & Tips for Digital Success",
    description:
      "Get the latest news and easy tips on digital marketing and design. Learn how to grow your business and stay ahead with simple, smart ideas.",
    url: "https://aamarktng.com/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

export const revalidate = 60;


const page = () => {
  return (
    <div className="min-h-screen my-20 ">
      <BlogSection />
    </div>
  );
};

export default page;

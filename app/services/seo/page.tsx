import SEOService from "@/components/services/Seo";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable SEO Services | Buy Expert SEO Solutions",
  description:
    "Buy affordable SEO services to boost your website's ranking. Improve your online presence and attract more customers with expert SEO solutions.",
  openGraph: {
    title: "Affordable SEO Services | Buy Expert SEO Solutions",
    description:
      "Buy affordable SEO services to boost your website's ranking. Improve your online presence and attract more customers with expert SEO solutions.",
    url: "https://aamarktng.com/services/seo",
    images: [
      {
        url: "https://aamarktng.com/assets/services/seo.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Services - AA Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable SEO Services | Buy Expert SEO Solutions",
    description:
      "Buy affordable SEO services to boost your website's ranking. Improve your online presence and attract more customers with expert SEO solutions.",
    images: ["https://aamarktng.com/assets/services/seo.jpg"],
  },
  alternates: {
    canonical: "/services/seo",
  },
};

export const dynamic = "force-static";

const seo = () => {
  return <SEOService />;
};

export default seo;

import SEOService from "@/components/services/Seo";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services - Rank Higher & Drive Organic Traffic",
  description:
    "Dominate search results with AA Marketing's proven SEO strategies. On-page, off-page & technical SEO included. Get your free SEO audit today!",
  openGraph: {
    title: "SEO Services - Rank Higher & Drive Organic Traffic",
    description:
      "Dominate search results with AA Marketing's proven SEO strategies. On-page, off-page & technical SEO included. Get your free SEO audit today!",
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
    title: "SEO Services - Rank Higher & Drive Organic Traffic",
    description:
      "Dominate search results with AA Marketing's proven SEO strategies. On-page, off-page & technical SEO included. Get your free SEO audit today!",
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

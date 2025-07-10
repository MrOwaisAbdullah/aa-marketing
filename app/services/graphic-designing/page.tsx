import React from "react";
import { Metadata } from "next";
import GraphicDesignService from "@/components/services/GraphicDesign";

export const metadata: Metadata = {
  title: "Professional Graphic Designing Services | AA Marketing",
  description:
    "Get creative and professional graphic designing services for your brand. Logos, branding, and more to make your business stand out.",
  openGraph: {
    title: "Professional Graphic Designing Services | AA Marketing",
    description:
      "Get creative and professional graphic designing services for your brand. Logos, branding, and more to make your business stand out.",
    url: "https://aamarktng.com/services/graphic-designing",
    images: [
      {
        url: "https://aamarktng.com/assets/services/graphic-designing.jpg",
        width: 1200,
        height: 630,
        alt: "Graphic Designing Services - AA Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Graphic Designing Services | AA Marketing",
    description:
      "Get creative and professional graphic designing services for your brand. Logos, branding, and more to make your business stand out.",
    images: ["https://aamarktng.com/assets/services/graphic-designing.jpg"],
  },
  alternates: {
    canonical: "/services/graphic-designing",
  },
};

export const dynamic = "force-static";

const GraphicDesigning = () => {
  return <GraphicDesignService />;
};

export default GraphicDesigning;

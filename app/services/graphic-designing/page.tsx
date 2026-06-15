import React from "react";
import { Metadata } from "next";
import GraphicDesignService from "@/components/services/GraphicDesign";

export const metadata: Metadata = {
  title: "Professional Graphic Design Services",
  description:
    "Stand out with stunning visuals. AA Marketing creates logos, branding, and marketing designs that captivate audiences. View our portfolio now!",
  openGraph: {
    title: "Professional Graphic Design Services | AA Marketing",
    description:
      "Stand out with stunning visuals. AA Marketing creates logos, branding, and marketing designs that captivate audiences. View our portfolio now!",
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
    title: "Professional Graphic Design Services | AA Marketing",
    description:
      "Stand out with stunning visuals. AA Marketing creates logos, branding, and marketing designs that captivate audiences. View our portfolio now!",
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

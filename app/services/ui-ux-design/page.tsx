import UiUxDesignService from "@/components/services/UiDesign";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable UI/UX Design Services | Buy User-Friendly Designs",
  description:
    "Buy affordable UI/UX design services to enhance user experience. Get custom designs that make your website or app easy to use and visually appealing.",
  openGraph: {
    title: "Affordable UI/UX Design Services | Buy User-Friendly Designs",
    description:
      "Buy affordable UI/UX design services to enhance user experience. Get custom designs that make your website or app easy to use and visually appealing.",
    url: "https://aamarktng.com/services/ui-ux-design",
    images: [
      {
        url: "https://aamarktng.com/assets/services/ui-ux-design.jpg",
        width: 1200,
        height: 630,
        alt: "UI/UX Design Services - AA Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable UI/UX Design Services | Buy User-Friendly Designs",
    description:
      "Buy affordable UI/UX design services to enhance user experience. Get custom designs that make your website or app easy to use and visually appealing.",
    images: ["/assets/services/ui-ux-design.jpg"],
  },
  alternates: {
    canonical: "/services/ui-ux-design",
  },
};

export const dynamic = "force-static";

const uiUxDesign = () => {
  return <UiUxDesignService />;
};

export default uiUxDesign;

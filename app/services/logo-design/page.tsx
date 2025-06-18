import LogoDesignService from "@/components/services/LogoDesign";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Logo Design Services | Buy Custom Logos",
  description:
    "Buy affordable logo design services. Get a custom logo that reflects your brand's identity and sets you apart from the competition.",
  openGraph: {
    title: "Affordable Logo Design Services | Buy Custom Logos",
    description:
      "Buy affordable logo design services. Get a custom logo that reflects your brand's identity and sets you apart from the competition.",
    url: "https://aamarktng.com/services/logo-design",
    images: [
      {
        url: "https://aamarktng.com/assets/services/logo-design.jpg",
        width: 1200,
        height: 630,
        alt: "Logo Design Services - AA Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Logo Design Services | Buy Custom Logos",
    description:
      "Buy affordable logo design services. Get a custom logo that reflects your brand's identity and sets you apart from the competition.",
    images: ["https://aamarktng.com/assets/services/logo-design.jpg"],
  },
  alternates: {
    canonical: "/services/logo-design",
  },
};

export const dynamic = "force-static";

const logoDesign = () => {
  return <LogoDesignService />;
};

export default logoDesign;

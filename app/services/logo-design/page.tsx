import LogoDesignService from "@/components/services/LogoDesign";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logo Design Services",
  description:
    "Professional logo design services to create unique and memorable brand identities.",
  openGraph: {
    title: "Logo Design Services | AA Marketing",
    description:
      "Professional logo design services to create unique and memorable brand identities.",
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
    title: "Logo Design Services | AA Marketing",
    description:
      "Professional logo design services to create unique and memorable brand identities.",
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

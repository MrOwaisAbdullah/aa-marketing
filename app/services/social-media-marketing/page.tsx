import SocialMediaMarketingService from "@/components/services/SocialMedia";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | Grow Your Brand Fast",
  description:
    "Reach millions with targeted social media campaigns. AA Marketing manages your presence on Instagram, Facebook & more. Get started now!",
  openGraph: {
    title: "Social Media Marketing Services | Grow Your Brand Fast",
    description:
      "Reach millions with targeted social media campaigns. AA Marketing manages your presence on Instagram, Facebook & more. Get started now!",
    url: "https://aamarktng.com/services/social-media-marketing",
    images: [
      {
        url: "https://aamarktng.com/assets/services/social-media.jpg",
        width: 1200,
        height: 630,
        alt: "Social Media Marketing Services - AA Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Services | Grow Your Brand Fast",
    description:
      "Reach millions with targeted social media campaigns. AA Marketing manages your presence on Instagram, Facebook & more. Get started now!",
    images: ["https://aamarktng.com/assets/services/social-media.jpg"],
  },
  alternates: {
    canonical: "/services/social-media-marketing",
  },
};

export const dynamic = "force-static";

const SocialMedia = () => {
  return <SocialMediaMarketingService />;
};

export default SocialMedia;

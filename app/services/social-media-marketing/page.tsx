import SocialMediaMarketingService from "@/components/services/SocialMedia";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | AA Marketing",
  description:
    "Grow your brand with expert social media marketing. Content creation, management, and advertising for all major platforms.",
  openGraph: {
    title: "Social Media Marketing Services | AA Marketing",
    description:
      "Grow your brand with expert social media marketing. Content creation, management, and advertising for all major platforms.",
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
    title: "Social Media Marketing Services | AA Marketing",
    description:
      "Grow your brand with expert social media marketing. Content creation, management, and advertising for all major platforms.",
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

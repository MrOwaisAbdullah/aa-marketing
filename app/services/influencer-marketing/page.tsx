import React from "react";
import InfluencerMarketingService from "@/components/services/InfluencerMarketing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Influencer Marketing Services | Buy Brand Growth",
  description:
    "Buy affordable influencer marketing services. Boost your brand's visibility by connecting with top influencers to reach a wider audience.",
  openGraph: {
    title: "Affordable Influencer Marketing Services | Buy Brand Growth",
    description:
      "Buy affordable influencer marketing services. Boost your brand's visibility by connecting with top influencers to reach a wider audience.",
    url: "https://aamarktng.com/services/influencer-marketing",
    images: [
      {
        url: "https://aamarktng.com/assets/services/influencer-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Influencer Marketing Services - AA Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Influencer Marketing Services | Buy Brand Growth",
    description:
      "Buy affordable influencer marketing services. Boost your brand's visibility by connecting with top influencers to reach a wider audience.",
    images: ["https://aamarktng.com/assets/services/influencer-marketing.jpg"],
  },
  alternates: {
    canonical: "/services/influencer-marketing",
  },
};

export const dynamic = "force-static";

const influencerMarketing = () => {
  return <InfluencerMarketingService />;
};

export default influencerMarketing;

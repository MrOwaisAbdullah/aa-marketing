import React from "react";
import { Metadata } from "next";
import OutdoorMarketingService from "@/components/services/OutdoorMarketing";

export const metadata: Metadata = {
  title: "Affordable Outdoor Marketing Services | Buy Brand Visibility",
  description:
    "Buy affordable outdoor marketing services. Boost your brand's visibility with impactful outdoor campaigns that reach your target audience.",
  openGraph: {
    title: "Affordable Outdoor Marketing Services | Buy Brand Visibility",
    description:
      "Buy affordable outdoor marketing services. Boost your brand's visibility with impactful outdoor campaigns that reach your target audience.",
    url: "https://aamarktng.com/services/outdoor-marketing-in-pakistan",
    images: [
      {
        url: "https://aamarktng.com/assets/services/outdoor-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Outdoor Marketing Services in Pakistan - AA Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Outdoor Marketing Services | Buy Brand Visibility",
    description:
      "Buy affordable outdoor marketing services. Boost your brand's visibility with impactful outdoor campaigns that reach your target audience.",
    images: ["https://aamarktng.com/assets/services/outdoor-marketing.jpg"],
  },
  alternates: {
    canonical: "/services/outdoor-marketing-in-pakistan",
  },
};

export const dynamic = "force-static";

const OutdoorMarketing = () => {
  return <OutdoorMarketingService />;
};

export default OutdoorMarketing;

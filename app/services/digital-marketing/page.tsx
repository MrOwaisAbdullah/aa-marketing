import DigitalMarketingService from "@/components/services/DigitalMarketing";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services That Drive Real Results",
  description:
    "Boost leads, traffic & sales with AA Marketing's proven digital strategies. PPC, email, content & more all in one place. Start growing today!",
  openGraph: {
    title: "Digital Marketing Services That Drive Real Results",
    description:
      "Boost leads, traffic & sales with AA Marketing's proven digital strategies. PPC, email, content & more all in one place. Start growing today!",
    url: "https://aamarktng.com/services/digital-marketing",
    images: [
      {
        url: "https://aamarktng.com/assets/services/digital-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Services - AA Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services That Drive Real Results",
    description:
      "Boost leads, traffic & sales with AA Marketing's proven digital strategies. PPC, email, content & more all in one place. Start growing today!",
    images: ["https://aamarktng.com/assets/services/digital-marketing.jpg"],
  },
  alternates: {
    canonical: "/services/digital-marketing",
  },
};

export const dynamic = "force-static";

const DigitalMarketing = () => {
  return <DigitalMarketingService />;
};

export default DigitalMarketing;

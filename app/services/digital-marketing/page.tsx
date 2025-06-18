import DigitalMarketingService from "@/components/services/DigitalMarketing";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Digital Marketing Services | Buy Growth Solutions",
  description:
    "Buy affordable digital marketing solutions to grow your business. SEO, PPC, and more to help you reach your target audience and increase sales.",
  openGraph: {
    title: "Affordable Digital Marketing Services | Buy Growth Solutions",
    description:
      "Buy affordable digital marketing solutions to grow your business. SEO, PPC, and more to help you reach your target audience and increase sales.",
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
    title: "Affordable Digital Marketing Services | Buy Growth Solutions",
    description:
      "Buy affordable digital marketing solutions to grow your business. SEO, PPC, and more to help you reach your target audience and increase sales.",
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

import AppDevelopmentService from "@/components/services/AppDevelopment";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable App Development Services | Buy Custom Apps",
  description:
    "Buy affordable app development services for custom iOS and Android apps. Get a mobile solution that suits your business needs at AA Marketing.",
  openGraph: {
    title: "Affordable App Development Services | Buy Custom Apps",
    description:
      "Buy affordable app development services for custom iOS and Android apps. Get a mobile solution that suits your business needs at AA Marketing.",
    url: "https://aamarktng.com/services/app-development",
    images: [
      {
        url: "/assets/services/app-development.jpg",
        width: 1200,
        height: 630,
        alt: "App Development Services - AA Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable App Development Services | Buy Custom Apps",
    description:
      "Buy affordable app development services for custom iOS and Android apps. Get a mobile solution that suits your business needs at AA Marketing.",
    images: ["/assets/services/app-development.jpg"],
  },
  alternates: {
    canonical: "/services/app-development",
  },
};

export const dynamic = "force-static";

const appDevelopment = () => {
  return <AppDevelopmentService />;
};

export default appDevelopment;

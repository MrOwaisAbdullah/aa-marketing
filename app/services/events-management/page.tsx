import EventsManagementService from "@/components/services/EventsManagement";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Event Management Services | Buy Seamless Planning",
  description:
    "Buy affordable event management services for flawless planning. Let us handle every detail to make your event a success with AA Marketing.",
  openGraph: {
    title: "Affordable Event Management Services | Buy Seamless Planning",
    description:
      "Buy affordable event management services for flawless planning. Let us handle every detail to make your event a success with AA Marketing.",
    url: "https://aamarktng.com/services/events-management",
    images: [
      {
        url: "https://aamarktng.com/assets/services/events-management.jpg",
        width: 1200,
        height: 630,
        alt: "Events Management Services - AA Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Event Management Services | Buy Seamless Planning",
    description:
      "Buy affordable event management services for flawless planning. Let us handle every detail to make your event a success with AA Marketing.",
    images: ["https://aamarktng.com/assets/services/events-management.jpg"],
  },
  alternates: {
    canonical: "/services/events-management",
  },
};

export const dynamic = "force-static";

const eventsManagement = () => {
  return <EventsManagementService />;
};

export default eventsManagement;

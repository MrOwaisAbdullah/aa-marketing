import CgiVideosService from "@/components/services/CGIAds";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGI Video Ads - Stunning 3D Marketing for Your Brand",
  description:
    "Captivate your audience with cinematic CGI video ads. AA Marketing creates jaw-dropping 3D visuals that convert viewers into customers. See examples!",
  openGraph: {
    title: "CGI Video Ads - Stunning 3D Marketing for Your Brand",
    description:
      "Captivate your audience with cinematic CGI video ads. AA Marketing creates jaw-dropping 3D visuals that convert viewers into customers. See examples!",
    url: "https://aamarktng.com/services/cgi-videos-ads",
    images: [
      {
        url: "https://aamarktng.com/assets/services/cgi-videos.jpg",
        width: 1200,
        height: 630,
        alt: "CGI Videos & Commercial Ad Creatives - AA Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CGI Video Ads - Stunning 3D Marketing for Your Brand",
    description:
      "Captivate your audience with cinematic CGI video ads. AA Marketing creates jaw-dropping 3D visuals that convert viewers into customers. See examples!",
    images: ["https://aamarktng.com/assets/services/cgi-videos.jpg"],
  },
  alternates: {
    canonical: "/services/cgi-videos-ads",
  },
};

export const dynamic = "force-static";

const CGIVideos = () => {
  return <CgiVideosService />;
};

export default CGIVideos;

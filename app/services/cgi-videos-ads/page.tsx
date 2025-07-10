import CgiVideosService from "@/components/services/CGIAds";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGI Videos & Commercial Ad Creatives | AA Marketing",
  description:
    "Create visually impactful CGI videos and commercial ads with AA Marketing. Next-level CGI that grabs attention and drives results for your brand.",
  openGraph: {
    title: "CGI Videos & Commercial Ad Creatives | AA Marketing",
    description:
      "Create visually impactful CGI videos and commercial ads with AA Marketing. Next-level CGI that grabs attention and drives results for your brand.",
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
    title: "CGI Videos & Commercial Ad Creatives | AA Marketing",
    description:
      "Create visually impactful CGI videos and commercial ads with AA Marketing. Next-level CGI that grabs attention and drives results for your brand.",
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

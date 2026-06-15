import WebDevelopmentService from "@/components/services/WebDevelopment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services - Fast, Modern & Scalable",
  description:
    "Build a powerful online presence with AA Marketing's web development. Custom websites, optimized for speed & conversions. Get a free quote today!",
  openGraph: {
    title: "Web Development Services - Fast, Modern & Scalable",
    description:
      "Build a powerful online presence with AA Marketing's web development. Custom websites, optimized for speed & conversions. Get a free quote today!",
    url: "https://aamarktng.com/services/web-development",
    images: [
      {
        url: "https://aamarktng.com/assets/services/web-development.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Services - AA Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services - Fast, Modern & Scalable",
    description:
      "Build a powerful online presence with AA Marketing's web development. Custom websites, optimized for speed & conversions. Get a free quote today!",
    images: ["https://aamarktng.com/assets/services/web-development.jpg"],
  },
  alternates: {
    canonical: "/services/web-development",
  },
};

export const dynamic = "force-static";

export default function WebDevelopmentPage() {
  return <WebDevelopmentService />;
}

import WebDevelopmentService from "@/components/services/WebDevelopment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Web Development Services | Buy Custom Websites",
  description:
    "Buy affordable web development services. Get a custom website that fits your business needs. Start your online presence with AA Marketing today.",
  openGraph: {
    title: "Affordable Web Development Services | Buy Custom Websites",
    description:
      "Buy affordable web development services. Get a custom website that fits your business needs. Start your online presence with AA Marketing today.",
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
    title: "Affordable Web Development Services | Buy Custom Websites",
    description:
      "Buy affordable web development services. Get a custom website that fits your business needs. Start your online presence with AA Marketing today.",
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

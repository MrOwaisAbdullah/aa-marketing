import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact AA Marketing | Let's Elevate Your Brand",
  description:
    "Contact us by phone, email, or form. We're here to help you reach your digital marketing goals and grow your business fast and smart.",
  openGraph: {
    title: "Contact AA Marketing | Let's Elevate Your Brand",
    description:
      "Contact us by phone, email, or form. We're here to help you reach your digital marketing goals and grow your business fast and smart.",
    url: "https://aamarktng.com/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

const contact = () => {
  return <Contact />;
};

export default contact;

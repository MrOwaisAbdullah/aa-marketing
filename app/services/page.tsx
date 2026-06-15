import React from "react";
import Services from "@/components/Services";
import { Metadata } from "next";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Full-Scale Digital Marketing Solutions - Our Services",
  description:
    "From SEO to CGI ads, AA Marketing offers end-to-end digital services to help your brand grow online. Explore all our services and get started!",
  openGraph: {
    title: "Full-Scale Digital Marketing Solutions - Our Services",
    description:
      "From SEO to CGI ads, AA Marketing offers end-to-end digital services to help your brand grow online. Explore all our services and get started!",
    url: "https://aamarktng.com/services",
  },
  alternates: {
    canonical: "/services",
  },
};

const services = () => {
  return (
    <>
      <Services initialVisibleCount={9}/>
      <div className="h-44"></div>
      {/* CTA Section */}
      <CtaSection
        title="Let&apos;s Make Your Brand Look Good - and Work Even Better"
        paragraph="Whether you need strategy, design, development, or content — we help businesses show up online with clarity and confidence. Ready to take the next step?"
        buttonText="LET&apos;S TALK"
        buttonLink="/contact"
      />
    </>
  );
};

export default services;

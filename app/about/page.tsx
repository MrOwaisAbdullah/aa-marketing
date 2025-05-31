import React from "react";
import About from "@/components/About";
import CtaSection from "@/components/CtaSection";
import { Metadata } from "next";
import LogoSlider from "@/components/ui/LogoSlider";
import Testimonials from "@/components/Testimonials";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AA Marketing - your trusted partner in digital transformation. Discover our mission, vision, and the team behind our success.",
  openGraph: {
    title: "About Us | AA Marketing",
    description:
      "Learn about AA Marketing - your trusted partner in digital transformation. Discover our mission, vision, and the team behind our success.",
    url: "https://aamarktng.com/about",
  },
  alternates: {
    canonical: "/about",
  },
};

const about = () => {
  return (
    <>
      <About />
      <div className="h-20"></div>
            <h3 className="text-base text-center text-primary font-medium sm:text-lg">
              Our Clients
            </h3>
            <h2 className="text-2xl text-center text-text font-semibold mb-10 sm:text-3xl">
              Brands We Worked With
            </h2>
      <div className="my-20 relative mt-28">
      <LogoSlider />
      <Testimonials />
      </div>

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

export default about;

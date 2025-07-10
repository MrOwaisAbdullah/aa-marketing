"use client";

import { useState, useEffect } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import FadeInSection from "./FadeInSection";
import { PulsingLoader } from "./ui/PulseLoader";

const allServices = [
  {
    image: "/assets/services/graphic-designing.jpg",
    title: "Graphic Designing",
    description:
      "Creative graphic design for your brand: social media posts, logos, ads, business cards, and more.",
    link: "/services/graphic-designing",
  },
  {
    image: "/assets/services/web-development.jpg",
    title: "Web Development",
    description:
      "Custom web development with cutting-edge technologies to create responsive, high-performance websites.",
    link: "/services/web-development",
  },
  {
    image: "/assets/services/digital-marketing.jpg",
    title: "Digital Marketing",
    description:
      "Data-driven marketing campaigns that connect with your audience and convert visitors into loyal customers.",
    link: "/services/digital-marketing",
  },
  {
    image: "/assets/services/cgi-videos.jpg",
    title: "CGI Videos & Ads",
    description:
      "Visually impactful CGI videos and commercial ads to make your brand stand out everywhere.",
    link: "/services/cgi-videos-ads",
  },
  {
    image: "/assets/services/social-media.jpg",
    title: "Social Media Marketing",
    description:
      "Grow your brand with expert social media marketing. Content creation, management, and advertising for all major platforms.",
    link: "/services/social-media-marketing",
  },
  {
    image: "/assets/services/ai-chatbot.jpg",
    title: "AI Chatbots & Agents",
    description:
      "Automate smarter with AI chatbots and intelligent agents for 24/7 support and task automation.",
    link: "/services/ai-agents-chatbot",
  },
];

interface ServicesProps {
  initialVisibleCount?: number;
  loadMoreCount?: number;
}

const Services = ({
  initialVisibleCount = 6,
  loadMoreCount = 3,
}: ServicesProps) => {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [isLoading, setIsLoading] = useState(false);

  // Preload all images for better performance
  useEffect(() => {
    allServices.forEach((service) => {
      if (service.image) {
        const img = new Image();
        img.src = service.image;
      }
    });
  }, []);

  const handleLoadMore = async () => {
    setIsLoading(true);
    // Short delay for UI feedback
    await new Promise((resolve) => setTimeout(resolve, 500));
    setVisibleCount((prev) => prev + loadMoreCount);
    setIsLoading(false);
  };

  const visibleServices = allServices.slice(0, visibleCount);
  const hasMoreServices = visibleCount < allServices.length;

  return (
    <FadeInSection>
      <section className="py-20 px-0">
        <div className="max-w-7xl mx-auto px-5">
          <div className="mb-16 text-center">
            <h3 className="text-base text-primary font-semibold sm:text-lg">
              Features
            </h3>
            <h2 className="text-5xl text-text font-semibold sm:text-6xl">
              Services
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleServices.map((service, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>

          {hasMoreServices && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={handleLoadMore}
                disabled={isLoading}
                className="font-poppins flex items-center text-center justify-center text-white bg-primary hover:bg-[#6a59ee] py-2 px-6 rounded transition-all duration-300 transform shadow-lg shadow-primary/20 text-md font-semibold disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <PulsingLoader size="xs" color="white" />
                  </>
                ) : (
                  "Load More"
                )}
              </button>
            </div>
          )}
        </div>
      </section>
    </FadeInSection>
  );
};

export default Services;

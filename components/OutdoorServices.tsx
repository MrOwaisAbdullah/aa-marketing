"use client";

import { useState } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import FadeInSection from "./FadeInSection";

const outdoorSubServices = [
  {
    image: "/assets/services/expo.jpg",
    title: "Expo Branding",
    description:
      "Custom expo branding and booth designs that help you grab attention and dominate the exhibition floor.",
    link: "/contact",
  },
    {
      image: "/assets/services/outdoor-marketing.jpg",
      title: "School Sport Activity",
      description:
        "Become a brand activator through school events — strengthening community ties and enhancing brand presence.",
      link: "/contact",
    },
    {
      image: "/assets/services/billboard.jpg",
      title: "Billboard Advertising",
      description:
        "High-visibility billboard campaigns in premium locations — perfect for brand awareness and mass reach.",
      link: "/contact",
    },
    // {
    //   image: "/assets/services/outdoor-marketing.jpg",
    //   title: "Door-to-Door Flyer Distribution",
    //   description:
    //     "Precise flyer targeting and distribution with a strong focus on quality, accuracy, and customer satisfaction.",
    //   link: "/contact",
    // },
    {
      image: "/assets/services/bus-advertisement.jpg",
      title: "Bus Shelter Advertisement",
      description:
        "High-impact transit shelter ads that reach daily commuters with strategic placement and creative visuals.",
      link: "/contact",
    },
    {
      image: "/assets/services/rickshaw.jpg",
      title: "Advertisement on Rickshaw",
      description:
        "Affordable and widespread city advertising through customized rickshaw branding campaigns.",
      link: "/contact",
    },
    {
      image: "/assets/services/people-bus-branding.jpg",
      title: "People Bus Branding Ad",
      description:
        "Transform public buses into moving billboards — city-wide exposure with large, bold designs.",
      link: "/contact",
    },
    {
      image: "/assets/services/smd-van-ad.jpg",
      title: "SMD Float Van Advertising",
      description:
        "Eye-catching mobile LED screen ads that light up busy streets and major events for maximum exposure.",
      link: "/contact",
    },
    {
      image: "/assets/services/pedestrian-bridge.jpg",
      title: "Pedestrian Bridge Branding",
      description:
        "Strategic pedestrian bridge ads that capture the attention of foot traffic and enhance brand visibility.",
      link: "/contact",
    }
  ];
  

const OutdoorServices = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 6, outdoorSubServices.length));
  };

  const visibleServices = outdoorSubServices.slice(0, visibleCount);
  const hasMoreServices = visibleCount < outdoorSubServices.length;

  return (
    <FadeInSection>
      <section className="py-20 px-0">
        <div className="max-w-7xl mx-auto px-5">
          <div className="mb-16 text-center">
            <h3 className="text-base text-primary font-medium sm:text-lg">
              OutDoor Marketing
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
                buttonText="Get a Quote"
              />
            ))}
          </div>

          {hasMoreServices && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="font-poppins flex items-center text-center justify-center text-white bg-primary hover:bg-[#6a59ee] py-2 px-6 rounded transition-all duration-300 transform shadow-lg shadow-primary/20 text-md font-semibold"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </FadeInSection>
  );
};

export default OutdoorServices;

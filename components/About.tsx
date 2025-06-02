import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import FadeInSection from "./FadeInSection";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto text-gray-600 body-font scroll-smooth ">
      <FadeInSection>
        <div
          id="about"
          className="px-5 py-24 grid content-center scroll-smooth duration-300 "
        >
          <div>
            <h3 className="text-base text-center md:text-left text-primary font-semibold sm:text-lg">
              About Us!
            </h3>
            <h2 className="sm:text-3xl text-center text-2xl md:text-left text-text font-medium title-font mb-2 md:w-2/5">
              Helping Brands Grow with Strategy, Design & Digital Power
            </h2>
          </div>
          <div className="md:-mt-24 md:w-3/5 md:pl-6 justify-self-end">
            <p className="leading-relaxed text-center md:text-left text-base text-gray-500 font-poppins">
              At AA Marketing, we are a full-service digital agency committed to helping mid-sized businesses enhance their online presence and achieve their marketing goals. With clients spanning industries such as retail, real estate, restaurants, and e-commerce, we bring a personalized approach to each project. Our focus is on delivering creative, data-driven solutions that deliver results.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:justify-start md:mt-4 mt-6">
              <Link href="/contact">
                <button className="font-poppins flex items-center text-white bg-gradient-to-br from-[#a54a4a] via-primary to-[#a54a4a] hover:via-accent hover:from-purple-700 hover:to-purple-500 py-2 px-8 rounded-full font-medium md:text-lg transition-all duration-500 transform shadow-lg shadow-primary/20">
                  Talk to Us
                </button>
              </Link>
              <Link
                href="/contact"
                className="font-poppins hidden xs:inline-flex group text-primary-500 items-center ml-4"
              >
                Let&apos;s build something amazing together.
                <span className="group-hover:-rotate-45 ml-5 duration-300 group-hover:text-primary">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default About;

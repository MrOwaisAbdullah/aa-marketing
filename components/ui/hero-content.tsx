import Link from "next/link";
import dynamic from "next/dynamic";
import React from "react";

const Typewriter = dynamic(
  () => import("nextjs-simple-typewriter").then((mod) => mod.Typewriter),
  {
    ssr: false,
    loading: () => <span className="animate-pulse">Loads Growth...</span>,
  }
);

const HeroContent = () => {
  return (
    <div className="max-w-7xl mx-auto flex px-5 pt-52 py-10 md:flex-row flex-col items-center">
      <div className="sm:entrance-left lg:flex-grow md:w-1/2 lg:pr-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:w-3/5">
        <h2 className="title-font sm:text-lg text-base font-semibold mb-1 capitalize text-white/90">
          Not just another digital agency.
        </h2>
        <div className="contents">
          <h1 className="sm:text-5xl text-4xl mb-4 font-bold text-white">
            We Build
            <span className="text-primary"> Brands & Businesses</span> That
            <br />
            <span className="">
              <Typewriter
                words={[" Stand Out.", " Sell More.", " Drive Sales."]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={80}
                delaySpeed={1200}
              />
            </span>
          </h1>
        </div>
        <p className="mb-8 leading-relaxed font-poppins text-white/80">
          More reach. More clicks. More trust. We craft the kind of presence
          that makes your brand look sharp, sound bold, and feel impossible to
          ignore.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/projects"
            className="hidden lg:flex justify-center items-center scroll-smooth duration-300"
          >
            <button className="group flex items-center justify-center border-2 border-primary/20 hover:border-primary/40 text-white hover:text-primary py-2 bg-background/30 rounded-full font-medium text-lg px-8">
              See Our Work
            </button>
          </Link>
          <Link href="/contact" className="scroll-smooth duration-300">
            <button className="group items-center text-center justify-center text-white bg-gradient-to-br from-[#a54a4a] via-primary to-black/40 hover:from-purple-800 hover:via-[#6a59ee] hover:to-black/30 py-2 px-8 rounded-full font-medium text-lg transition-all duration-300 transform shadow-lg shadow-primary/20">
              Get a Free Consultation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;

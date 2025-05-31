"use client";
import hero from "../public/assets/hero.png";
import Image from "next/image";
import { Typewriter } from "nextjs-simple-typewriter";
import Link from "next/link";
import { HeroHighlight } from "./ui/HeroHighlight";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative text-text overflow-hidden z-0 -mt-24">
      <HeroHighlight>
        {/* Accent highlight with more visible pulse animation */}
        <motion.div
          className="absolute animate-float top-[40%] right-[30%] w-[300px] h-[300px] rounded-full bg-primary/15 blur-[90px]"
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
        
        <div className="max-w-7xl mx-auto flex px-5 pt-40 py-10 md:flex-row flex-col items-center">
          <div className="sm:entrance-left lg:flex-grow md:w-1/2 lg:pr-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:w-3/5">
            <h2 className="title-font sm:text-lg text-base font-semibold mb-1 font-montserrat capitalize text-text">
              Not just another digital agency.
            </h2>
            <div className="">
              <h1 className="sm:text-5xl text-4xl mb-4 font-montserrat font-bold text-text">
                We Build
                <span className="text-primary"> Brands & Businesses</span> That
                <br />
                <span className="">
                  <Typewriter
                    words={[
                      " Stand Out.",
                      " Sell More.",
                      " Scale Faster.",
                      " Shine Brighter.",
                      " Win Big.",
                      " Drive Sales.",
                      " Grow Fast.",
                    ]}
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
            <p className="mb-8 leading-relaxed font-poppins text-text/80">
              More reach. More clicks. More trust. We craft the kind of presence
              that makes your brand look sharp, sound bold, and feel impossible
              to ignore — online and offline.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects" className="scroll-smooth duration-300">
                <button className="group flex items-center border-2 border-primary/20 hover:border-primary/40 text-text hover:text-primary py-2 bg-background/30 rounded-full font-medium text-lg px-8">
                  See Our Work
                </button>
              </Link>
              <Link href="/contact" className="scroll-smooth duration-300">
                <button className="group items-center text-center justify-center text-white bg-gradient-to-br from-[#a54a4a] via-primary to-black/40 hover:via-accent hover:to-black/30 py-2 px-8 rounded-full font-medium text-lg transition-all duration-300 transform shadow-lg shadow-primary/20">
                  Get a Free Consultation
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:max-w-full md:w-2/5 sm:pt-0 md:ml-0 relative">
            {/* Image highlight effects */}
            <div className="absolute animate-blob -z-10 inset-0 blur-[60px] bg-gradient-to-tr from-primary via-transparent to-accent rounded-full scale-90 opacity-70"></div>

            {/* Decorative elements around image */}
            <div className="absolute bottom-2 md:bottom-7 -left-3 w-36 h-36 bg-accent opacity-20 rounded-full animate-float"></div>

            {/* Small decorative elements around the image */}
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-primary opacity-30 rounded-md animation-delay-3000 animate-spin-slow z-50"></div>

            {/* Subtle primary lines */}
            <div className="absolute top-1/2 -left-4 md:-left-10 w-20 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
            <div className="absolute top-[37%] -right-4 md:-right-10 w-20 h-[1px] bg-gradient-to-l from-transparent via-primary to-transparent animate-pulse"></div>

            <div className="flex flex-row justify-center items-center relative z-10">
              <AnimatedTooltip
                tooltipTitle="BURRAQ DIGITS"
                tooltipDescription="Step Together Digitally"
              >
                <div className="relative">
                  <Image
                    src={hero || "/placeholder.svg"}
                    className="object-cover object-center w-full h-full relative z-10 opacity-80"
                    width={800}
                    height={600}
                    priority
                    alt="Burraq Digits"
                  />
                </div>
              </AnimatedTooltip>
            </div>
          </div>
        </div>
        <div className="h-px bg-border justify-center flex m-auto mt-10"></div>
      </HeroHighlight>
    </section>
  );
};

export default Hero;

"use client";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "font-poppins flex max-w-[95%] xss:max-w-fit fixed top-7 mx-auto border border-primary/20 rounded-full bg-secondary shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[4000] pr-0 md:pr-2 pl-8 py-2 items-center justify-center inset-x-0 space-x-4 xs:space-x-8 xss:space-x-10 md:space-x-14",
          className
        )}
      >
        {navItems.map(
          (
            navItem: {
              name: string;
              link: string;
              icon?: JSX.Element;
            },
            idx: number
          ) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-text items-center flex space-x-1 hover:text-primary"
              )}
            >
              <span className="block sm:hidden font-medium text-sm">{navItem.icon}</span>
              <span className="hidden sm:block font-medium text-sm">{navItem.name}</span>
            </Link>
          )
        )}
        <Link href="/contact"
            className="bg-background border border-white/70 rounded-full p-2 px-4 text-text font-medium hover:text-white hover:bg-accent flex items-center text-xs md:text-sm space-x-2"
          >
            <span>Contact</span>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

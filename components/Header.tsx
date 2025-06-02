"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { ChevronDown, ChevronRight } from "lucide-react";
import ThemeSwitcher from "./ui/ThemeSwitcher";
import ThemeLogo from "./ui/ThemeLogo";

const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "App Development", href: "/services/app-development" },
  { name: "Search Engine Optimization", href: "/services/seo" },
  { name: "Influencer Marketing", href: "/services/influencer-marketing" },
  { name: "Logo Design", href: "/services/logo-design" },
  { name: "Events Management", href: "/services/events-management" },
  {
    name: "Outdoor Marketing",
    href: "/services/outdoor-marketing-in-pakistan",
  },
];

// Key routes to prefetch
const keyRoutes = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/contact",
  "/services/web-development",
  "/services/digital-marketing",
  "/services/app-development",
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMobileOrTablet = useRef(false);
  const router = useRouter();

  // Prefetch key routes on component mount
  useEffect(() => {
    keyRoutes.forEach((route) => {
      router.prefetch(route);
    });
  }, [router]);

  // Check if we're on mobile/tablet (client-side only)
  useEffect(() => {
    const checkDevice = () => {
      isMobileOrTablet.current = window.innerWidth < 1024;
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  // Handle dropdown hover behavior with delay (desktop only)
  const handleMouseEnter = () => {
    if (isMobileOrTablet.current) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobileOrTablet.current) return;

    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up
    if (isMobileOrTablet.current) {
      setServicesOpen(!servicesOpen);
    }
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleLinkClick() {
    setIsMenuOpen(false);
    setServicesOpen(false);
  }

  function getMenuClassNames() {
    let menuClasses = [];
    if (isMenuOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "w-full",
        "h-auto",
        "min-h-[48vh]",
        "mt-2",
        "px-8",
        "py-12",
        "gap-10",
        "flex-col",
        "left-0",
        "top-[50px]",
        "bg-gradient-to-b",
        "from-white/80",
        "to-background",
        "dark:from-black/80",
        "dark:to-background",
        "z-50",
        "backdrop-blur-xl",
        "border-t",
        "border-border",
      ];
    } else {
      menuClasses = [
        "hidden",
        "lg:flex",
        "lg:ml-auto",
        "flex-wrap",
        "items-center",
        "justify-center",
        "gap-6",
        "lg:gap-8",
      ];
    }
    return menuClasses.join(" ");
  }

  return (
    <header className="relative top-0 back left-0 right-0 z-50 mx-auto py-5 -my-4 sm:my-0 sm:py-1 max-h-20 sm:max-h-none font-poppins bg-gradient-to-r from-black/30 to-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between pt-2 px-3 sm:p-3 flex-col lg:flex-row z-50 relative">
        <div className="flex justify-between items-center">
          <ThemeLogo />

          <button
            className="lg:hidden inline-flex items-center -mt-4 text-4xl text-primary hover:text-accent z-10"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <CgClose /> : <CgMenuRight />}
          </button>
        </div>
        <nav className={getMenuClassNames()}>
          {" "}
          <Link
            href={"/"}
            onClick={handleLinkClick}
            className="mr-5 font-medium text-base lg:text-white text-text hover:text-primary transition-colors"
          >
            Home
          </Link>{" "}
          <Link
            href={"/about"}
            onClick={handleLinkClick}
            className="mr-5 font-medium text-base lg:text-white text-text hover:text-primary transition-colors"
          >
            About Us
          </Link>
          {/* Services with dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Desktop: Use div with hover, Mobile/Tablet: Use button with click */}
            <div className="mr-5 font-medium text-base hover:text-primary cursor-pointer flex items-center">
              {" "}
              <Link
                href="/services"
                className="lg:text-white text-text hover:text-primary"
                onClick={handleLinkClick}
              >
                Our Services
              </Link>
              <button
                onClick={toggleServicesDropdown}
                className="ml-1 flex items-center focus:outline-none lg:text-white text-text"
                aria-label="Toggle services menu"
              >
                <ChevronDown
                  className={`h-6 w-6 lg:h-4 lg:w-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>{" "}
            {/* Dropdown menu */}
            {servicesOpen && (
              <div
                className={`${
                  isMenuOpen
                    ? "relative shadow-none bg-transparent mt-4 ml-4 w-full"
                    : "absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-background backdrop-blur-lg border border-border"
                } z-50`}
              >
                <div className="py-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      onClick={handleLinkClick}
                      className="px-4 py-3 text-sm text-text hover:bg-[#dc5b5b]/50 flex items-center transition-colors"
                    >
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>{" "}
          <Link
            href={"/projects"}
            onClick={handleLinkClick}
            className="mr-5 font-medium text-base lg:text-white text-text hover:text-primary transition-colors"
          >
            Our Projects
          </Link>
          <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-4">
            <ThemeSwitcher />
            <button className="group inline-flex items-center text-center justify-center text-white bg-gradient-to-br from-[#a54a4a] via-primary to-[#a54a4a]/30 hover:bg-accent py-2 px-8 lg:py-2 lg:px-8 rounded-full font-medium lg:text-md transition-all duration-300 transform shadow-lg shadow-primary/20 text-base mt-4 lg:mt-0">
              <Link href={"/contact"} onClick={handleLinkClick}>
                GET A FREE QUOTE
              </Link>
              <FaArrowRight className="pl-3 text-2xl" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

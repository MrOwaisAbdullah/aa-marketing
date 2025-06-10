import { lazy, Suspense } from "react";
import SlidingHero from "@/components/Sliding-hero";
import Link from "next/link";

// Dynamically import components not needed for initial render
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));
const ProjectsTab = lazy(() => import("@/components/ProjectsTab"));
const Services = lazy(() => import("@/components/Services"));
const ServiceScroll = lazy(() => import("@/components/ServiceScroll"));
const LogoSlider = lazy(() => import("@/components/ui/LogoSlider"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const BlogSection = lazy(() => import("@/components/BlogSection"));

// Configure page to be statically generated
export const generateStaticParams = async () => {
  return [];
};

export default function Home() {
  return (
    <>
      <SlidingHero />
      <Suspense fallback={<div className="h-12 bg-background" />}>
        <LogoSlider />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <About />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <ServiceScroll />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <ProjectsTab />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <BlogSection limit={3} />
        <Link className="mt-2 flex justify-center" href="/blog">
          {/* Button to see more blogs */}
          <button className="font-poppins flex items-center text-center justify-center text-white bg-primary hover:bg-[#6a59ee] py-2 px-6 rounded transition-all duration-300 transform shadow-lg shadow-primary text-md font-semibold">
            See More Blogs
          </button>
        </Link>
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <Contact />
      </Suspense>
    </>
  );
}

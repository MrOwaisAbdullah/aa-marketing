import About from "@/components/About";
import Contact from "@/components/Contact";
import ProjectsTab from "@/components/ProjectsTab";
import Services from "@/components/Services";
import ServiceScroll from "@/components/ServiceScroll";
import SlidingHero from "@/components/Sliding-hero";
import LogoSlider from "@/components/ui/LogoSlider";
import Testimonials from "../components/Testimonials";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <SlidingHero />
      <LogoSlider />
      <About />
      <Services />
      <ServiceScroll />
      <ProjectsTab />
      <Testimonials />
      <Contact />
    </>
  );
}

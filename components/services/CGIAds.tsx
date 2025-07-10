import type React from "react";
import {
  Film,
  Camera,
  Eye,
  Layers,
  MonitorSmartphone,
  CheckCircle,
  Cpu,
} from "lucide-react";
import CtaSection from "../CtaSection";
import ServiceCard from "../ui/ServiceCard2";
import WhyChooseUsSection from "../WhyChooseUs";
import FadeInSection from "../FadeInSection";
import FaqSection from "../Faq";
import ServiceHeroSection from "../ServiceHero";
// import Projects from "../Projects";

export default function CgiVideosService() {
  return (
    <div className="bg-background text-text">
      {/* Hero Section */}
      <ServiceHeroSection
        subheading="CGI VIDEOS & ADS"
        heading="Next-Level Visual Content by"
        headingHighlight="AA Marketing"
        heading2="Bold, Branded, Built to Convert"
        paragraph="From product animations to full-on ad creatives — we create scroll-stopping CGI content that grabs attention, builds credibility, and drives results."
        buttonText="START YOUR CGI PROJECT"
        buttonLink="/contact"
      />

      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="px-4">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-text">
              Make Your Brand <span className="text-primary">Unskippable</span>
            </h2>
            <p className="text-text/80 mb-16 max-w-3xl text-lg font-poppins">
              CGI content isn&apos;t just for the big screens anymore. We help brands of all sizes
              use animation and visual effects to elevate product showcases, ads, and digital campaigns - without breaking the budget.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-10 font-montserrat">
              Our CGI & Animation Services Include:
            </h3>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.3}>
              <ServiceCard
                icon={Film}
                title="Product Animation"
                description="Showcase features, angles, or design details with 3D animation that's clean, sharp, and branded."
              />
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <ServiceCard
                icon={Camera}
                title="Animated Commercials"
                description="Eye-catching ads crafted for reels, stories, and digital platforms — built to stop the scroll."
              />
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <ServiceCard
                icon={Layers}
                title="3D Modeling & Renders"
                description="We create high-quality models and scenes — even before your physical product is ready."
              />
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <ServiceCard
                icon={Eye}
                title="Visual Effects & Transitions"
                description="From subtle glow to dramatic FX — we&apos;ll enhance your content with clean, modern visuals."
              />
            </FadeInSection>

            <FadeInSection delay={0.7}>
              <ServiceCard
                icon={Cpu}
                title="Storyboarding & Scripting"
                description="Don&apos;t have a concept yet? We&apos;ll write it, sketch it, and bring it to life frame by frame."
              />
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <ServiceCard
                icon={MonitorSmartphone}
                title="Platform-Specific Cuts"
                description="Get versions formatted for Reels, TikTok, YouTube, or ads — all optimized for performance."
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection
        mainTitle="Why Choose"
        titleName="AA Marketing"
        titleFor="CGI Videos & Ads"
        benefits={[
          {
            icon: <CheckCircle size={20} />,
            title: "Scroll-Stopping Visuals",
            description:
              "We create visuals that grab attention and keep users watching till the end.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Speed Meets Quality",
            description:
              "Fast turnaround without sacrificing the polish your brand deserves.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Made for Digital Performance",
            description:
              "Our videos are built to work in ads, on landing pages, and across social platforms.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Concept to Execution",
            description:
              "You get scripting, 3D visuals, music, voiceover, and final cut — all handled in-house.",
          },
        ]}
        featuresRight={[
          "Product Renders",
          "Ad Concepts",
          "3D Animation",
          "Script Writing",
        ]}
        featuresLeft={[
          "Visual FX",
          "Reels / Shorts Versions",
          "Sound + Music",
          "Marketing-Ready Cuts",
        ]}
        ctaCard={{
          title: "Want CGI Content That Sells?",
          description:
            "Let’s make your next product launch or ad campaign unforgettable. Book a call to get started.",
          buttonText: "BOOK A FREE CGI CONSULTATION",
          buttonLink: "/contact",
        }}
      />

      {/* FAQ Section */}
      <FaqSection
        title="CGI Videos & Ads"
        headingHighlight="FAQs"
        faqs={[
          {
            question: "What can I use CGI content for?",
            answer: (
              <>
                You can use it for product launches, animated ads, explainer videos, or to
                showcase concepts that aren't built yet. It&apos;s flexible and works across all
                digital platforms.
              </>
            ),
          },
          {
            question: "Do I need a physical product to create a CGI video?",
            answer: (
              <>
                Nope! We can work with CAD files, photos, or even sketches to bring your product to life.
              </>
            ),
          },
          {
            question: "Can you format the video for multiple platforms?",
            answer: (
              <>
                Yes - we&apos;ll give you versions for Instagram Reels, YouTube, TikTok, and more, all optimized by size and length.
              </>
            ),
          },
          {
            question: "How long does it take to produce a CGI video?",
            answer: (
              <>
                Depends on the complexity, but usually between 1-3 weeks. We&apos;ll confirm timeline after reviewing your requirements.
              </>
            ),
          },
          {
            question: "Can you handle the script and concept too?",
            answer: (
              <>
                Absolutely. We can write, storyboard, and pitch you different angles based on your goals and product.
              </>
            ),
          },
        ]}
      />

      {/* CTA Section */}
      <CtaSection
        title="Let&apos;s Build CGI That Gets Shared"
        paragraph="From your next launch video to your biggest ad — we&apos;ll help you stand out with content that&apos;s impossible to scroll past."
        buttonText="GET STARTED WITH CGI VIDEO"
        buttonLink="/contact"
      />
    </div>
  );
}

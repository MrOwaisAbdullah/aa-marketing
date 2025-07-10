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
    <div className="bg-[#212428] text-white">
      {/* Hero Section */}
      <ServiceHeroSection
        subheading="CGI VIDEOS & COMMERCIAL AD CREATIVES"
        heading="Create Visually Impactful Ads with"
        headingHighlight="AA Marketing"
        heading2="Next-Level CGI That Stops the Scroll"
        paragraph="From sleek product reveals to high-impact animated ads, we bring imagination to the screen. Our CGI videos help your brand stand out in feeds, on billboards, and everywhere in between."
        buttonText="LET&apos;S PLAN YOUR NEXT VIDEO"
        buttonLink="/contact"
      />

      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="px-4">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
              CGI That <span className="text-accent">Grabs Attention</span> & Sells
            </h2>
            <p className="text-gray-400 mb-16 max-w-3xl text-lg font-poppins">
              Whether you're launching a product, creating an ad campaign, or just want to make a strong visual impression — our team creates CGI content that's scroll-stopping, brand-aligned, and built for results.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-10 font-montserrat">
              Our CGI & Ad Creative Services Include:
            </h3>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.3}>
              <ServiceCard
                icon={Film}
                title="CGI Product Videos"
                description="Perfect for tech, lifestyle, and packaging brands — show off your product in ways the camera can&apos;t."
              />
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <ServiceCard
                icon={Camera}
                title="3D Animated Ads"
                description="Eye-catching motion that turns heads. Designed for social feeds, screens, and ads that pop."
              />
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <ServiceCard
                icon={Layers}
                title="Visual Effects & Compositing"
                description="From explosions to seamless product transitions — we blend CG with real-world footage for a polished result."
              />
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <ServiceCard
                icon={Eye}
                title="Storyboard & Scripting"
                description="We write short, sharp concepts with visual direction — so your message is clear and creative from the start."
              />
            </FadeInSection>

            <FadeInSection delay={0.7}>
              <ServiceCard
                icon={Cpu}
                title="Brand-Centric Design"
                description="Colors, lighting, mood — everything is aligned to your brand&apos;s tone, vibe, and market."
              />
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <ServiceCard
                icon={MonitorSmartphone}
                title="Social-Ready Cuts"
                description="Get versions tailored for Instagram, TikTok, YouTube, and paid ads — optimized by aspect ratio and platform."
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section className="max-w-7xl mx-auto py-20 px-4">
        <FadeInSection>
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-10 font-montserrat">
            See Our <span className="text-accent">CGI Work</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg font-poppins">
            Explore our recent CGI-based commercials, animations, and content made for digital-first brands across multiple industries.
          </p>

          <Projects service="CGI Videos" />
        </FadeInSection>
      </section> */}

      {/* Why Choose Us */}
      <WhyChooseUsSection
        mainTitle="Why Brands Choose"
        titleName="AA Marketing"
        titleFor="CGI & Visual Content"
        benefits={[
          {
            icon: <CheckCircle size={20} />,
            title: "Studio-Quality in Digital Format",
            description: "Big visuals, cinematic quality — no overkill on cost or production time.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Creative + Technical Team",
            description: "Art directors, animators, and editors working together — no silos.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Made for Marketing",
            description: "Everything we create is built to sell, promote, and tell your story clearly.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Platform-Optimized Cuts",
            description: "You get edits for every channel — reels, stories, landscape, and portrait."
          },
        ]}
        featuresRight={[
          "3D Modeling",
          "Storyboard Writing",
          "Motion Graphics",
          "Product Animation",
        ]}
        featuresLeft={[
          "Visual FX",
          "Green Screen Blends",
          "Reels/Stories Cutdowns",
          "YouTube Ads Versions",
        ]}
        ctaCard={{
          title: "Need a Visual That Hits Different?",
          description:
            "Let’s create something bold. CGI that makes people stop scrolling, rewatch it, and remember your name.",
          buttonText: "BOOK YOUR CGI VIDEO",
          buttonLink: "/contact",
        }}
      />

      {/* FAQ Section */}
      <FaqSection
        title="CGI Videos & Ads"
        headingHighlight="FAQs"
        faqs={[
          {
            question: "What’s the difference between a CGI video and a traditional ad?",
            answer: (
              <>
                CGI videos use digital 3D animation and motion design, not cameras. They're ideal for showing products from angles you can&apos;t shoot or bringing abstract ideas to life.
              </>
            ),
          },
          {
            question: "Can you handle everything — script to final cut?",
            answer: (
              <>
                Yes. We handle the full pipeline — concept, storyboard, animation, post, and edits for different platforms.
              </>
            ),
          },
          {
            question: "Is this suitable for product launches?",
            answer: (
              <>
                Absolutely. CGI is perfect for showcasing product features, highlighting packaging, or doing a clean digital reveal before production starts.
              </>
            ),
          },
          {
            question: "How long does a CGI video take to produce?",
            answer: (
              <>
                Depending on complexity, projects can take from 1-3 weeks. We'll give you a clear timeline before we begin.
              </>
            ),
          },
          {
            question: "Can you make vertical videos for Instagram and TikTok?",
            answer: (
              <>
                Yes — we deliver platform-optimized versions, including reels, stories, YouTube ads, and even billboard-sized exports if needed.
              </>
            ),
          },
        ]}
      />

      {/* CTA Section */}
      <CtaSection
        title="Let&apos;s Bring Your Vision to Life — Frame by Frame"
        paragraph="From product launches to digital campaigns, we&apos;ll help you create CGI content that&apos;s impossible to ignore."
        buttonText="GET STARTED WITH CGI VIDEO"
        buttonLink="/contact"
      />
    </div>
  );
}

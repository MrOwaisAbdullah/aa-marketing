import type React from "react";
import {
  PenTool,
  Palette,
  BadgeCheck,
  Layers,
  Brush,
  Asterisk,
  CheckCircle,
} from "lucide-react";
import CtaSection from "../CtaSection";
import ServiceCard from "../ui/ServiceCard2";
import WhyChooseUsSection from "../WhyChooseUs";
import FadeInSection from "../FadeInSection";
import FaqSection from "../Faq";
import ServiceHeroSection from "../ServiceHero";
export default function GraphicDesignService() {
  return (
    <div className="bg-background text-text">
      {/* Hero Section */}
      <ServiceHeroSection
        subheading="GRAPHIC DESIGNING SERVICES"
        heading="Creativity That Builds Your Brand"
        headingHighlight="Graphic Design"
        heading2="Visuals for Every Platform & Purpose"
        paragraph="From scroll-stopping social media posts to memorable logos and ad creatives, our graphic design team helps your business stand out everywhere."
        buttonText="GET GRAPHIC DESIGN HELP"
        buttonLink="/contact"
      />
      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="px-4">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-text">
              Make Your Brand Unforgettable with {" "}
              <span className="text-primary">Graphic Design</span> That Works
            </h2>
            <p className="text-text/80 mb-16 max-w-3xl text-lg font-poppins">
              We design everything your business needs: logos, social media posts, ad creatives, business cards, banners, and more. Our designs are clean, modern, and always on-brand — so you get noticed and remembered.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-10 font-montserrat">
              What&apos;s Included in Our Graphic Design Services:
            </h3>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.3}>
              <ServiceCard
                icon={PenTool}
                title="Custom Logo Design"
                description="Unique, memorable logos that capture your brand's personality and vision."
              />
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <ServiceCard
                icon={Palette}
                title="Social Media Graphics"
                description="Eye-catching posts, stories, and banners for all platforms — designed to boost engagement."
              />
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <ServiceCard
                icon={BadgeCheck}
                title="Ad Creatives"
                description="High-converting ad designs for digital campaigns, print, and outdoor marketing."
              />
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <ServiceCard
                icon={Layers}
                title="Branding Kits"
                description="Complete brand kits: color palettes, typography, icons, and more for a consistent look."
              />
            </FadeInSection>

            <FadeInSection delay={0.7}>
              <ServiceCard
                icon={Brush}
                title="Business Cards & Stationery"
                description="Professional business cards, letterheads, and more — ready for print and digital use."
              />
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <ServiceCard
                icon={Asterisk}
                title="Design Refresh & Updates"
                description="Already have designs? We modernize and update your visuals to keep your brand fresh."
              />
            </FadeInSection>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <WhyChooseUsSection
        mainTitle="Why Brands Trust"
        titleName="AA Marketing"
        titleFor="Graphic Design"
        benefits={[
          {
            icon: <CheckCircle size={20} />,
            title: "Creative & Strategic",
            description:
              "We blend creativity with business strategy for designs that look great and get results.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "All-in-One Design Partner",
            description:
              "From logos to social posts to ads, we handle every visual your brand needs.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Fast Turnaround",
            description:
              "Get your designs quickly — without sacrificing quality or originality.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Always On-Brand",
            description:
              "We make sure every design matches your brand's voice, colors, and goals.",
          },
        ]}
        featuresRight={[
          "Custom Logos",
          "Social Media Graphics",
          "Ad Creatives",
          "Branding Kits",
        ]}
        featuresLeft={[
          "Business Cards",
          "Stationery",
          "Design Refresh",
          "Print & Digital Ready",
        ]}
        ctaCard={{
          title: "Ready to Elevate Your Brand?",
          description:
            "Let’s create graphics that get you noticed — and remembered. Book a free design consultation today.",
          buttonText: "Start Your Graphic Design Project",
          buttonLink: "/contact",
        }}
      />
      {/* FAQ Section */}
      <FaqSection
        title="Graphic Design"
        headingHighlight="FAQs"
        faqs={[
          {
            question: "What types of graphic design do you offer?",
            answer: (
              <>
                We design logos, social media posts, ad creatives, business cards, banners, and more. If you need it designed, we can help!
              </>
            ),
          },
          {
            question: "Can you work with my existing brand guidelines?",
            answer: (
              <>
                Absolutely! We’ll design everything to match your current brand style, or help you create new guidelines if needed.
              </>
            ),
          },
          {
            question: "How fast can I get my designs?",
            answer: (
              <>
                Most projects are delivered within 5-7 business days, depending on complexity and feedback.
              </>
            ),
          },
          {
            question: "Do you provide print-ready files?",
            answer: (
              <>
                Yes! You’ll get all the formats you need for web, print, and social media — including vector files.
              </>
            ),
          },
          {
            question: "Can you update or refresh my old designs?",
            answer: (
              <>
                Of course! We can modernize your existing graphics or adapt them for new platforms and campaigns.
              </>
            ),
          },
        ]}
      />
      {/* CTA Section */}
      <CtaSection
        title="Let’s Make Your Brand Unmissable"
        paragraph="If your visuals aren’t getting attention, it’s time for a design upgrade. Reach out for creative graphics that drive results."
        buttonText="GET GRAPHIC DESIGN HELP"
        buttonLink="/contact"
      />
    </div>
  );
}
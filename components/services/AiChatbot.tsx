import type React from "react";
import {
  Bot,
  Cpu,
  MessageSquare,
  Settings,
  CheckCircle,
  Cloud,
  MonitorSmartphone,
} from "lucide-react";
import CtaSection from "../CtaSection";
import ServiceCard from "../ui/ServiceCard2";
import WhyChooseUsSection from "../WhyChooseUs";
import FadeInSection from "../FadeInSection";
import FaqSection from "../Faq";
import ServiceHeroSection from "../ServiceHero";
// import Projects from "../Projects";

export default function AIChatbotsService() {
  return (
    <div className="bg-[#212428] text-white">
      {/* Hero Section */}
      <ServiceHeroSection
        subheading="AI CHATBOTS & INTELLIGENT AGENTS"
        heading="Automate Smarter with"
        headingHighlight="AA Marketing"
        heading2="Chatbots & AI Agents That Actually Work"
        paragraph="We design and build AI chatbots and agents that help your business respond faster, automate tasks, and deliver 24/7 support — all without losing the human touch."
        buttonText="GET STARTED WITH AI AGENTS"
        buttonLink="/contact"
      />

      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="px-4">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
              Let AI Do the Work — <span className="text-accent">Smarter</span>, Not Harder
            </h2>
            <p className="text-gray-400 mb-16 max-w-3xl text-lg font-poppins">
              At AA Marketing, we don&apos;t just plug in a bot. We build intelligent systems that understand, reply, and solve problems — whether you need customer support, lead capture, appointment booking, or internal automation.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-10 font-montserrat">
              Our AI Chatbot & Agent Solutions Include:
            </h3>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.3}>
              <ServiceCard
                icon={Bot}
                title="Custom AI Chatbots"
                description="Conversational bots tailored to your brand&apos;s tone — available on websites, WhatsApp, Facebook Messenger, and more."
              />
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <ServiceCard
                icon={MessageSquare}
                title="24/7 Support Agents"
                description="Automated agents that handle FAQs, bookings, inquiries, and escalations — anytime, anywhere."
              />
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <ServiceCard
                icon={Cpu}
                title="AI-Powered Workflows"
                description="Automate repetitive tasks, lead qualification, and data collection using smart, no-code/low-code agents."
              />
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <ServiceCard
                icon={Settings}
                title="Multilingual Capabilities"
                description="Reach more people with chatbots that support multiple languages — with real-time translation."
              />
            </FadeInSection>

            <FadeInSection delay={0.7}>
              <ServiceCard
                icon={MonitorSmartphone}
                title="Cross-Platform Integration"
                description="Deploy bots across your website, mobile apps, CRMs, or e-commerce systems. Fully synced and consistent."
              />
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <ServiceCard
                icon={Cloud}
                title="Cloud-Based Dashboards"
                description="Track performance, analyze user behavior, and manage your agents — all from a clean, simple interface."
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section className="max-w-7xl mx-auto py-20 px-4">
        <FadeInSection>
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-10 font-montserrat">
            Real <span className="text-accent">AI in Action</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg font-poppins">
            Take a look at some of the AI systems we've designed — chatbots, booking bots, and automated agents that save time and scale support.
          </p>

          <Projects service="AI Chatbots" />
        </FadeInSection>
      </section> */}

      {/* Why Choose Us Section */}
      <WhyChooseUsSection
        mainTitle="Why Teams Trust"
        titleName="AA Marketing"
        titleFor="AI Agent Development"
        benefits={[
          {
            icon: <CheckCircle size={20} />,
            title: "Built With Business Logic",
            description: "Our agents don't just chat — they follow flows that match your processes and save real time.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "No-Code Friendly",
            description: "Easy to update, customize, and expand. You don’t need a dev team to make changes.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Cross-Platform Ready",
            description: "WhatsApp, website, apps, or CRM — we make it all work together.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Support You Can Count On",
            description: "From launch to scale — we’re here to guide, update, and optimize.",
          },
        ]}
        featuresRight={[
          "Smart Responses",
          "Human Handoff",
          "Lead Capture",
          "Custom Flows",
        ]}
        featuresLeft={[
          "Multilingual Support",
          "Live Chat + Bot Handoff",
          "CRM Integrations",
          "Analytics Dashboard",
        ]}
        ctaCard={{
          title: "Want to Save Time With AI?",
          description:
            "Let’s build you a chatbot or AI assistant that fits your business perfectly — fast, friendly, and functional.",
          buttonText: "BOOK A FREE AI DEMO",
          buttonLink: "/contact",
        }}
      />

      {/* FAQ Section */}
      <FaqSection
        title="AI Agents & Chatbots"
        headingHighlight="FAQs"
        faqs={[
          {
            question: "Can your chatbots integrate with our CRM or website?",
            answer: <>Yes — our bots can connect with your website, CRMs, WhatsApp, Facebook Messenger, and more.</>,
          },
          {
            question: "Do I need to know how to code?",
            answer: <>Nope. We handle the setup, and our no-code dashboards make it easy for you to make updates later.</>,
          },
          {
            question: "How long does it take to build a chatbot or agent?",
            answer: <>Simple bots take 5-10 days. More advanced agents may take 2-4 weeks depending on flows and complexity.</>,
          },
          {
            question: "Can it reply in multiple languages?",
            answer: <>Yes. We support multilingual chatbots that can auto-translate based on the user&apos;s input language.</>,
          },
          {
            question: "Is this built with GPT or other AI models?",
            answer: <>Yes — we use OpenAI, Claude, and other LLMs depending on the use case. Each bot is tailored for your needs.</>,
          },
        ]}
      />

      {/* CTA Section */}
      <CtaSection
        title="Let&apos;s Automate the Right Way"
        paragraph="Your business doesn&apos;t sleep. Neither should your support. Launch a smart, branded AI chatbot with AA Marketing today."
        buttonText="GET STARTED WITH AI AGENTS"
        buttonLink="/contact"
      />
    </div>
  );
}

import type React from "react";
import {
  Bot,
  MessageSquare,
  Cpu,
  Settings,
  MonitorSmartphone,
  CheckCircle,
  Cloud,
} from "lucide-react";
import CtaSection from "../CtaSection";
import ServiceCard from "../ui/ServiceCard2";
import WhyChooseUsSection from "../WhyChooseUs";
import FadeInSection from "../FadeInSection";
import FaqSection from "../Faq";
import ServiceHeroSection from "../ServiceHero";
// import Projects from "../Projects";

export default function AIAgentsService() {
  return (
    <div className="bg-background text-text">
      {/* Hero Section */}
      <ServiceHeroSection
        subheading="AI CHATBOTS & INTELLIGENT AGENTS"
        heading="Automate Smarter with"
        headingHighlight="AA Marketing"
        heading2="Fast Replies. Smarter Conversations."
        paragraph="We build AI-powered chatbots and agents that help your business respond faster, qualify leads, support users, and save time — without sounding robotic."
        buttonText="GET STARTED WITH AI CHATBOTS"
        buttonLink="/contact"
      />

      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="px-4">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-text">
              Automate the Chat. Keep the Human Feel.{" "}
              <span className="text-primary">AI-Powered Bots</span> That Work
            </h2>
            <p className="text-text/80 mb-16 max-w-3xl text-lg font-poppins">
              Our AI agents aren&apos;t just widgets on your website. They&apos;re trained, task-ready,
              and built to match your brand tone — whether you need help with lead capture,
              support, appointment scheduling, or FAQs.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-10 font-montserrat">
              Our AI Chatbot Services Include:
            </h3>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.3}>
              <ServiceCard
                icon={Bot}
                title="Custom AI Chatbots"
                description="Conversational bots built for your website, WhatsApp, or social platforms — trained to talk your way."
              />
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <ServiceCard
                icon={MessageSquare}
                title="24/7 Support Agents"
                description="Handle common queries, route requests, and collect feedback around the clock without extra staffing."
              />
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <ServiceCard
                icon={Cpu}
                title="Lead Qualification Bots"
                description="Collect lead info, filter by criteria, and send qualified data to your CRM — automatically."
              />
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <ServiceCard
                icon={Settings}
                title="Multilingual Support"
                description="Support global customers with bots that reply in multiple languages and auto-translate messages."
              />
            </FadeInSection>

            <FadeInSection delay={0.7}>
              <ServiceCard
                icon={MonitorSmartphone}
                title="Cross-Platform Integration"
                description="Integrate with your site, CRM, WhatsApp, Messenger, or booking systems for a seamless experience."
              />
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <ServiceCard
                icon={Cloud}
                title="No-Code Dashboards"
                description="Manage flows, update responses, and monitor performance — no dev team required."
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection
        mainTitle="Why Businesses Choose"
        titleName="AA Marketing"
        titleFor="AI Agent Development"
        benefits={[
          {
            icon: <CheckCircle size={20} />,
            title: "Fully Trained, Brand-Aligned Bots",
            description:
              "Every agent is customized to your tone, goals, and workflows — not just generic scripts.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Real Automation, Real Time Saved",
            description:
              "We build bots that replace manual tasks, qualify leads, and answer instantly — even at 2AM.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "No Tech Headache",
            description:
              "We handle setup, logic, integrations, and hand everything over with a no-code backend.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Cross-Platform Compatible",
            description:
              "Website, WhatsApp, Messenger, or CRMs — we’ll help you connect them all.",
          },
        ]}
        featuresRight={[
          "Lead Gen Bots",
          "FAQ Automation",
          "CRM Integrations",
          "Live Chat Handoff",
        ]}
        featuresLeft={[
          "No-Code Dashboard",
          "Flow Builders",
          "WhatsApp Chatbots",
          "Multi-Language Support",
        ]}
        ctaCard={{
          title: "Want Smarter Conversations?",
          description:
            "Let’s build an AI chatbot that talks like your brand and gets things done — fast, friendly, and fully integrated.",
          buttonText: "BOOK A FREE AI CHATBOT DEMO",
          buttonLink: "/contact",
        }}
      />

      {/* FAQ Section */}
      <FaqSection
        title="AI Chatbots & Agents"
        headingHighlight="FAQs"
        faqs={[
          {
            question: "How is an AI chatbot different from a regular one?",
            answer: (
              <>
                AI chatbots use language models to understand context, generate natural replies,
                and handle more flexible conversations — instead of fixed menus or scripts.
              </>
            ),
          },
          {
            question: "Can you connect the chatbot with my CRM or booking tool?",
            answer: (
              <>
                Absolutely. We can connect your bot with platforms like HubSpot, Zoho, Calendly,
                and others to sync data and automate workflows.
              </>
            ),
          },
          {
            question: "Do I need to know how to code?",
            answer: (
              <>
                Nope. You&apos;ll get a no-code dashboard to tweak responses, view data, and control the flow anytime.
              </>
            ),
          },
          {
            question: "How long does it take to build?",
            answer: (
              <>
                Simple bots take 5-7 days. More complex AI agents with integrations or workflows can take 2-3 weeks.
              </>
            ),
          },
          {
            question: "Will it sound like a human or like a robot?",
            answer: (
              <>
                Human. We fine-tune tone, add logic, and adjust responses so it feels helpful — not stiff.
              </>
            ),
          },
        ]}
      />

      {/* CTA Section */}
      <CtaSection
        title="Launch an AI Agent That Works"
        paragraph="Automate the boring stuff, impress your users, and save support hours — all with one smart assistant. Let&apos;s build it together."
        buttonText="GET STARTED WITH AI CHATBOT"
        buttonLink="/contact"
      />
    </div>
  );
}

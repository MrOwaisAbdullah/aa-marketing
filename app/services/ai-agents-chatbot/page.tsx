import React from "react";
import { Metadata } from "next";
import AIChatbotsService from "@/components/services/AiChatbot";

export const metadata: Metadata = {
  title: "AI Chatbot & Agent Services | Automate & Scale Faster",
  description:
    "Deploy smart AI agents and chatbots that engage customers 24/7. AA Marketing builds custom AI solutions for your business. Book a demo today!",
  openGraph: {
    title: "AI Chatbot & Agent Services | Automate & Scale Faster",
    description:
      "Deploy smart AI agents and chatbots that engage customers 24/7. AA Marketing builds custom AI solutions for your business. Book a demo today!",
    url: "https://aamarktng.com/services/ai-agents-chatbot",
    images: [
      {
        url: "https://aamarktng.com/assets/services/ai-chatbot.jpg",
        width: 1200,
        height: 630,
        alt: "AI Chatbots & Intelligent Agents - AA Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbot & Agent Services | Automate & Scale Faster",
    description:
      "Deploy smart AI agents and chatbots that engage customers 24/7. AA Marketing builds custom AI solutions for your business. Book a demo today!",
    images: ["https://aamarktng.com/assets/services/ai-chatbot.jpg"],
  },
  alternates: {
    canonical: "/services/ai-agents-chatbot",
  },
};

export const dynamic = "force-static";

const AIChatbot = () => {
  return <AIChatbotsService />;
};

export default AIChatbot;

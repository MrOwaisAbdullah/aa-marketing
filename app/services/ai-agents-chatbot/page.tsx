import React from "react";
import { Metadata } from "next";
import AIChatbotsService from "@/components/services/AiChatbot";

export const metadata: Metadata = {
  title: "AI Chatbots & Intelligent Agents | AA Marketing",
  description:
    "Automate smarter with AI chatbots and intelligent agents from AA Marketing. 24/7 support, task automation, and seamless customer experiences.",
  openGraph: {
    title: "AI Chatbots & Intelligent Agents | AA Marketing",
    description:
      "Automate smarter with AI chatbots and intelligent agents from AA Marketing. 24/7 support, task automation, and seamless customer experiences.",
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
    title: "AI Chatbots & Intelligent Agents | AA Marketing",
    description:
      "Automate smarter with AI chatbots and intelligent agents from AA Marketing. 24/7 support, task automation, and seamless customer experiences.",
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

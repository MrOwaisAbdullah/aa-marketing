import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import Script from "next/script";
import { Montserrat, Poppins } from "next/font/google";
import { ServiceWorkerProvider } from "@/components/ServiceWorkerProvider";
import { ThemeProvider } from "@/context/ThemeContext";
import { generateThemeCSS } from "@/lib/theme";
import type { Metadata } from "next";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aamarktng.com"),
  title: "AA Marketing - Digital Marketing Agency",
  description:
    "AA Marketing is a full-service digital agency committed to helping mid-sized businesses enhance their online presence and achieve their marketing goals.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AA Marketing",
  url: "https://aamarktng.com",
  logo: "https://aamarktng.com/assets/logo.png",
  description:
    "AA Marketing is a full-service digital agency committed to helping mid-sized businesses enhance their online presence and achieve their marketing goals.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://facebook.com/aamarktng",
    "https://twitter.com/aamarktng",
    "https://linkedin.com/company/aamarktng",
  ],
};

// Dynamically import components that are not immediately needed
const Analytics = dynamic(() =>
  import("@vercel/analytics/react").then((mod) => mod.Analytics)
);
const WhatsAppButton = dynamic(() => import("@/components/ui/WhatsappButton"));
const FloatingNavbar = dynamic(() => import("@/components/FloatingNavbar"));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="google-site-verification"
          content="e-FTBsUIGp8fWOhMM2-EAXuIP5uyaE-_FojdOIEdFzQ"
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
        <style>{generateThemeCSS()}</style>
      </head>
      <body>
        <ThemeProvider>
          <ServiceWorkerProvider />
          <FloatingNavbar />
          <Header />
          {children}
          <Footer />
          <Analytics />
          <WhatsAppButton
            phoneNumber="+923352867361"
            message="Hello, I'm interested in your services!"
            tooltipMessages={[
              "Hi, Need Our Help?",
              "Contact us now!",
              "Need a quote?",
              "Get help instantly",
            ]}
            initialDelay={5000}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}

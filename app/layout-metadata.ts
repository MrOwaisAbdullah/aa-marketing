import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

// Add theme color configuration
export const themeColor = [
  { media: "(prefers-color-scheme: light)", color: "#3a69ff" },
  { media: "(prefers-color-scheme: dark)", color: "#3a69ff" },
];

export const metadata: Metadata = {
  title: {
    default: "AA Marketing | Thinking, Making, Result",
    template: "%s | AA Marketing",
  },
  description:
    "AA Marketing is a full-service digital agency committed to helping mid-sized businesses enhance their online presence and achieve their marketing goals.",
  applicationName: "AA Marketing",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "AA Marketing",
    startupImage: [
      {
        url: "/assets/logo-512.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/assets/logo-512.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/assets/logo-512.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)",
      },
    ],
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/assets/logo-192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/logo-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/assets/logo-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  keywords: [
    "digital agency",
    "web development",
    "digital marketing",
    "UI/UX design",
    "app development",
    "SEO",
    "CGI Ads",
    "social media marketing",
    "content marketing",
    "branding",
    "mid-sized businesses",
    "online presence",
    "marketing goals",
    "AA Marketing",
    "AA Marketing Agency",
    "AA Marketing Digital Agency",
    "AA Marketing Web Development",
  ],
  authors: [{ name: "AA Marketing" }],
  creator: "AA Marketing",
  publisher: "AA Marketing",
  metadataBase: new URL("https://aamarktng.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AA Marketing | Thinking, Making, Result",
    description:
      "AA Marketing is a full-service digital agency committed to helping mid-sized businesses enhance their online presence and achieve their marketing goals.",
    url: "https://aamarktng.com",
    siteName: "AA Marketing",
    images: [
      {
        url: "/assets/logo-512.png",
        width: 1200,
        height: 630,
        alt: "AA Marketing",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AA Marketing | Thinking, Making, Result",
    description:
      "AA Marketing is a full-service digital agency committed to helping mid-sized businesses enhance their online presence and achieve their marketing goals.",
    images: ["/assets/logo-512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "MSjc1GuXl0WP82f_EU5cUst2ijOtX6KR8FuXu9ljD3o",
  },
};

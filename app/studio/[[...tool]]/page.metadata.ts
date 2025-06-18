// Shared metadata for the studio page
export const metadata = {
  title: "AA Marketing Studio",
  description: "Admin dashboard for content management",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/studio",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const revalidate = 30;

export const dynamic = 'force-dynamic'
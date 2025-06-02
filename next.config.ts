import type { NextConfig } from "next";
import path from "path";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "aamarktng.com",
        pathname: "**",
      },
    ],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizeCss: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Optimize webpack configuration
    config.optimization = {
      ...config.optimization,
      minimize: true,
      splitChunks: {
        chunks: "all",
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "all",
            priority: 10,
            enforce: true,
          },
          components: {
            test: /[\\/]components[\\/]/,
            name: "components",
            chunks: "all",
            priority: 8,
          },
          common: {
            name: "common",
            minChunks: 2,
            chunks: "async",
            priority: 5,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      },
    };

    // Add memory optimization for production builds
    if (!dev && !isServer) {
      config.cache = {
        type: "filesystem",
        buildDependencies: {
          config: [__filename],
        },
        cacheDirectory: path.resolve(process.cwd(), ".next/cache/webpack"),
        maxAge: 604800000, // 1 week
      };
    }

    // Configure SVG handling
    config.module = {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ],
    };

    return config;
  },
  // Include security headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

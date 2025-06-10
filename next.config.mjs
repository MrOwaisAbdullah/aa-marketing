/** @type {import('next').NextConfig} */
const nextConfig = {
  // poweredByHeader: false,
  // compress: true,
  // reactStrictMode: true,
  images: {
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
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      }
    ],
    // dangerouslyAllowSVG: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // experimental: {
  //   optimizeCss: true,
  //   optimizePackageImports: ["lucide-react"],
  // },
  // webpack: (config, { isServer }) => {
  //   // Handle Sanity Studio client-side dependencies
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       fs: false,
  //       net: false,
  //       tls: false,
  //     };
  //   }

  //   // Simple and effective chunk splitting
  //   if (!isServer) {
  //     config.optimization.splitChunks = {
  //       chunks: "all",
  //       minSize: 20000,
  //       cacheGroups: {
  //         sanity: {
  //           test: /[\\/]node_modules[\\/](@sanity|sanity)[\\/]/,
  //           name: "sanity",
  //           chunks: "all",
  //           priority: 10,
  //         },
  //         vendor: {
  //           test: /[\\/]node_modules[\\/]/,
  //           name: "vendors",
  //           chunks: "all",
  //           priority: -10,
  //         },
  //       },
      // };
    // }

    // return config;
  }
  // Essential security headers
//   headers: async () => [
//     {
//       source: "/:path*",
//       headers: [
//         {
//           key: "X-DNS-Prefetch-Control",
//           value: "on",
//         },
//         {
//           key: "Strict-Transport-Security",
//           value: "max-age=31536000; includeSubDomains",
//         },
//         {
//           key: "X-Frame-Options",
//           value: "SAMEORIGIN",
//         },
//         {
//           key: "X-Content-Type-Options",
//           value: "nosniff",
//         },
//         {
//           key: "Referrer-Policy",
//           value: "strict-origin-when-cross-origin",
//         },
//       ],
//     },
//   ],
// };

export default nextConfig;

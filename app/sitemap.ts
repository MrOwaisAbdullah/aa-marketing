import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

const baseUrl = "https://aamarktng.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Define all static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Add service pages
  const services = [
    "web-development",
    "digital-marketing",
    "ui-ux-design",
    "app-development",
    "seo",
    "influencer-marketing",
    "logo-design",
    "events-management",
    "outdoor-marketing",
  ];

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Fetch blog slugs from Sanity
  const blogSlugs: { slug: { current: string }; _updatedAt: string }[] =
    await client.fetch(
      `*[_type == "post"]{ "slug": slug.current, _updatedAt }`
    );

  const blogRoutes = blogSlugs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog._updatedAt ? new Date(blog._updatedAt) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routes, ...serviceRoutes, ...blogRoutes];
}

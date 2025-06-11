import { client } from "@/sanity/lib/client";
import React from "react";
import BlogCards from "@/components/ui/BlogCards";
import FadeInSection from "./FadeInSection";

const BlogSection = async ({ limit, excludeLatest }: BlogSectionProps) => {
  // Query to fetch posts for BlogSection
  const query = `*[_type == "post"] | order(_createdAt desc){
      title,
      slug,
      mainImage,
      summary,
      _createdAt,
      author->{name},
      categories[]->{title}
    }`;

  const blogs = await client.fetch(query);

  let displayedBlogs = limit ? blogs.slice(0, limit) : blogs;

  // Exclude the latest post if required
  if (excludeLatest) {
    displayedBlogs = displayedBlogs.slice(1);
  }
  return (
    <FadeInSection>
      <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h3 className="text-base text-primary font-semibold sm:text-lg">
            Latest News
          </h3>
          <h2 className="text-3xl text-text font-semibold sm:text-4xl">
            Our Blog Posts
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-5 sm:px-10 gap-6">
          {/* Displaying the blog cards */}
          {displayedBlogs.map((blog: PostCard, index: number) => (
            <BlogCards key={index} post={blog} />
          ))}
        </div>
      </section>
    </FadeInSection>
  );
};

export default BlogSection;

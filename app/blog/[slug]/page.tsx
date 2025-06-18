import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { CustomComponent } from "@/components/CustomComponent";
import { TableOfContents } from "@/components/ui/TableOfContents";
import RelatedPosts from "@/components/ui/RelatedPosts";
import { Metadata } from "next";

export async function generateStaticParams() {
  const query = `*[_type == "post"]{
    "slug":slug.current
  }`;

  const slugs = await client.fetch(query);
  const slugRoutes: string[] = slugs.map((slug: { slug: string }) => slug.slug);
  return slugRoutes.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;

  const query = `*[_type == "post" && slug.current == "${slug}"]{
    title,
    summary,
    mainImage
  }[0]`;

  const blog = await client.fetch(query);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: blog.title,
    description: blog.summary,
    openGraph: {
      title: `${blog.title} | AA Marketing`,
      description: blog.summary,
      url: `https://aamarktng.com/blog/${slug}`,
      images: [
        {
          url: urlFor(blog.mainImage).url() as string,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | AA Marketing`,
      description: blog.summary,
      images: [urlFor(blog.mainImage).url() as string],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const query = `*[_type == "post" && slug.current == "${slug}"]{
    title,
    mainImage,
    summary,
    content,
    _createdAt,
    author->{name},
    categories[]->{title}
  }[0]`;

  const blog: PostCard = await client.fetch(query);

  return (
    <article className="flex flex-col min-h-screen mb-20 ">
      <div className="relative border-b-4 border-border ">
        <Image
          className="flex h-[400px] 2xl:h-[700px] w-screen object-cover items-center justify-center"
          src={urlFor(blog.mainImage).url() as string}
          alt={blog.title}
          width={1000}
          height={800}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 from-15% via-black/50 to-transparent">
          <h1
            className={`absolute bottom-10 left-0 right-0 mx-auto w-fit text-3xl lg:text-5xl 2xl:text-6xl font-bold text-center text-white`}
          >
            {blog.title}
          </h1>
        </div>
      </div>
      {/* Blog Section */}{" "}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Blog Sidebar */}
        <div className="flex flex-col lg:w-1/4 py-8 lg:py-14  ">
          <div className="w-full px-5">
            <TableOfContents content={blog.content} />
          </div>

          {/* Displaying the categories, title, summary, and date */}
          <div className="flex flex-col gap-2 py-8 px-3">
            <div className="flex flex-wrap gap-2 mb-3 items-center justify-center">
              {!blog.categories || blog.categories.length === 0 ? (
                <span className="bg-gray-500/70 text-white text-xs px-2 py-1 rounded-full">
                  Uncategorized
                </span>
              ) : (
                blog.categories.map(
                  (
                    category: { title: string },
                    i: React.Key | null | undefined
                  ) => (
                    <span
                      key={i}
                      className="bg-[#db4a4a]/70 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {category.title}
                    </span>
                  )
                )
              )}
            </div>

            <div className="mt-10 grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 lg:gap-y-5 gap-x-10 mx-auto pl-4 justify-between">
              <div className="flex flex-col border-border">
                <h2 className="text-sm xl:text-md mb-1">Published Date</h2>
                <p className="text-sm xl:text-md font-medium text-heading">
                  {new Date(blog._createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </p>
              </div>
              <div className="flex flex-col">
                <h2 className="text-sm xl:text-md mb-1">Author</h2>
                <p className="text-sm xl:text-md font-medium text-heading">
                  {blog.author.name}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="flex flex-col py-8 md:py-14 border-t-4 lg:border-t-0 border-border pb-14 lg:w-[75%]">
          <div className="border-b-4 border-border px-5 md:px-14 pb-14 md:mr-5">
          <h2 className="xl:text-lg 2xl:text-xl text-heading mb-3 font-semibold px-4">
            Summary
          </h2>
          <p className="max-w-3xl mr-auto text-sm xl:text-base 2xl:text-lg px-4">
            {blog.summary}
          </p>
          </div>
          <section className="max-w-3xl mr-auto text-sm xl:text-base 2xl:text-lg px-5 py-10 md:pl-16">
            <PortableText value={blog.content} components={CustomComponent} />
          </section>
        </div>
      </div>
      {/* Related Posts Section */}
      <div className="maax-w-7xl mx-auto mt-14">
        {/* Map through related posts and render them */}
        <RelatedPosts currentSlug={slug} limit={3} />
      </div>
    </article>
  );
}

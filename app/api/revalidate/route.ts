import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";
import { parseBody } from "next-sanity/webhook";

const WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<any>(
      req,
      WEBHOOK_SECRET
    );

    if (!isValidSignature) {
      return new Response(JSON.stringify({ message: "Invalid signature" }), {
        status: 401,
      });
    }

    const { _type, slug, operation } = body;

    if (!_type) {
      return NextResponse.json(
        { error: "Bad Request", message: "Missing _type" },
        { status: 400 }
      );
    }

    // Map each Sanity document type to cache tags and paths to revalidate
    const revalidationConfig: Record<string, { tags: string[]; paths: string[] }> = {
      post:     { tags: ["posts"],      paths: ["/blog", "/"] },
      author:   { tags: ["authors"],    paths: ["/blog"] },
      category: { tags: ["categories"], paths: ["/blog"] },
    };

    const config = revalidationConfig[_type];

    if (!config) {
      return NextResponse.json({
        revalidated: false,
        message: `No revalidation configured for type: ${_type}`,
      });
    }

    // Revalidate cache tags
    for (const tag of config.tags) {
      revalidateTag(tag);
      console.log(`✅ Revalidated tag: ${tag}`);
    }

    // Revalidate the specific slug path (e.g. /blog/my-post)
    if (slug && _type === "post") {
      revalidatePath(`/blog/${slug}`);
      console.log(`✅ Revalidated path: /blog/${slug}`);
    }

    // Revalidate listing pages
    for (const path of config.paths) {
      revalidatePath(path);
      console.log(`✅ Revalidated path: ${path}`);
    }

    console.log(`✅ Webhook: Revalidated ${_type} (${operation || "unknown"})`);

    return NextResponse.json({
      revalidated: true,
      type: _type,
      slug,
      operation,
      tags: config.tags,
    });
  } catch (error) {
    console.error("❌ Webhook error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: String(error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    webhook: "/api/revalidate",
    status: WEBHOOK_SECRET ? "configured" : "missing-secret",
    environment: process.env.NODE_ENV,
  });
}

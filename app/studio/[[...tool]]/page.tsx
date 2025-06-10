/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 */

"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import config from "../../../sanity.config";
import "./page.metadata";

const NextStudioComponent = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  { ssr: false }
);

export default function StudioPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NextStudioComponent config={config} />
    </Suspense>
  );
}

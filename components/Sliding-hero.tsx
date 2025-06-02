"use client"

import HeroSlides from "./ui/hero-slides"
import HeroContent from "./ui/hero-content"
import { Suspense } from "react"

export default function SlidingHero() {
  return (
    <div className="relative -top-[90px] min-h-screen pb-20 w-full overflow-hidden bg-gradient-to-br from-primary via-accent to-indigo-900">
      {/* Hero Content - Prioritized */}
      <div className="relative sm:w-1/2 z-10">
        <HeroContent />
      </div>

      {/* Background Slides - Deferred */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-primary via-accent to-indigo-900" />}>
          <HeroSlides />
        </Suspense>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 w-full bg-gradient-to-l from-transparent via-accent opacity-90 to-purple-900 pointer-events-none"></div>
      <div className="absolute top-[90px] left-0 right-0 w-full h-20 bg-gradient-to-b from-accent opacity-25 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-20 bg-gradient-to-t from-accent opacity-25 to-transparent pointer-events-none"></div>
    </div>
  )
}

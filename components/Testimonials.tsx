"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Brian Whitney",
    title: "CEO at TRAY",
    company: "TRAY",
    quote:
      "The Digital Silk team was the clear winner of our selection process and they've been an absolute dream to work with throughout the entire process.",
    rating: 5,
    companyLogo: "TRAY",
  },
  {
    id: 2,
    name: "Connie Wong",
    title: "Director of Marketing",
    company: "GrowPath",
    quote:
      "Working with Digital Silk has transformed our digital presence. Their expertise in web development and marketing strategy exceeded our expectations.",
    rating: 5,
    companyLogo: "GrowPath",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "Marketing Manager",
    company: "TechFlow",
    quote:
      "Outstanding results! The team delivered a beautiful website that not only looks great but also drives conversions. Highly recommend their services.",
    rating: 5,
    companyLogo: "TechFlow",
  },
  {
    id: 4,
    name: "Michael Chen",
    title: "Founder & CEO",
    company: "InnovateLab",
    quote:
      "Digital Silk's creative approach and technical expertise helped us launch our brand successfully. The ROI has been incredible.",
    rating: 5,
    companyLogo: "InnovateLab",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-8 md:py-12 lg:py-20 bg-gradient-to-tr from-[#dc5b5b] via-[#6a59ee] to-indigo-900relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-14">
          <h3 className="text-sm text-primary font-semibold sm:text-lg">
            What Our Clients Say
          </h3>
          <h2 className="text-3xl text-white font-semibold sm:text-5xl">
            Testimonials
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout - Single Row with Arrows in Middle */}
          <div className="hidden lg:grid lg:grid-cols-8 lg:gap-6 lg:items-center">
            {/* Left Section - Client Info */}
            <div className="lg:col-span-3">
              <div className="overflow-hidden h-80">
                <div
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateY(-${currentIndex * 320}px)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className="h-80 flex flex-col justify-center"
                    >
                      <div className="mb-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">
                              {testimonial.companyLogo.slice(0, 2)}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-2xl font-bold text-white mb-1 truncate">
                              {testimonial.name}
                            </h3>
                            <p className="text-white/80 text-lg leading-tight">
                              {testimonial.title}
                            </p>
                            <p className="text-black/50 font-medium">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                          <span className="text-gray-300 ml-2">
                            {testimonial.rating}.0
                          </span>
                        </div>

                        {/* <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                          <span className="font-semibold">28 REVIEWS</span>
                          <span>ON DESIGNRUSH</span>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-400">4.9</span>
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-3 h-3 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle Section - Navigation Arrows (1 column) */}
            <div className="lg:col-span-1 flex flex-col items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-slate-600/50 hover:bg-slate-700/80 transition-colors"
              >
                <ChevronUp className="w-6 h-6 text-primary hover:accent" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-slate-600/50 hover:bg-slate-700/80 transition-colors"
              >
                <ChevronDown className="w-6 h-6 text-primary hover:accent" />
              </button>
            </div>

            {/* Right Section - Testimonial Text (4 columns) */}
            <div className="lg:col-span-4">
              <div className="overflow-hidden h-80">
                <div
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateY(-${currentIndex * 320}px)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className="h-80 flex flex-col justify-center"
                    >
                      <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-600/50 shadow-2xl">
                        <CardContent className="p-8">
                          <blockquote className="text-gray-200 text-xl leading-relaxed italic mb-6">
                            "{testimonial.quote}"
                          </blockquote>

                          <div className="flex items-center justify-between">
                            <button className="text-primary hover:text-accent transition-colors font-medium flex items-center gap-2">
                              - {testimonial.name}
                            </button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Layout */}
          <div className="lg:hidden space-y-6">
            {/* Client Info Section */}
            <div className="flex justify-center items-center flex-col px-2">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg">
                    {currentTestimonial.companyLogo.slice(0, 2)}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 leading-tight">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base md:text-lg leading-tight mb-1">
                    {currentTestimonial.title}
                  </p>
                  <p className="text-black/50 font-medium text-sm sm:text-base">
                    {currentTestimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-gray-300 ml-2 text-sm sm:text-base">
                  {currentTestimonial.rating}.0
                </span>
              </div>

              {/* <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-400">
                <span className="font-semibold">28 REVIEWS</span>
                <span>ON DESIGNRUSH</span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">4.9</span>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-2 h-2 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div> */}
            </div>

            {/* Testimonial Text Section */}
            <div className="px-2">
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-600/50 shadow-2xl">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <blockquote className="text-gray-200 text-sm sm:text-base md:text-xl leading-relaxed italic mb-4 md:mb-6">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <button className="text-primary hover:text-accent transition-colors font-medium flex items-center gap-2 text-xs sm:text-sm md:text-base">
                      - {currentTestimonial.name}
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Navigation Arrows - Mobile */}
            <div className="flex justify-center">
              <div className="flex gap-3 sm:gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-slate-600/50 hover:bg-slate-700/80 transition-colors"
                >
                  <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary hover:text-accent" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-slate-600/50 hover:bg-slate-700/80 transition-colors"
                >
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary hover:text-accent" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6 lg:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-accent"
                    : "bg-slate-400 hover:bg-slate-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

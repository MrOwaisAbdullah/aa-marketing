import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import projects from "@/data/projects";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
};

type ServiceType = "Web Development" | "Social Media Marketing";

const Projects = ({ service }: { service: ServiceType }) => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects[service].map((project: Project, index: number) => (
          <div
            key={index}
            className="group entrance scroll-smooth border border-primary/20 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-background"
          >
            <div className="relative aspect-[1220/686] w-full overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt="Service"
                width={500}
                height={300}
                className="h-full w-full object-cover transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1d212b] to-transparent opacity-70" />
            </div>

            <div className="p-6">
              <h1 className="text-xl font-semibold text-text mb-2">
                {project.title}
              </h1>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag: string | null | undefined, i: React.Key | null | undefined) => (
                  <span
                    key={i}
                    className="bg-[#db4a4a]/70 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-poppins mb-4 text-text/80">{project.description}</p>
              <div className="flex items-center">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-[#6a59ee] transition-all hover:text-primary"
                >
                  <span className="font-poppins mr-2 font-medium">Learn more</span>
                  <ArrowRight
                    className="h-4 w-4 transition-all duration-300 hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

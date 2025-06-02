import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const { icon: Icon, title, description, image } = service;

  return (
    <div
      className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer transform hover:-translate-y-2"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-6 items-start">
        {/* Icon and content */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="min-w-14 max-w-14 h-12 bg-gradient-to-br from-[#dc5b5b] to-[#6a59ee] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white transition-colors duration-300">
              {title}
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-48 h-full rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
          />
        </div>
      </div>

      {/* Animated border */}
      <div
        className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br to-white via-primary from-accent opacity-0 group-hover:opacity-50 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(40deg, transparent, accent, indigo, transparent)",
          backgroundSize: "200% 100%",
          animation: "border-flow 3s linear infinite",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "xor",
        }}
      ></div>
    </div>
  );
};

export default ServiceCard;

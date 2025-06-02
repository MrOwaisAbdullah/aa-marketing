import { ArrowRight } from "lucide-react";
import Link from "next/link";

export interface CtaCardProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  }
  
  function CtaCard({ title, description, buttonText, buttonLink }: CtaCardProps) {
    return (
      <div className="mt-8 pt-8 border-t border-t-border">
        <h4 className="text-xl font-bold mb-4 font-montserrat">{title}</h4>
        <p className="text-gray-400 mb-6 font-poppins">{description}</p>
        <Link href={buttonLink}>
          <button className="font-poppins flex items-center gap-2 text-white bg-gradient-to-br from-[#a54a4a] via-primary to-black/40 hover:via-[#6a59ee] hover:to-accent py-2 px-4 rounded-full md:text-md transition-all duration-300 transform shadow-lg shadow-primary/20">
            {buttonText} <ArrowRight size={16} />
          </button>
        </Link>
      </div>
    );
  }

  export default CtaCard;
import Link from "next/link";
import FadeInSection from "./FadeInSection";

interface CtaSectionProps {
  title: string;
  paragraph: string;
  buttonText: string;
  buttonLink: string;
}

export default function CtaSection({
  title,
  paragraph,
  buttonText,
  buttonLink,
}: CtaSectionProps) {
  return (    <section className="py-20 pb-24 relative overflow-hidden bg-gradient-to-b from-purple-400/70 via-accent to-transparent rounded-t-[50px] border-t border-t-border">
      {/* Grid Background Pattern */}
      <div
        className="absolute overflow-hidden inset-0 w-full h-full"
        style={{
          backgroundImage: `linear-gradient(to right, var(--primary) 1px, transparent 1px), 
                            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          opacity: 0.3,
        }}
      ></div>

      {/* Glowing Elements with brand colors */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary opacity-40 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary opacity-40 blur-[120px]"></div>

      <div className="absolute -bottom-10 left-0 w-full h-20 bg-gradient-to-t from-transparent via-accent to-transparent backdrop-blur-[200px] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <FadeInSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-montserrat text-white/90">
              {title}
            </h2>
            <p className="text-white/80 mb-10 text-lg font-poppins">
              {paragraph}
            </p>
            <Link href={buttonLink}>
              <button className="font-poppins text-white bg-gradient-to-bl from-purple-500/50 to-primary hover:from-[#6a59ee] py-3 px-8 rounded-full font-medium md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/20">
                {buttonText}
              </button>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

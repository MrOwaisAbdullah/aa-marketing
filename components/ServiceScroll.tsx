"use client";
import { useEffect, useRef } from "react";
import ServiceCard from "./ui/service-scroll-card";
import { Monitor, Smartphone, Palette, Code, Search, Target, Video, PenTool, Youtube, Bot, TrendingUp, Users } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Monitor,
    title: "Web Development & UX Optimization",
    description: "Robust and scalable websites built for growth including custom website development, e-commerce solutions, CMS integration, high-converting landing pages, custom web applications, and ongoing maintenance & security optimization.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop"
  },
    {
    id: 2,
    icon: Target,
    title: "Digital Marketing & Advertising",
    description: "Comprehensive digital marketing strategies and targeted advertising including SEO, PPC, social media ads, content marketing, email campaigns, SMS marketing, influencer collaborations, and remarketing to help you reach the right audience and grow your business.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  },

  {
    id: 3,
    icon: Palette,
    title: "Creative Design & Branding",
    description: "Innovative design solutions to define your brand's personality including custom logo design, comprehensive branding & identity, packaging design, print design, intuitive UI/UX design, and creative ad design that leaves a lasting impression.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    icon: Users,
    title: "Social Media Management",
    description: "Building your brand's presence across all major platforms with professional account setup, custom content creation & scheduling, community management, tailored social media strategy, and detailed performance tracking to engage your audience.",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    icon: Video,
    title: "CGI Videos & 3D Visualization",
    description: "Bringing products and spaces to life with high-quality 3D product rendering, architectural visualization, animated explainers, virtual tours & AR content to create immersive and engaging customer experiences.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Create stunning mobile applications that engage users and drive business growth. Our apps are built with performance and user experience at the forefront.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    icon: Palette,
    title: "UI/UX Design",
    description: "Transform your ideas into beautiful, intuitive interfaces. We focus on creating designs that not only look amazing but also provide exceptional user experiences.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    icon: Code,
    title: "Custom Development",
    description: "Tailored solutions built specifically for your business needs. Our custom development services ensure your project stands out with unique functionality and features.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop"
  },
  {
    id: 9,
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your online visibility and reach more customers. Our SEO strategies are designed to improve your search rankings and drive organic traffic to your website.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  },

  {
    id: 10,
    icon: PenTool,
    title: "Content Creation & Copywriting",
    description: "Compelling, high-quality content including SEO-optimized blog writing, full-service video production, persuasive copywriting, engaging graphic design, podcast production, and professional photography to captivate your audience.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
  },
  {
    id: 11,
    icon: Youtube,
    title: "YouTube Video Editing & Repurposing",
    description: "Transforming long-form content into high-impact videos with professional YouTube editing, short-form content creation for Reels & TikToks, motion graphics & animations, and thumbnail & title optimization for maximum engagement.",
    image: "https://images.unsplash.com/photo-1611095790444-1dfa35661cd8?w=400&h=300&fit=crop"
  },
  {
    id: 12,
    icon: Bot,
    title: "AI Chatbots & Automation",
    description: "Intelligent AI-powered solutions including custom chatbots for lead generation, automated responses, seamless integration with WhatsApp & Messenger, and AI-driven lead qualification & nurturing to enhance customer interactions.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
  },
  {
    id: 13,
    icon: TrendingUp,
    title: "Strategy & Consulting Services",
    description: "Expert advice and strategic planning including brand strategy, customized marketing strategies, comprehensive campaign management, data & analytics, competitor analysis, and customer journey mapping to maximize your digital presence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
  }
];

const ServiceScroll = () => {
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll effects on desktop (lg and above)
      if (window.innerWidth < 1024) return;
      
      if (!containerRef.current || !leftContentRef.current || !rightContentRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if the section is in view
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        // Section is active for scrolling
        const scrollProgress = Math.abs(rect.top) / (rect.height - windowHeight);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
        
        // Keep left content fixed
        leftContentRef.current.style.transform = `translateY(0)`;
        
        // Scroll right content
        const maxTranslate = -(rightContentRef.current.scrollHeight - windowHeight);
        const translateY = maxTranslate * clampedProgress;
        rightContentRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    const handleResize = () => {
      // Reset transforms on mobile
      if (window.innerWidth < 1024) {
        if (leftContentRef.current) {
          leftContentRef.current.style.transform = '';
        }
        if (rightContentRef.current) {
          rightContentRef.current.style.transform = '';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial check
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative py-16 px-10 lg:min-h-[300vh] bg-gradient-to-tl from-[#dc5b5b] via-[#6a59ee] to-indigo-900"
    >
      {/* Fixed background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col lg:flex-row">
        {/* Left Content - Only sticky on desktop */}
        <div 
          ref={leftContentRef}
          className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-12 xl:px-20 relative z-10 py-12 lg:py-0"
        >
          <div className="max-w-xl">
            <p className="text-[#dc5b5b] font-medium mb-4 tracking-wide uppercase text-md">
              Why AA Marketing?
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight">
              Discover Our
              <span className="block bg-gradient-to-r from-[#dc5b5b] to-accent bg-clip-text text-transparent">
                Expertise
              </span>
              as a Marketing Agency
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              As a full-service marketing agency, we handle all your digital needs under one roof. 
              Our custom marketing services include thorough research and planning, bespoke designs 
              and digital strategies tailored to grow your reach, drive traffic and encourage engagement.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#dc5b5b] to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold">35%</span>
              </div>
              <span className="text-gray-300">Increase in conversions</span>
            </div>
          </div>
        </div>

        {/* Right Content - Only special behavior on desktop */}
        <div className="w-full lg:w-1/2 relative lg:overflow-hidden">
          <div 
            ref={rightContentRef}
            className="space-y-8 p-6 lg:p-8"
          >
            {services.map((service, index) => (
              <div key={service.id} className="hidden lg:block">
                <ServiceCard 
                  service={service} 
                  index={index}
                />
              </div>
            ))}
            
            {/* Mobile cards - simplified version */}
            <div className="lg:hidden space-y-6">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-accent rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceScroll;

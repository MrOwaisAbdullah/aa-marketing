"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

interface ThemeLogoProps {
  width?: number;
  height?: number;
  className?: string;
  link?: boolean;
}

export default function ThemeLogo({ width = 160, height = 80, className = "", link = true }: ThemeLogoProps) {
  const { theme } = useTheme();
  
  const logo = theme === 'dark' 
    ? "/assets/logo.webp"  // Dark theme logo
    : "/assets/logo.webp";      // Light theme logo

  const LogoImage = (
    <Image
      src={logo}
      width={width}
      height={height}
      alt="AA Marketing"
      className={className}
      priority
    />
  );

  if (link) {
    return (
      <Link href="/" className="flex mb-4 lg:mb-0">
        {LogoImage}
      </Link>
    );
  }

  return LogoImage;
} 
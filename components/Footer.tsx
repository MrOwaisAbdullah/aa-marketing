"use client";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import ThemeLogo from "./ui/ThemeLogo";
import ThemeSwitcher from "./ui/ThemeSwitcher";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  return (
    <footer className="font-poppins mx-auto bg-gradient-to-tl from-[#dc5b5b]/30 via-[#6a59ee] to-indigo-900/80 text-white relative z-0 pt-7">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Contact & Company Info */}
          <div className="lg:ml-[20%] space-y-6">
            <div>
              <ThemeLogo className="w-64 md:w-40" />
              <div className="mt-2 h-1 w-12 bg-[#dc5b5b]"></div>
            </div>

            <p className="text-white/80">
              We create digital experiences that transform businesses and drive
              growth through innovative solutions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-[#dc5b5b]" />
                <div className="text-white">
                  <div>Asia Center, 2nd Floor, Office 202</div>
                  <div>Block 13-A, Gulshan-e-Iqbal</div>
                  <div>Karachi, 74600, Pakistan</div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-[#dc5b5b]" />
                <div className="text-white">
                  <div>AlSUAIDI Building, Office 205</div>
                  <div>Al Murar, Deira</div>
                  <div>Dubai, UAE</div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-[#dc5b5b]" />
                <Link href={"tel:+923352867361"}>
                  <span className="text-white">+92 335 286 7361</span>
                </Link>
              </div>

              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-[#dc5b5b]" />
                <span className="text-white">contact@aamarktng.com</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="rounded-full p-2 text-white/80 transition-colors hover:bg-[#dc5b5b] hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full p-2 text-white/80 transition-colors hover:bg-[#dc5b5b] hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full p-2 text-white/80 transition-colors hover:bg-[#dc5b5b] hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full p-2 text-white/80 transition-colors hover:bg-[#dc5b5b] hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="max-w-sm space-y-6 md:mx-auto">
            <div>
              <h3 className="text-xl font-semibold">Our Services</h3>
              <div className="mt-2 h-1 w-12 bg-[#dc5b5b]"></div>
            </div>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/graphic-designing"
                  className="inline-block text-text/80 transition-colors hover:text-[#dc5b5b]"
                >
                  Graphic Designing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="inline-block text-text/80 transition-colors hover:text-[#dc5b5b]"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="inline-block text-text/80 transition-colors hover:text-[#dc5b5b]"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cgi-videos-ads"
                  className="inline-block text-text/80 transition-colors hover:text-[#dc5b5b]"
                >
                  CGI Videos & Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media-marketing"
                  className="inline-block text-text/80 transition-colors hover:text-[#dc5b5b]"
                >
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-agents-chatbot"
                  className="inline-block text-text/80 transition-colors hover:text-[#dc5b5b]"
                >
                  AI Chatbots & Agents
                </Link>
              </li>

              <li>
                <Link
                  href="/services/seo"
                  className="inline-block text-text/80 transition-colors hover:text-[#dc5b5b]"
                >
                  Search Engine Optimization
                </Link>
              </li>

            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Useful Links</h3>
              <div className="mt-2 h-1 w-12 bg-[#dc5b5b]"></div>
            </div>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="inline-block text-text/80 transition-colors hover:text-[#dc5b5b]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="inline-block text-text/80 transition-colors hover:text-[#dc5b5b]"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block text-text/80 transition-colors hover:text-[#dc5b5b]"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="inline-block text-text/80 transition-colors hover:text-[#dc5b5b]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="inline-block text-text/80 transition-colors hover:text-[#dc5b5b]"
                >
                  {" "}
                  Our Services
                </Link>
              </li>
            </ul>

            <div className="flex items-center space-x-3 pt-4">
              <ThemeSwitcher />
              <span className="text-sm text-white/80">
                Toggle {useTheme().theme === "light" ? "Dark" : "Light"} Mode
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 -mb-12 border-t border-white/20 pt-6 text-center text-text/60">
          <p>© {new Date().getFullYear()} AA Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

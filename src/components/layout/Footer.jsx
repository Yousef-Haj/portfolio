import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Heart,
} from "lucide-react";

import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from "../../utils/constans";
import Fadein from "../animations/Fadein";
import { scrollToSection } from "../../hooks/useScrollSpy";

const Footer = () => {
  const SocialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  };

  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/10">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* 🔹 LEFT */}
          <Fadein delay={0}>
            <div>
              <h3 className="text-3xl font-bold bg-linear-to-r from-primary/80 via-primary to-primary/80 bg-clip-text text-transparent mb-4">
                {PERSONAL_INFO.name}
              </h3>

              <p className="text-white/60 text-sm mb-5 leading-relaxed">
                Crafting seamless digital experiences with modern web technologies
              </p>

            
            </div>
          </Fadein>

          {/* 🔹 MIDDLE */}
          <Fadein delay={100}>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">
                Quick Links
              </h4>

              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="group flex items-center gap-2 text-white/60 hover:text-primary transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-primary group-hover:w-2 transition-all duration-300"></div>
                      <span className="text-sm">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Fadein>

          {/* 🔹 RIGHT */}
          <Fadein delay={200}>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">
                Connect with me
              </h4>

              <p className="text-sm text-white/60 mb-6 leading-relaxed">
                Let’s connect and create something amazing 🚀
              </p>

              <div className="flex flex-wrap gap-3">
                {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                  const Icon = SocialIcons[platform];

                  return Icon ? (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`connect on ${platform}`}
                      className="group relative p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-white/60 group-hover:text-primary transition-colors" />

                      {/* Glow */}
                      <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/30 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300 pointer-events-none"></div>
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </Fadein>

        </div>

        {/*  BOTTOM */}
        <Fadein delay={300}>
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

              <p className="text-white/50 text-sm">
                © {new Date().getFullYear()} {PERSONAL_INFO.name}
              </p>

              <p className="flex items-center gap-2 text-white/50 text-sm">
                Built with
                <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
                using React
              </p>

            </div>
          </div>
        </Fadein>

      </div>
    </footer>
  );
};

export default Footer;
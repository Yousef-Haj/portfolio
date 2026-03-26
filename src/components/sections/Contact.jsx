import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageSquare,
  Phone,
} from "lucide-react";

import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constans";
import Fadein from "../animations/Fadein";

const Contact = () => {
  // ================= STATE =================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // ================= HANDLERS =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all fields",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email",
      });
      return;
    }

    // Success simulation
    setStatus({
      type: "success",
      message: "Message sent successfully 🚀",
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 4000);
  };

  // ================= SOCIAL ICONS =================
  const SocialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  };

  return (
    <section id="contact" className="relative py-20 bg-black overflow-hidden">
      
      {/*  Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔹 HEADER */}
        <Fadein delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary uppercase tracking-wider">
                Get In Touch
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl text-white mb-4">
              Let’s Work Together
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              I’m always open to discussing new projects, ideas, or opportunities.
            </p>
          </div>
        </Fadein>

        {/* 🔹 GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* ================= FORM ================= */}
          <Fadein delay={100}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div>
                  <label className="text-sm text-white/70 mb-2 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-primary/50 outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm text-white/70 mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-primary/50 outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm text-white/70 mb-2 block">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-primary/50 outline-none resize-none"
                  />
                </div>


                {/* Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-linear-to-r from-primary/60 to-primary text-white rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>

                {/* Status */}
                {status.message && (
                  <p
                    className={`text-sm ${
                      status.type === "error"
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </Fadein>

          {/*  INFO  */}
          <Fadein delay={200}>
            <div className="space-y-6">

              {/* Email */}
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl flex items-center gap-4">
                <Mail className="text-primary" />
                <div>
                  <p className="text-white/50 text-sm">Email</p>
                  <p className="text-white">{PERSONAL_INFO.email}</p>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl flex items-center gap-4">
                <Phone className="text-primary" />
                <div>
                  <p className="text-white/50 text-sm">Phone Number</p>
                  <p className="text-white">{PERSONAL_INFO.phone}</p>
                </div>
              </div>
              {/* Location */}
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl flex items-center gap-4">
                <MapPin className="text-primary" />
                <div>
                  <p className="text-white/50 text-sm">Location</p>
                  <p className="text-white">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="text-white/60 mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                    const Icon = SocialIcons[platform];

                    return (
                      Icon && (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="p-4 bg-white/5 border border-white/10 rounded-xl hover:scale-110 hover:border-primary/50 transition"
                        >
                          <Icon className="text-white/70 hover:text-primary" />
                        </a>
                      )
                    );
                  })}
                </div>
              </div>

            </div>
          </Fadein>
        </div>
      </div>
    </section>
  );
};

export default Contact;
"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Calendar } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl w-full">
        {/* Schedule a call button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <a
            href="https://wa.me/22995425614?text=Hi%20Erwin!%20I'd%20like%20to%20schedule%20a%20call%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-orange-400 hover:bg-orange-500/30 transition group"
          >
            <Calendar size={18} className="group-hover:scale-110 transition-transform" />
            <span>Schedule a call</span>
            <span className="text-xs text-gray-400 ml-2 hidden sm:inline">
              (Mon-Sun, 10AM-5PM)
            </span>
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Profile Picture and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="flex flex-col items-center md:items-start"
          >
            {/* Profile Picture */}
            <div className="relative w-70 h-70 md:w-80 md:h-80 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-lg opacity-50"></div>
              <div className="relative w-full h-full bg-gray-800 rounded-full overflow-hidden border-4 border-white/10">
                <Image
                  src="/profile.jpg"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Location and Languages */}
            <div className="flex flex-col gap-3 items-center md:items-start">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-sm">Africa/Cotonou</span>
              </div>
              <div className="flex gap-2">
                <span className="px-8 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                  English
                </span>
                <span className="px-8 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                  French
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right side - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight whitespace-nowrap">
              Erwin MEHOU-HOUNSOU
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
              Software Engineer
            </h2>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start mb-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition"
              >
                <Github size={18} />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition"
              >
                <Linkedin size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:olamehouhounsou@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition"
              >
                <Mail size={18} />
                <span className="text-sm">Email</span>
              </a>
            </div>

            {/* Bio */}
            <p className="text-gray-400 leading-relaxed max-w-xl">
              As a passionate student and freelance software engineer, I transform
              complex technical challenges into effective digital solutions. My work
              covers modern web development, creating interactive experiences, and
              fusing design with code.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
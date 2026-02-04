"use client";

import { useState, useRef, useEffect } from "react";
import { User, Briefcase, Layers, Mail, Download, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [showCVMenu, setShowCVMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowCVMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/5"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
          {/* Navigation Links - Centered */}
          <a
            href="#about"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            <User size={16} />
            <span className="hidden sm:inline">About</span>
          </a>
          <a
            href="#work"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Briefcase size={16} />
            <span className="hidden sm:inline">Experience</span>
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Layers size={16} />
            <span className="hidden sm:inline">Projects</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Mail size={16} />
            <span className="hidden sm:inline">Contact</span>
          </a>
          
          {/* CV Download Button with Dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setShowCVMenu(!showCVMenu)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400 hover:bg-blue-500/20 transition-all duration-200"
            >
              <Download size={16} />
              <span className="hidden sm:inline">CV</span>
              <ChevronDown size={14} className={`transition-transform ${showCVMenu ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {showCVMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 right-0 w-40 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-xl"
                >
                  <a
                    href="/cv-en.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    onClick={() => setShowCVMenu(false)}
                  >
                    <Download size={14} />
                    English
                  </a>
                  <a
                    href="/cv-fr.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors border-t border-white/5"
                    onClick={() => setShowCVMenu(false)}
                  >
                    <Download size={14} />
                    Français
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          <div className="text-lg font-bold">Portfolio</div>
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="p-2 text-gray-400 hover:text-white transition"
            aria-label="Toggle menu"
          >
            {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-4 border-t border-white/5 mt-3">
                <a
                  href="#about"
                  onClick={() => setShowMobileMenu(false)}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 px-2"
                >
                  <User size={18} />
                  <span>About</span>
                </a>
                <a
                  href="#work"
                  onClick={() => setShowMobileMenu(false)}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 px-2"
                >
                  <Briefcase size={18} />
                  <span>Experience</span>
                </a>
                <a
                  href="#projects"
                  onClick={() => setShowMobileMenu(false)}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 px-2"
                >
                  <Layers size={18} />
                  <span>Projects</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setShowMobileMenu(false)}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 px-2"
                >
                  <Mail size={18} />
                  <span>Contact</span>
                </a>
                <div className="flex flex-col gap-2 px-2 pt-2 border-t border-white/5">
                  <a
                    href="/cv-en.pdf"
                    download
                    onClick={() => setShowMobileMenu(false)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-400 hover:bg-blue-500/20 transition-all duration-200"
                  >
                    <Download size={16} />
                    CV - English
                  </a>
                  <a
                    href="/cv-fr.pdf"
                    download
                    onClick={() => setShowMobileMenu(false)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-400 hover:bg-blue-500/20 transition-all duration-200"
                  >
                    <Download size={16} />
                    CV - Français
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

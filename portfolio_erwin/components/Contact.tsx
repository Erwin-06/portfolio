"use client";

import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-gray-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition text-sm sm:text-base"
              >
                <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Let&apos;s Connect</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  I&apos;m always open to discussing new projects, creative ideas,
                  or opportunities to be part of your visions.
                </p>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-gray-400">
                <Mail className="text-blue-400 flex-shrink-0" size={18} />
                <a
                  href="mailto:olamehouhounsou@gmail.com"
                  className="hover:text-white transition text-sm sm:text-base break-all"
                >
                  olamehouhounsou@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-medium text-gray-400 mb-3 sm:mb-4">
                  Follow me on
                </h4>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-500/50 transition"
                  >
                    <Github size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-500/50 transition"
                  >
                    <Linkedin size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="mailto:olamehouhounsou@gmail.com"
                    className="p-2.5 sm:p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-500/50 transition"
                  >
                    <Mail size={18} className="sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

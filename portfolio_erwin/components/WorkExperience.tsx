"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface WorkExperience {
  company: string;
  position: string;
  period: string;
  description: string[];
  tags?: string[];
}

const experiences: WorkExperience[] = [
  {
    company: "MAETVIN Corporation",
    position: "Frontend Developer Intern",
    period: "November 2024 - January 2025",
    description: ["Developed a web application and a mobile app for a client of MAETVIN Corporation."],
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    company: "DISCOVERY 2025 - Innovative event",
    position: "Full Stack Developer",
    period: "January 2025",
    description: ["Contributed to the development of a web platform for the DISCOVERY 2025 event to improve people's lives in using technology for sportive activities, enhancing user experience and functionality."],
    tags: ["React", "Next.js", "Figma"],
  },
  // Ajoute tes autres expériences ici
];

export default function WorkExperience() {
  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Work Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <Briefcase size={24} className="text-blue-400" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                    <p className="text-red-400 font-medium mb-2">
                      {exp.position}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">{exp.period}</p>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-400 flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {exp.tags && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

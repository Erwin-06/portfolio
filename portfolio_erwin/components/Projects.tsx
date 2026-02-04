"use client";

import { motion, AnimatePresence } from "framer-motion";
import { featuredProjects, otherProjects } from "@/data/projects";
import { ArrowUpRight, ExternalLink, X, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const categories = ["All", "Web", "Game", "DevOps", "AI", "System"];

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
  icon: any;
  category: string;
  year: string;
  status: string;
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredFeatured = featuredProjects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const filteredOther = otherProjects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="mb-8 sm:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-3 sm:mb-4">Featured Projects</h2>
        <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
          A selection of my best work, from automation platforms to real-time games.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="space-y-6 sm:space-y-8 mb-12 sm:mb-16"
      >
        {filteredFeatured.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            onClick={() => setSelectedProject(project)}
            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
          >
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
              {/* Image */}
              <div className="relative h-48 sm:h-64 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
                  <div className="p-2 sm:p-3 bg-blue-500/20 rounded-lg text-blue-400">
                    <project.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-xs px-2 sm:px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-500">{project.year}</span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1 bg-white/5 rounded-full text-gray-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-blue-400 group/link">
                  <span className="font-medium">View Details</span>
                  <ArrowUpRight
                    size={20}
                    className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Other Projects */}
      {filteredOther.length > 0 && (
        <>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8"
          >
            Other Projects
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="grid sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {filteredOther.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-6 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-blue-500/20 rounded-lg text-blue-400">
                    <project.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400">
                      {project.category}
                    </span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 sm:p-2 bg-white rounded-full text-black">
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </div>

                <h4 className="text-lg sm:text-xl font-bold mb-2 text-white">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2 py-1 bg-white/5 rounded-md text-gray-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-black/50 backdrop-blur-md border-b border-white/10 p-4 sm:p-6 flex justify-between items-start gap-3">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-lg text-blue-400 flex-shrink-0">
                    <selectedProject.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-2xl font-bold truncate">{selectedProject.title}</h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-xs px-2 py-0.5 sm:py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400">
                        {selectedProject.category}
                      </span>
                      <span className="text-xs text-gray-500">{selectedProject.year}</span>
                      <span className="text-xs px-2 py-0.5 sm:py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400">
                        {selectedProject.status}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition flex-shrink-0"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 md:p-8">
                {/* Image */}
                {selectedProject.image && (
                  <div className="relative h-48 sm:h-64 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8 bg-gradient-to-br from-blue-500/20 to-purple-600/20">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Description */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">About this project</h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 rounded-full text-xs sm:text-sm text-gray-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {selectedProject.link !== "#" && (
                  <div className="flex gap-3 sm:gap-4">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition text-sm sm:text-base"
                    >
                      <Github size={18} className="sm:w-5 sm:h-5" />
                      View on GitHub
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiPostgresql, SiPrisma, SiGit, 
  SiFigma, SiVercel, SiPython, SiDocker,
  SiC, SiCplusplus, SiHaskell,
  SiJenkins, SiFastapi, SiKalilinux, SiTensorflow,
  SiPytorch, SiScikitlearn, SiOpencv
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

interface Technology {
  name: string;
  icon: any;
  color: string;
  category: string;
}

const technologies: Technology[] = [
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Language" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Styling" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "Database" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748", category: "ORM" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "Tools" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", category: "Design" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF", category: "Hosting" },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "Language" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", category: "DevOps" },
  { name: "C", icon: SiC, color: "#A8B9CC", category: "Language" },
  { name: "C++", icon: SiCplusplus, color: "#00599C", category: "Language" },
  { name: "C#", icon: TbBrandCSharp, color: "#239120", category: "Language" },
  { name: "Haskell", icon: SiHaskell, color: "#5D4F85", category: "Language" },
  { name: "Jenkins", icon: SiJenkins, color: "#D24939", category: "DevOps" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688", category: "Backend" },
  { name: "Kali Linux", icon: SiKalilinux, color: "#557C94", category: "Security" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00", category: "AI/ML" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C", category: "AI/ML" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E", category: "AI/ML" },
  { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8", category: "AI/ML" },
];

const categories = ["All", "Frontend", "Backend", "Tools", "Design"];

export default function TechStack() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6" id="stack">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Tech Stack</h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
                <div 
                  className="text-3xl sm:text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                >
                  <tech.icon />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-white text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1">{tech.name}</h3>
                  <span className="text-[10px] sm:text-xs text-gray-500">{tech.category}</span>
                </div>
              </div>
              
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                style={{ background: tech.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import CardSwap, { Card } from "./bloc/Components/CardSwap/CardSwap";

// Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCube,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPrisma,
  SiStrapi,
  SiPython,
  SiVite,
  SiFigma,
} from "react-icons/si";

const skillGroups = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Strapi"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Prisma"],
  },
  {
    category: "AI & Dev Tools",
    items: ["Python", "Git", "Vite"],
  },
  {
    category: "Design & Other",
    items: ["Figma", "Spline"],
  },
];

const iconMap = {
  HTML: <FaHtml5 className="text-orange-400" />,
  CSS: <FaCss3Alt className="text-blue-400" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  React: <FaReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  Express: <span className="text-white text-lg">🧬</span>,
  Strapi: <SiStrapi className="text-indigo-400" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  Prisma: <SiPrisma className="text-white" />,
  Python: <SiPython className="text-yellow-300" />,
  Git: <FaGitAlt className="text-red-500" />,
  Vite: <SiVite className="text-purple-400" />,
  Figma: <SiFigma className="text-pink-400" />,
  Spline: <FaCube className="text-blue-300" />,
};

const Skills = () => {
  return (
    <section className="min-h-screen py-20 px-6  text-white mb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-md">
            Technologies I have hands-on experience with. Categorized to help
            you understand my stack better.
          </p>
        </div>

        {/* Right Column */}
        <div className="h-[600px] relative">
          <CardSwap
            cardDistance={80}
            verticalDistance={90}
            delay={5000}
            pauseOnHover={false}
          >
            {skillGroups.map((group, index) => (
              <Card key={index}>
                <div className="py-2">
                  <h3 className="text-xl font-semibold mb-2 text-white py-1 px-3">
                    {group.category}
                  </h3>
                  <hr className="border-t border-gray-600 " />
                  <ul className="space-y-2 text-sm py-4 px-3">
                    {group.items.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-lg">
                          {iconMap[skill] || "📦"}
                        </span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                  
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default Skills;

"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";

const skillCategories = [
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "JWT",
    ],
  },
  {
    title: "Frontend",
    icon: "💻",
    skills: [
      "React",
      "JavaScript",
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Tools",
    icon: "🚀",
    skills: [
      "Git",
      "GitHub",
      "Docker",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <Container>
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies I use to build modern applications."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  bg-gradient-to-br
                  from-blue-500/10
                  via-transparent
                  to-purple-500/10
                "
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">
                    {category.icon}
                  </div>

                  <h3 className="text-2xl font-bold">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="
                        rounded-full
                        border
                        border-blue-500/20
                        bg-blue-500/10
                        px-4
                        py-2
                        text-sm
                        text-blue-300
                      "
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
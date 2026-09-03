"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";

const technologies = [
  {
    title: "Spring Boot",
    description:
      "Building REST APIs and secure authentication systems.",
    size: "large",
  },
  {
    title: "PostgreSQL / pgvector",
    description:
      "Relational data with vector-based semantic search.",
    size: "small",
  },
  {
    title: "JWT Security",
    description:
      "Token-based authentication and refresh-token flows.",
    size: "small",
  },
  {
    title: "Docker",
    description:
      "Containerized local development.",
    size: "small",
  },
];

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="py-32"
    >
      <Container>
        <SectionHeading
          title="Core Technologies"
          subtitle="Technologies I use while building modern applications."
        />

        <div className="grid gap-6 md:grid-cols-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
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
                scale: 1.02,
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl

                ${
                  tech.size === "large"
                    ? "md:col-span-2"
                    : "md:col-span-1"
                }
              `}
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
                <h3
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  {tech.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-relaxed
                    text-gray-400
                  "
                >
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FeaturedProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    github: string;
    demo: string;
    stack: string[];
  };
  reverse?: boolean;
}

export default function FeaturedProjectCard({
  project,
  reverse = false,
}: FeaturedProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-8
        lg:p-12
      `}
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/10
            blur-[120px]
          "
        />
      </div>

      <div
        className={`
          relative
          z-10
          grid
          items-center
          gap-10
          lg:grid-cols-2
          ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
        `}
      >
        {/* Content */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
            Featured Project
          </p>

          <h3 className="text-4xl font-bold text-white">
            {project.title}
          </h3>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
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
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl
                border
                border-white/10
                px-6
                py-3
                transition-all
                hover:bg-white/5
              "
            >
              GitHub
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl
                bg-gradient-to-r
                from-blue-500
                to-purple-500
                px-6
                py-3
                font-medium
                transition-all
                hover:scale-105
              "
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
            "
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={700}
              className="
                w-full
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
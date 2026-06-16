"use client";

import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    github: string;
    demo: string;
    stack: string[];
  };
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
      "
    >
      {/* Cursor Spotlight */}
      <motion.div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background: `
            radial-gradient(
              300px circle at ${mouseX.get()}px ${mouseY.get()}px,
              rgba(59,130,246,0.18),
              transparent 70%
            )
          `,
        }}
      />

      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-3 leading-relaxed text-gray-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-3
                py-1
                text-sm
                text-blue-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            className="
              rounded-xl
              border
              border-white/10
              px-4
              py-2
              transition-all
              hover:bg-white/10
            "
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            className="
              rounded-xl
              bg-gradient-to-r
              from-blue-500
              to-purple-500
              px-4
              py-2
              transition-all
              hover:scale-105
            "
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
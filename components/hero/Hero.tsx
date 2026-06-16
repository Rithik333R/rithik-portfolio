"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import FloatingOrb from "./FloatingOrb";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div
          className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/15
          blur-[180px]
        "
        />
      </div>

      <Container>
        <div
          className="
          relative
          min-h-screen
          pt-32
          grid
          items-center
          gap-12
          lg:grid-cols-[1.8fr_1fr]
        "
        >
          {/* Left Side */}
          <div>
            {/* Availability Badge */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-emerald-500/30
    bg-emerald-500/10
    px-4
    py-2
    text-sm
    text-emerald-300
  "
>
  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
  Open to Opportunities
</motion.div>

{/* Role */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
  className="
    mt-6
    text-blue-400
    font-semibold
    tracking-wider
    uppercase
  "
>
  Backend Developer
</motion.p>

{/* Name */}
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="
    mt-4
    text-5xl
    sm:text-6xl
    lg:text-7xl
    font-black
    leading-[1.05]
  "
>
  <span className="block whitespace-nowrap">
    Rithik Kumar M B
  </span>
</motion.h1>

{/* Description */}
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
  className="
    mt-6
    max-w-2xl
    text-lg
    leading-relaxed
    text-gray-400
  "
>
    Passionate about building scalable backend
    systems, secure APIs and modern web
    applications using Java, Spring Boot,
    Next.js and Microservices.
</motion.p>

{/* Tech Pills */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="mt-8 flex flex-wrap gap-3"
>
  {[
    "Java",
    "Spring Boot",
    "Microservices",
    "Next.js",
    "MongoDB",
    "AWS",
  ].map((tech) => (
    <span
      key={tech}
      className="
        rounded-full
        border
        border-white/10
        bg-white/5
        px-4
        py-2
        text-sm
        text-gray-300
      "
    >
      {tech}
    </span>
  ))}
</motion.div>

{/* CTA Buttons */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
  className="mt-10 flex flex-wrap gap-4"
>
  <a
    href="#projects"
    className="
      rounded-xl
      bg-gradient-to-r
      from-blue-500
      to-purple-500
      px-8
      py-4
      font-semibold
      transition-all
      hover:scale-105
    "
  >
    View Projects
  </a>

  <a
    href="/resume.pdf"
    target="_blank"
    className="
      rounded-xl
      border
      border-white/10
      px-8
      py-4
      font-semibold
      backdrop-blur-xl
      transition-all
      hover:bg-white/10
    "
  >
    Download Resume
  </a>
</motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="
                mt-14
                flex
                flex-wrap
                gap-10
                border-t
                border-white/10
                pt-8
              "
            >

        
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <FloatingOrb />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="
            absolute
            bottom-10
            left-1/2
            -translate-x-1/2
            text-gray-500
          "
        >
          ↓ Scroll
        </motion.div>
      </Container>
    </section>
  );
}
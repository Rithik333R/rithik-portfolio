"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";

const timeline = [
  {
    year: "2025",
    title: "Graduated",
    description:
      "Completed B.E. in Computer Science and Engineering. Received a placement offer through campus recruitment for a trainee developer role, which was withdrawn before onboarding. Used the time to deepen core Java and Spring Boot fundamentals.",
  },
  {
    year: "2025",
    title: "Built Tournament Platform",
    description:
      "Designed and developed a complete tournament management platform.",
  },
  {
    year: "2025",
    title: "Built AI Interview Platform",
    description:
      "Integrated AI-powered interview workflows using Google Gemini.",
  },
  {
    year: "2026",
    title: "Built AI Freelance Engineering OS",
    description:
      "Built a full-stack platform integrating AI into a real business workflow, with a focus on security and semantic search.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-32"
    >
      <Container>
        <SectionHeading
          title="My Journey"
          subtitle="How I evolved as a developer."
        />

        <div className="relative mx-auto max-w-6xl">
          {/* Center Line */}
          <div
            className="
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-[2px]
              -translate-x-1/2
              bg-gradient-to-b
              from-blue-500
              via-purple-500
              to-blue-500
              md:block
            "
          />

          <div className="space-y-16">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className="
                    relative
                    flex
                    items-center
                    justify-center
                  "
                >
                  {/* Dot */}
                  <div
                    className="
                      absolute
                      left-1/2
                      hidden
                      h-5
                      w-5
                      -translate-x-1/2
                      rounded-full
                      bg-blue-500
                      shadow-[0_0_25px_rgba(59,130,246,1)]
                      md:block
                    "
                  />

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeft ? -80 : 80,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    className={`
                      w-full
                      md:w-[45%]
                      ${
                        isLeft
                          ? "md:mr-auto"
                          : "md:ml-auto"
                      }
                    `}
                  >
                    <div
                      className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/5
                        p-6
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:border-blue-500/30
                      "
                    >
                      <p className="text-blue-400 font-semibold">
                        {item.year}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
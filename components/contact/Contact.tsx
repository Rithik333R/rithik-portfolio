"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32"
    >
      <Container>
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            p-12
            md:p-16
            backdrop-blur-xl
          "
        >
          {/* Background Glow */}
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
              blur-[150px]
            "
          />

          <div className="relative z-10">
            <SectionHeading
              title="Ready to Build Something Exceptional?"
              subtitle="I'm actively seeking Software Engineer, Backend Developer, and Internship opportunities where I can contribute to impactful products and scalable systems."
            />

            {/* Skill Tags */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                "Java",
                "Spring Boot",
                "AWS",
                "Microservices",
                "Docker",
                "MongoDB",
              ].map((skill) => (
                <span
                  key={skill}
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
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="
                mt-12
                flex
                flex-wrap
                justify-center
                gap-4
              "
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                href={`mailto:${portfolioData.email}`}
                className="
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-500
                  px-8
                  py-4
                  font-medium
                  shadow-lg
                  shadow-blue-500/20
                "
              >
                Hire Me
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-xl
                  border
                  border-white/10
                  px-8
                  py-4
                  transition-all
                  hover:bg-white/5
                "
              >
                LinkedIn
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-xl
                  border
                  border-white/10
                  px-8
                  py-4
                  transition-all
                  hover:bg-white/5
                "
              >
                GitHub
              </motion.a>
            </div>

            {/* Footer Text */}
            <p
              className="
                mt-10
                text-center
                text-gray-400
              "
            >
              Available for internships, freelance projects, and full-time opportunities.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
"use client";

import Marquee from "react-fast-marquee";

const skills = [
  "Java",
  "Spring Boot",
  "Docker",
  "React",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "JWT",
  "Git",
];

export default function TechMarquee() {
  return (
    <section className="border-y border-white/10 py-6">
      <Marquee speed={40} gradient={false}>
        {skills.map((skill) => (
          <div
            key={skill}
            className="
              mx-6
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
            {skill}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
"use client";

import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32"
    >
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="Full-stack applications focused on backend engineering, AI integration and security."
        />

        <div className="space-y-16">
          <FeaturedProjectCard
            project={portfolioData.projects[0]}
          />

          <FeaturedProjectCard
            project={portfolioData.projects[1]}
            reverse
          />

          <FeaturedProjectCard
            project={portfolioData.projects[2]}
          />
        </div>
      </Container>
    </section>
  );
}
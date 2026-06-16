import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/hero/Hero";
import TechMarquee from "@/components/hero/TechMarquee";

import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Architecture from "@/components/architecture/Architecture";
import Timeline from "@/components/timeline/Timeline";
import Contact from "@/components/contact/Contact";
import ScrollProgress from "@/components/shared/ScrollProgress";
import MouseGlow from "@/components/shared/MouseGlow";
import AuroraBackground from "@/components/shared/AuroraBackground";

export default function Home() {
  return (
    <main>

        <ScrollProgress />

        <MouseGlow />

  <AuroraBackground />

      <Navbar />

      <Hero />

      <TechMarquee />

      <Projects />

      <Skills />

      <Architecture />

      <Timeline />

      <Contact />

      <Footer />
    </main>
  );
}
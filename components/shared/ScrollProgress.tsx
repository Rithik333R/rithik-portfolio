"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
        fixed
        top-0
        left-0
        right-0
        z-[9999]
        h-[3px]
        origin-left
        bg-gradient-to-r
        from-blue-500
        via-purple-500
        to-cyan-400
      "
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}
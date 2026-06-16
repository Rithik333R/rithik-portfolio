"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-45 overflow-hidden pointer-events-none">
      {/* Aurora 1 */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -80, 80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-15%]
          top-[-10%]
          h-[900px]
          w-[900px]
          rounded-full
          bg-cyan-500/8
          blur-[180px]
        "
      />

      {/* Aurora 2 */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-15%]
          top-[20%]
          h-[900px]
          w-[900px]
          rounded-full
          bg-violet-500/10
          blur-[200px]
        "
      />

      {/* Aurora 3 */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -100, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[20%]
          bottom-[-20%]
          h-[800px]
          w-[800px]
          rounded-full
          bg-blue-500/10
          blur-[180px]
        "
      />
    </div>
  );
}
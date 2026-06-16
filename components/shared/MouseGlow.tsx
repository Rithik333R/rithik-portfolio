"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const x = useSpring(mouseX, {
    damping: 40,
    stiffness: 200,
  });

  const y = useSpring(mouseY, {
    damping: 40,
    stiffness: 200,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        style={{
          left: x,
          top: y,
        }}
        className="
          fixed
          z-0
          pointer-events-none
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-500/20
          blur-[120px]
        "
      />

      <motion.div
        style={{
          left: x,
          top: y,
        }}
        className="
          fixed
          z-0
          pointer-events-none
          h-[250px]
          w-[250px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/20
          blur-[80px]
        "
      />
    </>
  );
}
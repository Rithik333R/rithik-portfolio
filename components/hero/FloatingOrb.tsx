"use client";

import Image from "next/image";
import ThreeOrb from "./ThreeOrb";

export default function FloatingOrb() {
  return (
    <div className="relative flex items-center justify-center">
      {/* 3D Orb */}
      <div
        className="
          absolute
          h-[550px]
          w-[550px]
          opacity-95
        "
      >
        <ThreeOrb />
      </div>

      {/* Profile Image */}
      <div
        className="
          relative
          z-10
          h-[320px]
          w-[320px]
          overflow-hidden
          rounded-full
          border-4
          border-white/20
          shadow-[0_0_80px_rgba(99,102,241,0.45)]
          transition-all
          duration-500
          hover:scale-105
        "
      >
        <Image
          src="/profile.jpeg"
          alt="Rithik Kumar M B"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
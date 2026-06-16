"use client";

import { motion } from "framer-motion";

const navItems = [
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Architecture",
    href: "#architecture",
  },
  {
    label: "Timeline",
    href: "#timeline",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        flex
        justify-center
        pt-6
      "
    >
      <motion.nav
        initial={{
          opacity: 0,
          y: -30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          flex
          items-center
          gap-8
          rounded-full
          border
          border-white/10
          bg-black/30
          px-8
          py-4
          backdrop-blur-2xl
          shadow-[0_0_40px_rgba(0,0,0,0.3)]
        "
      >
        {/* Logo */}
        <a
          href="#"
          className="
            text-xl
            font-black
            tracking-wider
            bg-gradient-to-r
            from-blue-400
            via-purple-400
            to-blue-400
            bg-clip-text
            text-transparent
          "
        >
          RKM
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{
                y: -2,
              }}
              className="
                relative
                text-sm
                text-gray-300
                transition-colors
                hover:text-white
              "
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Resume */}
        <motion.a
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.98,
          }}
          href="/resume.pdf"
          target="_blank"
          className="
            rounded-full
            bg-gradient-to-r
            from-blue-500
            to-purple-500
            px-5
            py-2
            text-sm
            font-medium
            shadow-lg
            shadow-blue-500/20
          "
        >
          Resume
        </motion.a>
      </motion.nav>
    </header>
  );
}
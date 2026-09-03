"use client";

import Container from "../shared/Container";

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/10
        py-10
      "
    >
      <Container>
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-6
            md:flex-row
          "
        >
          <div>
            <h3
              className="
                text-lg
                font-bold
                bg-gradient-to-r
                from-blue-400
                to-purple-400
                bg-clip-text
                text-transparent
              "
            >
              Rithik Kumar M B
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Backend Developer • Java • Spring Boot
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © 2026 All Rights Reserved
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Built with Next.js, Tailwind CSS, Framer Motion & Three.js
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
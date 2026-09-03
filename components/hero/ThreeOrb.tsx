"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function Orb() {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame(({ mouse }) => {
    if (outerRef.current) {
      outerRef.current.rotation.y = mouse.x * 0.5;
      outerRef.current.rotation.x = mouse.y * 0.25;
    }

    if (innerRef.current) {
      innerRef.current.rotation.y += 0.003;
      innerRef.current.rotation.x += 0.001;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1.5}
    >
      {/* Outer Shell */}
      <mesh ref={outerRef}>
        <sphereGeometry args={[1.7, 64, 64]} />

        <MeshDistortMaterial
          color="#60a5fa"
          distort={0.15}
          speed={0.8}
          roughness={0}
          metalness={0.8}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Inner Energy Core */}
      <mesh ref={innerRef} scale={0.65}>
        <sphereGeometry args={[1.5, 48, 48]} />

        <meshStandardMaterial
          color="#ffffff"
          emissive="#60a5fa"
          emissiveIntensity={2}
          transparent
          opacity={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeOrb() {
  const [inView, setInView] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setInView(entries[0].isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 4] }}
        dpr={[1, 1.5]}
        frameloop={inView ? "always" : "never"}
      >
      <ambientLight intensity={1.2} />

      <pointLight
        position={[4, 4, 4]}
        intensity={4}
        color="#60a5fa"
      />

      <pointLight
        position={[-4, -4, -4]}
        intensity={3}
        color="#8b5cf6"
      />

      <pointLight
        position={[0, 0, 5]}
        intensity={2}
        color="#ffffff"
      />

      <Orb />
      </Canvas>
    </div>
  );
}
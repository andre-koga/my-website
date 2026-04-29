"use client";

import { useEffect, useRef, useState } from "react";

interface DustParticle {
  id: number;
  x: number; // vw
  y: number; // vh
  z: number; // -1 (far) .. 1 (near)
  age: number;
  lifespan: number;
  seedA: number;
  seedB: number;
  driftA: number;
  driftB: number;
  baseOpacity: number;
  radius: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));
const PARTICLE_COUNT = 100;
const FADE_IN_DURATION = 1.2;
const FADE_OUT_DURATION = 1.8;
const MAX_STEP = 0.045;

const randomBetween = (min: number, max: number) =>
  min + Math.random() * (max - min);

const createParticle = (id: number): DustParticle => ({
  id,
  x: randomBetween(0, 100),
  y: randomBetween(0, 100),
  z: randomBetween(-1, 1),
  age: Math.random() * 8,
  lifespan: randomBetween(10, 18),
  seedA: Math.random() * Math.PI * 2,
  seedB: Math.random() * Math.PI * 2,
  driftA: randomBetween(0.2, 0.7),
  driftB: randomBetween(0.2, 0.7),
  baseOpacity: randomBetween(0.2, 0.7),
  radius: randomBetween(1, 3.6),
});

const respawnParticle = (id: number): DustParticle => ({
  ...createParticle(id),
  age: 0,
});

export default function Rain() {
  const [particles, setParticles] = useState<DustParticle[]>([]);
  const particlesRef = useRef<DustParticle[]>([]);

  useEffect(() => {
    let frameId = 0;
    let previousTime = performance.now();
    let initialized = false;

    const tick = (timestamp: number) => {
      if (!initialized) {
        initialized = true;
        const initialParticles = Array.from(
          { length: PARTICLE_COUNT },
          (_, index) => createParticle(index),
        );
        particlesRef.current = initialParticles;
        setParticles(initialParticles);
        previousTime = timestamp;
        frameId = requestAnimationFrame(tick);
        return;
      }

      const deltaSeconds = clamp(
        (timestamp - previousTime) / 1000,
        0,
        MAX_STEP,
      );
      previousTime = timestamp;
      const time = timestamp / 1000;

      const nextParticles = particlesRef.current.map((particle) => {
        const nextAge = particle.age + deltaSeconds;

        if (nextAge >= particle.lifespan) {
          return respawnParticle(particle.id);
        }

        const driftX =
          Math.sin(time * (0.32 + particle.driftA) + particle.seedA) * 0.35 +
          Math.cos(time * (0.18 + particle.driftB) + particle.seedB) * 0.22;
        const driftY =
          Math.cos(time * (0.27 + particle.driftB) + particle.seedA * 0.7) *
            0.24 +
          Math.sin(time * (0.21 + particle.driftA) + particle.seedB * 0.6) *
            0.18;
        const driftZ =
          Math.sin(time * (0.14 + particle.driftA * 0.2) + particle.seedA) *
            0.11 +
          Math.cos(time * (0.12 + particle.driftB * 0.2) + particle.seedB) *
            0.08;

        const nextX = particle.x + driftX * deltaSeconds * 6.2;
        const nextY = particle.y + driftY * deltaSeconds * 5.2;
        const nextZ = particle.z + driftZ * deltaSeconds;

        if (
          nextX < -8 ||
          nextX > 108 ||
          nextY < -8 ||
          nextY > 108 ||
          nextZ < -1.45 ||
          nextZ > 1.45
        ) {
          return respawnParticle(particle.id);
        }

        return {
          ...particle,
          x: nextX,
          y: nextY,
          z: nextZ,
          age: nextAge,
        };
      });

      particlesRef.current = nextParticles;
      setParticles(nextParticles);
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particles.map((particle) => {
        const depth = (particle.z + 1) / 2;
        const centeredDepth = Math.abs(depth - 0.5) * 2;
        const depthBlur = centeredDepth * 2.8;
        const depthScale = 0.55 + depth * 1.25;
        const depthOpacity = 0.3 + (1 - centeredDepth) * 0.9;
        const fadeIn = clamp(particle.age / FADE_IN_DURATION, 0, 1);
        const fadeOut = clamp(
          (particle.lifespan - particle.age) / FADE_OUT_DURATION,
          0,
          1,
        );
        const lifeOpacity = Math.min(fadeIn, fadeOut);

        return (
          <span
            key={particle.id}
            className="absolute rounded-full bg-white will-change-transform"
            style={{
              left: `${particle.x}vw`,
              top: `${particle.y}vh`,
              width: `${particle.radius * depthScale}px`,
              height: `${particle.radius * depthScale}px`,
              opacity: clamp(
                particle.baseOpacity * depthOpacity * lifeOpacity,
                0,
                1,
              ),
              filter: `blur(${depthBlur}px)`,
              transform: `translate3d(0, 0, ${particle.z * 220}px)`,
            }}
          />
        );
      })}
    </div>
  );
}

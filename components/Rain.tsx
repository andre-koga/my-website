"use client";

import { useEffect, useState } from "react";

interface Raindrop {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  opacity: number;
}

export default function Rain() {
  const [raindrops, setRaindrops] = useState<Raindrop[]>([]);

  useEffect(() => {
    const generateRaindrops = () => {
      const drops: Raindrop[] = [];
      const numberOfDrops = 100; // Adjust for density

      for (let i = 0; i < numberOfDrops; i++) {
        drops.push({
          id: i,
          x: Math.random() * 100, // Random x position (%)
          y: -(50 + Math.random() * 100), // Start above screen
          delay: Math.random() * 5, // Random delay (seconds)
          duration: 1 + Math.random() * 2, // Random duration (1-3 seconds)
          opacity: 0.3 + Math.random() * 0.4, // Random opacity (0.3-0.7)
        });
      }
      setRaindrops(drops);
    };

    generateRaindrops();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-px bg-blue-200/50 raindrop"
          style={{
            left: `${drop.x}%`,
            top: `${drop.y}px`, // Start above screen
            height: `${20 + Math.random() * 30}px`, // Random height
            opacity: drop.opacity,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

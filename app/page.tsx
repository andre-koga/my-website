"use client";

import Link from "next/link";
import Image from "next/image";
import { Funnel_Display } from "next/font/google";
import { useEffect, useState } from "react";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: "700",
});
const socialLinks = [
  { name: "GitHub", href: "https://github.com/andre-koga" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/andrehkoga/" },
  { name: "Archive", href: "/archive" },
  { name: "Experience", href: "/experience" },
];

const projects = [
  {
    name: "Upwards",
    description:
      "Offline & mobile-first PWA productivity app with time tracking, journaling, and other features",
    href: "https://upwards.vercel.app/",
    image: "/upwards.png",
  },
  {
    name: "NOIC",
    description:
      "Frontend and backend work for Brazil's major olympiad prep NGO.",
    href: "https://noic.com.br",
    image: "/noic.png",
  },
  {
    name: "CodeParty",
    description: "Catalog of programming languages and their core features.",
    href: "https://code-party-dev.vercel.app/",
    image: "/codeparty.png",
  },
  {
    name: "Flux Slides",
    description: "Developer-first slideshow app using Markdown and LaTeX.",
    href: "https://flux-slides.vercel.app/",
    image: "/flux.png",
  },
  {
    name: "Japanese Verb Practice",
    description: "Interactive Japanese verb conjugation training app.",
    href: "https://jp.andrekoga.com/",
    image: "/doushikei.png",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(2);
  const pauseOnHover = () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setIsPaused(true);
    }
  };

  const resumeFromHover = () => setIsPaused(false);

  const loopedProjects = [...projects, ...projects.slice(0, visibleCards)];

  useEffect(() => {
    const updateVisibleCards = () => {
      let nextVisibleCards = 1;

      if (window.innerWidth >= 1024) {
        nextVisibleCards = 4;
      } else if (window.innerWidth >= 768) {
        nextVisibleCards = 2;
      }

      setVisibleCards((previous) => {
        if (previous === nextVisibleCards) {
          return previous;
        }

        setWithTransition(false);
        setActiveIndex(0);
        requestAnimationFrame(() => {
          setWithTransition(true);
        });

        return nextVisibleCards;
      });
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (activeIndex !== projects.length) {
      return;
    }

    const timeout = setTimeout(() => {
      setWithTransition(false);
      setActiveIndex(0);
    }, 700);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  useEffect(() => {
    if (withTransition) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      setWithTransition(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [withTransition]);

  return (
    <main className="flex min-h-screen flex-col">
      <section className="px-2 md:pr-4">
        <div
          className={`${funnelDisplay.className} group/title flex flex-col text-7xl font-semibold tracking-tight text-zinc-100 uppercase sm:flex-row sm:text-right sm:text-8xl md:text-9xl`}
        >
          <p className="pl-1 sm:pr-12">Andre</p>
          <div className="flex grow items-center">
            <p>K</p>
            <span
              aria-hidden
              className="relative isolate mt-2 mr-1 -ml-1 min-h-[0.5em] min-w-[0.5em] grow overflow-hidden rounded-full border-8 border-zinc-100 p-2 group-hover/title:border-0 sm:-ml-2 sm:border-16 sm:p-4"
            >
              <span className="pointer-events-none absolute inset-0 top-0 z-0 opacity-0 transition-opacity duration-500 ease-out group-hover/title:opacity-100">
                <span className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] rounded-full bg-linear-to-br from-fuchsia-500 via-amber-400 to-cyan-500 motion-safe:animate-[spin_14s_linear_infinite]" />
                <span className="absolute -right-1/3 bottom-0 h-[180%] w-[180%] rounded-full bg-linear-to-tl from-violet-600/90 via-rose-500/80 to-emerald-400/90 mix-blend-screen blur-sm motion-safe:animate-[spin_22s_linear_infinite_reverse]" />
                <span className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.95),transparent_42%),radial-gradient(circle_at_80%_70%,rgba(255,0,200,0.45),transparent_50%),radial-gradient(circle_at_50%_50%,rgba(0,200,255,0.5),transparent_55%)] mix-blend-overlay motion-safe:animate-[pulse_4s_ease-in-out_infinite]" />
                <span className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#ff006e,#fb5607,#ffbe0b,#8338ec,#3a86ff,#ff006e)] opacity-90 mix-blend-hard-light motion-safe:animate-[spin_30s_linear_infinite]" />
              </span>
            </span>{" "}
            <p>ga</p>
          </div>
        </div>
        <ul className="flex flex-wrap gap-6 text-lg text-zinc-300 sm:justify-end sm:text-xl">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="underline-offset-4 transition hover:text-zinc-100 hover:underline"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <div className="overflow-hidden pr-4 pb-8 pl-1">
          <div
            className={`flex ${
              withTransition ? "transition-transform duration-700 ease-out" : ""
            }`}
            style={{
              transform: `translateX(-${activeIndex * (100 / visibleCards)}%)`,
            }}
          >
            {loopedProjects.map((project, index) => (
              <div
                className="shrink-0 px-2"
                key={`${project.name}-${index}`}
                style={{ width: `${100 / visibleCards}%` }}
              >
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={pauseOnHover}
                  onMouseLeave={resumeFromHover}
                  className="block aspect-1/2 overflow-hidden rounded-2xl border border-zinc-800 transition hover:scale-95 hover:border-zinc-600"
                >
                  <article className="relative flex h-full flex-col justify-end overflow-hidden rounded-xl">
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={`${project.name} preview`}
                          fill
                          className="object-cover"
                        />
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-linear-to-b from-transparent from-60% to-zinc-950/80"
                        />
                      </>
                    ) : null}
                    <div className="space-y-2 p-5">
                      <h2
                        className={`relative z-10 text-3xl ${funnelDisplay.className} tracking-tight text-zinc-100`}
                      >
                        {project.name}
                      </h2>
                      <p className="relative z-10 h-20 leading-relaxed text-zinc-300">
                        {project.description}
                      </p>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

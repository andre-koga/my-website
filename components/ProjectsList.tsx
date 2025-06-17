"use client";

import Banner from "@/components/Banner";
import Wrapper from "@/components/Wrapper";
import clsx from "clsx";
import Link from "next/link";
import { useState, useRef } from "react";

interface Project {
  name: string;
  description: string;
  link: string;
}

interface NavigationLink {
  href: string;
  label: string;
}

interface ProjectsListProps {
  title: string;
  projects: Project[];
  navigationLinks: NavigationLink[];
}

export default function ProjectsList({
  title,
  projects,
  navigationLinks,
}: ProjectsListProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <Wrapper>
      <h1 className="text-4xl font-bold">{title}</h1>
      <Banner
        onClick={() => {
          setCurrentIndex((prev) => (prev + 1) % projects.length);
        }}
      >
        <p className="cursor-pointer text-center text-lg text-zinc-400 hover:italic">
          {projects[currentIndex].description}
        </p>
      </Banner>
      <ul className="flex flex-col gap-4 text-center">
        {projects.slice(1).map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:italic"
          >
            <li
              onMouseEnter={() => {
                if (leaveTimeoutRef.current) {
                  clearTimeout(leaveTimeoutRef.current);
                  leaveTimeoutRef.current = null;
                }
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                }
                timeoutRef.current = setTimeout(() => {
                  setCurrentIndex(index + 1);
                }, 200);
              }}
              onMouseLeave={() => {
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                  timeoutRef.current = null;
                }
                leaveTimeoutRef.current = setTimeout(() => {
                  setCurrentIndex(0);
                }, 200);
              }}
              className={clsx(
                "text-center transition-colors duration-1000 hover:text-white",
                currentIndex !== 0 &&
                  currentIndex !== index + 1 &&
                  "text-zinc-600",
              )}
            >
              {project.name}
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex justify-center">
        {navigationLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            <p className="px-4 py-1 hover:italic">{link.label}</p>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
}

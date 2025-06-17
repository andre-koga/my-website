"use client";

import Link from "next/link";
import { useState } from "react";
import Wrapper from "@/components/Wrapper";
import Banner from "@/components/Banner";
import Image from "next/image";

const randomText = [
  "I'm a software engineer with a passion for building products that help people live better lives.",
  "Breaking news: Koga learns that his personal website doesn't need to be fancy-looking.",
  "Do you like the rain effect? I do.",
  "This font? Manrope @ Google Fonts.",
];

const items = [
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Experience",
    link: "/experience",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  return (
    <Wrapper>
      <h1 className="text-5xl font-bold">André Koga</h1>
      <Banner
        onClick={() => {
          setIndex((prev) => (prev + 1) % randomText.length);
        }}
      >
        <p className="cursor-pointer text-center text-lg text-zinc-400 hover:italic">
          {randomText[index]}
        </p>
      </Banner>
      <ul className="flex flex-col gap-4 text-center">
        {items.map((item, index) => (
          <Link href={item.link} key={index}>
            <li className="hover:italic">{item.name}</li>
          </Link>
        ))}
      </ul>
      <hr className="h-px w-full border-zinc-800" />
      <div className="flex gap-6 text-sm">
        <Link
          href="https://github.com/andre-koga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="opacity-60 hover:opacity-100"
            src="/github.svg"
            alt="GitHub"
            width={98 / 5}
            height={96 / 5}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/andrehkoga/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="opacity-60 hover:opacity-100"
            src="/linkedin.svg"
            alt="LinkedIn"
            width={98 / 5}
            height={96 / 5}
          />
        </Link>
        <Link
          href="https://www.instagram.com/kogadraws/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="opacity-60 hover:opacity-100"
            src="/instagram.svg"
            alt="Instagram"
            width={98 / 5}
            height={96 / 5}
          />
        </Link>
      </div>
    </Wrapper>
  );
}

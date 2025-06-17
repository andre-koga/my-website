import InteractiveList from "@/components/InteractiveList";

const projects = [
  {
    name: "Projects",
    description: "What I've done and what I'm doing.",
    link: "/",
  },
  {
    name: "Blog / Poems",
    description:
      "Personal blog with poems and other writings. I'm not a poet, but I like to write.",
    link: "https://th.andrekoga.com/",
  },
  {
    name: "NOIC",
    description:
      "Biggest NGO in Brazil for scientific Olympiad preparation. I worked on the frontend and backend.",
    link: "https://noic.com.br",
  },
  {
    name: "CodeParty",
    description:
      "A website that catalogs different coding languages and their features. Still in development.",
    link: "https://codeparty.dev",
  },
  {
    name: "Flux Slides",
    description:
      "A dev-oriented slideshow app that uses Markdown and Latex formatting. Still in development.",
    link: "https://flux-slides.vercel.app/",
  },
  {
    name: "日本語動詞活用練習",
    description:
      "A Japanese verb conjugation practice app. Still in development.",
    link: "https://jp.andrekoga.com/",
  },
];

const navigationLinks = [
  { href: "/archive", label: "Archive" },
  { href: "/", label: "Go Back" },
];

export default function Projects() {
  return (
    <InteractiveList
      title="Projects"
      items={projects}
      navigationLinks={navigationLinks}
    />
  );
}

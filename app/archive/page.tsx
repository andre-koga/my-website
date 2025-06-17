import InteractiveList from "@/components/InteractiveList";

const projects = [
  {
    name: "Archive",
    description:
      "Some older projects that still deserve a place on my website.",
    link: "/archive",
  },
  {
    name: "Indie Games",
    description: "A collection of indie games I've published.",
    link: "https://andrekoga.itch.io/",
  },
  {
    name: "Personal Portfolio 2022",
    description: "One of my annual portfolio iterations, made in 2022.",
    link: "https://portfolio-koga-one.vercel.app/",
  },
  {
    name: "Personal Portfolio 2023",
    description: "One of my annual portfolio iterations, made in 2023.",
    link: "https://done-alpha.vercel.app/",
  },
  {
    name: "koga.one",
    description: "An old blog of mine that still works.",
    link: "https://next-koga.vercel.app/",
  },
  {
    name: "Numerus v1",
    description: "A quirky and esoteric fun-facts app about numbers.",
    link: "https://numerus.vercel.app/",
  },
  {
    name: "Numerus v2",
    description:
      "The continuation of the Numerus project. I might finish it one day.",
    link: "https://nu.andrekoga.com/",
  },
  {
    name: "Learn Android Studio",
    description: "Step by step guide to learn Android Studio.",
    link: "https://learn-android-studio.vercel.app/",
  },
];

const navigationLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/", label: "Go Back" },
];

export default function Archive() {
  return (
    <InteractiveList
      title="Archive"
      items={projects}
      navigationLinks={navigationLinks}
    />
  );
}

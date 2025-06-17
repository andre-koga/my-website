import InteractiveList from "@/components/InteractiveList";

const experience = [
  {
    name: "Experience",
    description: "Jobs and organizations I've worked for.",
    link: "/",
  },
  {
    name: "Harumi",
    description:
      "Software engineer, UI/UX developer, taking care of the collaboration tools and the editor.",
    link: "https://harumi.io",
  },
  {
    name: "InsightAI @ SLB",
    description:
      "Full-stack developer, prototyped the UI and built the entire NextJS app.",
    link: "https://github.com/andre-koga/InsightAI",
  },
  {
    name: "NOIC",
    description:
      "Managed dozens of volunteers and rebuilt the website from scratch including the design - twice.",
    link: "https://noic.com.br",
  },
  {
    name: "Big Data Big Impact @ GT",
    description:
      "Board member and panelist focused on teaching data analysis and machine learning.",
    link: "https://gtbigdatabigimpact.com/",
  },
];

export default function Experience() {
  return (
    <InteractiveList
      title="Experience"
      items={experience}
      navigationLinks={[{ href: "/", label: "Go Back" }]}
    />
  );
}

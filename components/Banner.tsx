import { MousePointerClick } from "lucide-react";

export default function Banner({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      className="relative flex h-[6rem] w-xs flex-col items-center justify-center rounded border-x-2 border-zinc-400 px-2 py-1 sm:w-sm"
      onClick={onClick}
    >
      {children}
      <MousePointerClick className="absolute right-0 bottom-0" size={16} />
    </button>
  );
}

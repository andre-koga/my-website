import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-center text-lg text-zinc-400">
        I probably f*cked up a link, didn't I?
      </p>
      <Link href="/">
        <p className="hover:italic">Go back to the home page</p>
      </Link>
    </div>
  );
}

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Funnel_Display } from "next/font/google";
import Rain from "../components/Rain";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: "700",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "André Koga",
  description: "My website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <Rain />
        {children}
        <footer className="bg-zinc-900 text-sm">
          <p className="pt-40 pb-20 text-center">
            © 2026 Andre Koga.
            <br />
            All rights reserved, whatever that means.
          </p>
          <div
            className={`${funnelDisplay.className} flex grow items-center p-4 text-7xl font-semibold tracking-tight text-blue-900 uppercase sm:text-8xl md:text-9xl`}
          >
            <p>K</p>
            <p className="mt-2 mr-1 -ml-1 grow rounded-full border-8 p-2 sm:-ml-2 sm:border-16 sm:p-4"></p>{" "}
            <p>ga</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

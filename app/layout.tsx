import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Rain from "../components/Rain";

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
        <p className="absolute right-4 bottom-4 text-xs text-zinc-600">
          {"Made with <3 by André Koga • 2025"}
        </p>
      </body>
    </html>
  );
}

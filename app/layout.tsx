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
      </body>
    </html>
  );
}

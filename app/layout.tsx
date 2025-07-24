import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rachid Oudouch - Web Developer",
  description:
    "Passionate web developer from Morocco specializing in modern web technologies. Building exceptional digital experiences with React, Next.js, and TypeScript.",
  keywords: [
    "web developer",
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "Morocco",
    "portfolio",
  ],
  authors: [
    { name: "Rachid Oudouch", url: "https://rachid-oudouch.vercel.app" },
  ],
  creator: "Rachid Oudouch",
  openGraph: {
    title: "Rachid Oudouch - Web Developer",
    description:
      "Passionate web developer from Morocco specializing in modern web technologies.",
    url: "https://rachid-oudouch.vercel.app",
    siteName: "Rachid Oudouch Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rachid Oudouch - Web Developer",
    description:
      "Passionate web developer from Morocco specializing in modern web technologies.",
    creator: "@r_oudouch",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

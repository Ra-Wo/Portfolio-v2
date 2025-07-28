import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

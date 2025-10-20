import type { Metadata } from "next";
import { Poppins, JetBrains_Mono, Pacifico } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
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
  authors: [{ name: "Rachid Oudouch", url: "https://oudouch.vercel.app" }],
  creator: "Rachid Oudouch",
  icons: {
    icon: "/avatar.png",
  },
  openGraph: {
    title: "Rachid Oudouch - Web Developer",
    description:
      "Passionate web developer from Morocco specializing in modern web technologies.",
    url: "https://oudouch.vercel.app",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${dmSans.variable} ${poppins.variable} ${jetbrainsMono.variable} ${pacifico.variable} antialiased min-h-screen bg-background text-foreground`}
        style={{ 
          fontFamily: `${dmSans.style.fontFamily}, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

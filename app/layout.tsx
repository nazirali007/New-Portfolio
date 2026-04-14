import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nazir Ali Siddiqui | Frontend Developer",
  description:
    "Portfolio of Nazir Ali Siddiqui — Frontend Developer specializing in React.js, Next.js, and TypeScript. 3+ years of experience building modern, scalable web applications.",
  keywords: [
    "Nazir Ali Siddiqui",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Nazir Ali Siddiqui" }],
  creator: "Nazir Ali Siddiqui",
  icons: {
    icon: [{ url: "/fabicon.svg", type: "image/svg+xml" }],
    shortcut: "/fabicon.svg",
    apple: "/fabicon.svg",
  },
  openGraph: {
    title: "Nazir Ali Siddiqui | Frontend Developer",
    description:
      "Frontend Developer specializing in React.js, Next.js, and TypeScript with 3+ years of experience.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "DJqToaKp8B8e0lX00QrCsFBBT32IBjL39IcPrvTMISQ",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

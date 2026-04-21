import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = "https://nazirali007.github.io";
const SITE_NAME = "Nazir Ali Siddiqui — Frontend Developer";
const SITE_DESC =
  "Frontend Developer with 3+ years building fast, accessible React and Next.js interfaces. Based in Gurgaon, India — open to full-time and contract work.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | Nazir Ali Siddiqui",
  },
  description: SITE_DESC,
  applicationName: "Nazir Ali — Portfolio",
  generator: "Next.js",
  keywords: [
    "Nazir Ali Siddiqui",
    "Nazir Ali",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Redux",
    "UI Developer",
    "Portfolio",
    "Web Developer",
    "Gurgaon",
    "India",
    "Frontend Engineer",
    "Hire Frontend Developer",
    "shadcn/UI",
    "Material UI",
  ],
  authors: [{ name: "Nazir Ali Siddiqui", url: SITE_URL }],
  creator: "Nazir Ali Siddiqui",
  publisher: "Nazir Ali Siddiqui",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/fabicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/fabicon.svg",
    apple: "/fabicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESC,
    images: [
      {
        url: "/images/ProfilePicture.png",
        width: 1200,
        height: 630,
        alt: "Nazir Ali Siddiqui — Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESC,
    images: ["/images/ProfilePicture.png"],
    creator: "@nazirali007",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "DJqToaKp8B8e0lX00QrCsFBBT32IBjL39IcPrvTMISQ",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4efe6" },
    { media: "(prefers-color-scheme: dark)", color: "#14110d" },
  ],
  colorScheme: "light dark",
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var d=t==='dark'||(!t&&m);if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nazir Ali Siddiqui",
  alternateName: "Nazir Ali",
  url: SITE_URL,
  image: `${SITE_URL}/images/ProfilePicture.png`,
  jobTitle: "Frontend Developer",
  description: SITE_DESC,
  email: "mailto:itsnazirali1010@gmail.com",
  telephone: "+91-7007297120",
  worksFor: {
    "@type": "Organization",
    name: "CaptureATrip",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurgaon",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/nazirali007",
    "https://www.linkedin.com/in/nazir-ali-siddiqui-385a3a174",
    "https://wa.me/917007297120",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Redux",
    "shadcn/UI",
    "Material UI",
    "Frontend Performance",
    "SEO",
    "Web Accessibility",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESC,
  inLanguage: "en-US",
  author: {
    "@type": "Person",
    name: "Nazir Ali Siddiqui",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}

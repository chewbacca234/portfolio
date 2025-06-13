import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../Header";
import Footer from "../Footer";
import { DarkModeProvider } from "@/providers";
import { getDictionary } from "./dictionaries.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CD Fullstack | Carine Dupuis",
  description:
    "Portfolio de Carine Dupuis, développeuse web et mobile fullstack MERN, formatrice en développement web. Découvrez mes projets, expériences et compétences en développement React, Node.js, et applications mobiles.",
  authors: [{ name: "Carine Dupuis", url: "https://github.com/chewbacca234/" }],
  applicationName: "Portfolio Carine Dupuis",
  creator: "Carine Dupuis | CD Fullstack",
  generator: "Next.js",
  keywords: [
    "react",
    "nextjs",
    "threejs",
    "portfolio",
    "fullstack",
    "web application",
    "mobile application",
    "responsive",
    "freelance",
    "formatrice développement web",
    "développeuse MERN stack",
    "expert React Native",
    "formation bootcamp",
    "développement fullstack",
  ],
  icons: "/images/favicon-CDFullstack.ico",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "CD Fullstack | Carine Dupuis",
    description:
      "Portfolio de Carine Dupuis, développeuse web et mobile fullstack MERN, formatrice en développement web",
    type: "website",
    locale: "fr_FR",
    siteName: "CD Fullstack Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CD Fullstack Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CD Fullstack | Carine Dupuis",
    description:
      "Portfolio de Carine Dupuis, développeuse web et mobile fullstack MERN, formatrice en développement web",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.cd-fullstack.dev",
    languages: {
      fr: "https://www.cd-fullstack.dev/fr",
      en: "https://www.cd-fullstack.dev/en",
      es: "https://www.cd-fullstack.dev/es",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Carine Dupuis",
  jobTitle: "Développeuse Fullstack & Formatrice",
  url: "https://www.cd-fullstack.dev/",
  sameAs: [
    "https://github.com/chewbacca234",
    "https://www.linkedin.com/in/dupuis-carine-7575b243/",
  ],
};

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { [lang: string]: string };
}>) {
  // console.log('lang:', lang);
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <DarkModeProvider>
          <Header dict={dict} lang={lang} />
          {children}
          <Footer dict={dict} />
        </DarkModeProvider>
      </body>
    </html>
  );
}

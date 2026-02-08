import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteName, siteUrl } from "@/utils/envExport";
import { Inter, Inter_Tight, Mulish } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteName}`,
  description: `${siteName} Online Learning Platform. Create your own online courses and sell them to the world.`,
  keywords: ["Skillsaint ", "Skillsaint "],

  openGraph: {
    title: `${siteName}`,
    description: `${siteName} Online Learning Platform. Create your own online courses and sell them to the world.`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Skillsaint  Online Learning Platform",
      },
    ],
  },

  twitter: {
    title: `${siteName}`,
    description: `${siteName} Online Learning Platform. Create your own online courses and sell them to the world.`,
    card: "summary_large_image",
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Skillsaint  Online Learning Platform",
      },
    ],
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
        className={`${interTight.variable} ${mulish.variable} ${inter.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

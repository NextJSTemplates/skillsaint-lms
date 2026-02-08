import Hero from "@/components/hero";
import Categories from "@/components/categories";
import OurAchievements from "@/components/ourAchievements";
import Courses from "@/components/courses";
import Features from "@/components/features";
import Testimonial from "@/components/testimonial";
import Cta from "@/components/cta";
import Blogs from "@/components/blogs";
import { siteName, siteUrl } from "@/utils/envExport";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home | ${siteName}`,
  description: "Skillsaint  Online Learning Platform",
  keywords: ["Skillsaint ", "Skillsaint "],
  alternates: {
    canonical: `${siteUrl}`,
  },
  openGraph: {
    title: "Skillsaint  Online Learning Platform",
    description: "Skillsaint  Online Learning Platform",
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
    title: "Skillsaint  Online Learning Platform",
    description: "Skillsaint  Online Learning Platform",
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

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <OurAchievements />
      <Courses />
      <Features />
      <Testimonial />
      <Cta />
      <Blogs />
    </main>
  );
};

export default Home;

import {
  CertificateCheckFill,
  ClockFill,
  GraduationHatFill,
} from "@/lib/icons";
import { ReactElement } from "react";

type featureType = {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
  thumbnail: string;
};
export const featuresData: featureType[] = [
  {
    id: 1,
    icon: <GraduationHatFill />,
    title: "Expert Instructors",
    description:
      "Earn from experienced professionals who bring real-world expertise to every lesson.",
    thumbnail: "/images/features/img-1.png",
  },
  {
    id: 2,
    icon: <ClockFill />,
    title: "Interactive Learning Experience",
    description:
      "Engage with video lessons, assignments, and quizzes learning fun and practical.",
    thumbnail: "/images/features/img-2.png",
  },
  {
    id: 3,
    icon: <CertificateCheckFill />,
    title: "Recognized Certificates",
    description:
      "Boost your portfolio with verified certificates after completing courses.",
    thumbnail: "/images/features/img-3.png",
  },
];

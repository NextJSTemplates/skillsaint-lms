
export type CourseType = {
  _id: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  instructor: {
     name: string;
  };
  totalLearners: number;
  isCertificationProvide: boolean;
  price: number;
  discountPrice: number;
  status: "Ongoing" | "Completed";
  slug: {
    current: string;
  };
  level: string;
  overview: [];
  duration?: number; // in minutes
  lessonsCount?: number;
};

export type CategoryType = {
  _id: string;
  title: string;
  description: string;
  slug: {
    current: string;
  };
  courseCount: number;
  image?: string;
};

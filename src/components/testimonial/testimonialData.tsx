type testimonialType = {
  id: number;
  user: {
    name: string;
    position: string;
    image: string;
  };
  review?: string;
  videoThumb?: string;
  videoUrl?: string;
  isVideoReview: boolean;
};

export const testimonialData: testimonialType[] = [
  {
    id: 1,
    user: {
      name: "James Liu",
      position: "Frontend developer",
      image: "/images/testimonial/user-1.png",
    },
    isVideoReview: false,
    review:
      "This platform's courses on advanced React and modern CSS are fantastic. The content is current, practical, and taught by real experts. It's my go-to for staying ahead and sharpening my skills",
  },
  {
    id: 2,
    user: {
      name: "Jeroome bell",
      position: "Digital Marketer",
      image: "/images/testimonial/user-2.png",
    },
    isVideoReview: true,
    videoUrl: "https://www.youtube.com/watch?v=ssVGeSf8oFI",
    videoThumb: "/images/testimonial/video-thumb-1.png",
  },
  {
    id: 3,
    user: {
      name: "Rose harry",
      position: "UI/UX Designer",
      image: "/images/testimonial/user-3.png",
    },
    isVideoReview: false,
    review:
      "The 'UX/UI Design' certification path was incredibly comprehensive, and the lessons were practical from day one. I went from a total beginner to building a portfolio that got me hired. ",
  },
  {
    id: 4,
    user: {
      name: "Jeroome bell",
      position: "Digital Marketer",
      image: "/images/testimonial/user-4.png",
    },
    isVideoReview: true,
    videoUrl: "https://www.youtube.com/watch?v=ssVGeSf8oFI",
    videoThumb: "/images/testimonial/video-thumb-2.png",
  },
  {
    id: 4,
    user: {
      name: "Ruben Levin",
      position: "UI/UX Designer",
      image: "/images/testimonial/user-5.png",
    },
    isVideoReview: false,
    review:
      "The instructor explains every topic in a simple way. The projects helped me learn by doing, and the pace was perfect for beginners. Highly recommended for anyone starting out.",
  },
];

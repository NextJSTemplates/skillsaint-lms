import {
  Briefcase,
  DesktopComputer,
  PainBrush,
  ShieldCheck,
  Sparkles,
  Video,
} from "@/lib/icons";
import { CategoryType } from "@/types/CategoryType";
import Image from "next/image";
import { ReactElement } from "react";

function categoryIconFinder(category: string) {
  const icons: Record<string, ReactElement> = {
    "Web Development": <DesktopComputer />,
    "UI/UX Design": <PainBrush />,
    "Digital Marketing": <Briefcase />,
    "Video Editing": <Video />,
    "Cyber Security": <ShieldCheck />,
    "Artificial Intelligence": <Sparkles />,
  };
  return icons[category];
}

const CategoryCard = ({ category }: { category: CategoryType }) => {
  return (
    <div className="rounded-3xl border-2 border-transparent bg-primary px-5 pt-5 pb-6 transition-all duration-500 hover:border-purple-500 sm:px-7 sm:pt-7 sm:pb-8">
      <div className="mb-9 flex items-center justify-between sm:mb-11 lg:mb-15">
        <div
          className="flex h-13.5 w-13.5 items-center justify-center rounded-full shadow-lg"
          style={{
            background:
              "linear-gradient(var(--primary), var(--primary)) padding-box, linear-gradient(to bottom, var(--gray-200), var(--primary)) border-box",
            borderRadius: "999px",
            border: "1.125px solid transparent",
          }}
        >
          {category.image ? (
            <Image
              src={category.image}
              alt={category.title}
              width={28}
              height={28}
            />
          ) : (
            categoryIconFinder(category.title)
          )}
        </div>
        <div className="inline-flex rounded-full bg-gray-50 px-3 py-1">
          <p className="text-sm leading-5 font-medium tracking-sm text-secondary">
            {category.courseCount > 1
              ? category.courseCount + " Courses"
              : category.courseCount + " Course"}
          </p>
        </div>
      </div>
      <h5 className="text-lg font-medium sm:text-xl lg:text-2xl lg:leading-8">
        {category.title}
      </h5>
      <p className="mt-3 leading-6 tracking-base text-secondary line-clamp-2">
        {category.description}
      </p>
    </div>
  );
};

export default CategoryCard;

import {
  BookOpen,
  GraduationHat,
  InstagramSmIcon,
  LinkedinSmIcon,
  Star,
  TwitterSmIcon,
} from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";

const InstructorInfo = () => {
  return (
    <div>
      <h4 className="font-mulish text-xl font-bold sm:text-2xl sm:leading-8">
        About The Instructor
      </h4>
      <div className="mt-5 flex flex-col gap-x-2 rounded-2xl bg-primary p-2 sm:flex-row sm:items-center">
        <div className="shrink-0 rounded-xl sm:w-55.25">
          <Image
            width={221}
            height={285}
            sizes="100vw"
            src={"/images/author-course-details.png"}
            alt="img"
            className="w-full rounded-xl object-cover sm:h-71.25"
          />
        </div>
        <div className="space-y-5 py-5 pr-5 pl-3">
          <div>
            <h6 className="leading-6 font-medium tracking-base">
              Jake Thompson
            </h6>
            <p className="mt-1 text-sm leading-5 tracking-sm text-secondary capitalize">
              UI/UX Design
            </p>
          </div>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <li className="flex items-center gap-1.5">
              <span className="flex items-center justify-center text-yellow-400">
                <Star className="size-4" />
              </span>
              <span className="text-sm leading-5 tracking-sm text-secondary">
                {"5.0"} Rating
              </span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="flex h-4.5 w-4.5 items-center justify-center text-secondary">
                <GraduationHat />
              </span>
              <span className="text-sm leading-5 tracking-sm text-secondary">
                15.4k Students
              </span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="flex h-4.5 w-4.5 items-center justify-center text-secondary">
                <BookOpen />
              </span>
              <span className="text-sm leading-5 tracking-sm text-secondary">
                8 Course
              </span>
            </li>
          </ul>
          <p className="line-clamp-5 text-sm leading-5 tracking-sm text-secondary">
            Award-winning designer with experience at top tech companies.
            Specializes in user-centered design and design systems.
          </p>
          <ul className="flex items-center gap-x-3">
            <li>
              <Link
                target="_blank"
                href={"#"}
                className="text-secondary transition-all duration-500 hover:text-purple-500"
              >
                <TwitterSmIcon />
              </Link>
            </li>

            <li>
              <Link
                target="_blank"
                href={"#"}
                className="text-secondary transition-all duration-500 hover:text-purple-500"
              >
                <LinkedinSmIcon />
              </Link>
            </li>

            <li>
              <Link
                target="_blank"
                href={"#"}
                className="text-secondary transition-all duration-500 hover:text-purple-500"
              >
                <InstagramSmIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstructorInfo;

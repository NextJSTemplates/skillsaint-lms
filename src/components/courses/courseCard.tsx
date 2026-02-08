"use client";
import { ArrowRight, BookOpen, Clock, GraduationHat, Star } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { CourseType } from "@/types/CourseType";
import { calculateMinutes, formatViews } from "@/lib/utils";

const CourseCard = ({ course }: { course: CourseType }) => {

  return (
    <div className="rounded-3xl bg-primary px-2 pt-2 pb-6">
      <div className="relative">
        <Image
          width={373}
          height={218}
          sizes="100vw"
          src={course.thumbnail}
          alt={course.title}
          className="w-full rounded-2xl"
        />
        <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-primary pt-0.5 pr-2 pb-0.5 pl-1">
            <div className="flex h-4 w-4 items-center justify-center text-yellow-400">
              <Star className="size-4" />
            </div>
            <small className="text-sm leading-5 tracking-sm">
              {'5.0'}
            </small>
          </div>
      </div>
      <div className="flex h-1/2 flex-col justify-between pt-5 sm:px-4">
        <ul className="flex flex-wrap items-center gap-2.5 pb-4">
          <li className="flex max-h-6.5 items-center gap-1 rounded-full pt-1 pb-1 leading-4.5 text-secondary">
            <BookOpen className="size-4 stroke-[0.75]" />
            <span className="text-xs leading-4.5">{course.lessonsCount} Lessons</span>
          </li>
          <li className="flex max-h-6.5 items-center gap-1 rounded-full pt-1 pb-1 leading-4.5 text-secondary">
            <Clock className="size-4" />
            <span className="text-xs leading-4.5">{calculateMinutes(course.duration || 0)}</span>
          </li>
          {course.totalLearners ? (
            <li className="flex max-h-6.5 items-center gap-1 rounded-full pt-1 pb-1 leading-4.5 text-secondary">
              <GraduationHat className="size-4" />
              <span className="text-xs leading-4.5">
                {formatViews(course.totalLearners) > "1"
                  ? `${formatViews(course.totalLearners)} learners`
                  : `${formatViews(course.totalLearners)} learner`}
              </span>
            </li>
          ) : null}
        </ul>

        <Link
          href={`/courses/${course.slug.current}`}
          className="grow font-medium transition-all duration-500 hover:text-purple-500 md:text-lg md:leading-7"
        >
          {course.title}
        </Link>
        <small className="mt-2 block text-sm leading-5 tracking-sm text-secondary">
          By {course.instructor.name}
        </small>

        <div className="mt-7 flex items-center justify-between">
          <h6 className="text-lg leading-7 font-medium">
            <span>${(course.discountPrice || course.price).toFixed(2)} </span>
            {course.discountPrice && (
              <del className="text-gray-400">${course.price.toFixed(2)}</del>
            )}
          </h6>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="max-w-39.5 pr-4"
          >
            <Link href={`/courses/${course.slug.current}`}>
              Enroll Now
              <span className="relative flex shrink-0 items-center justify-center overflow-hidden">
                <span className="relative flex h-full w-full items-center justify-center">
                  <span className="relative transition-transform duration-300 ease-in-out group-hover:translate-x-10">
                    <ArrowRight className="size-5" />
                  </span>
                  <span className="absolute -translate-x-10 transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                    <ArrowRight className="size-5" />
                  </span>
                </span>
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

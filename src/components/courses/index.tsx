import SectionTitle from "../sectionTitle";
import Button from "../ui/button";
import Link from "next/link";
import CourseCard from "./courseCard";
import ButtonArrow from "../ui/buttonArrow";
import { CourseType } from "@/types/CourseType";
import { coursesData } from "./courseData";

const Courses =  () => {
  const courses = coursesData;

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-x-3 gap-y-5">
          <SectionTitle
            subTitle="Our Courses"
            description="Grow your skills with expert-led lessons designed to help you achieve your goals — anytime, anywhere."
          >
            Our Popular Courses
          </SectionTitle>
          <Button
            asChild
            size="lg"
            className="py-1.5 pr-1.5 pl-6 max-sm:w-full"
          >
            <Link href={"/courses"}>
              <span className="w-full text-center">View All Courses</span>
              <ButtonArrow />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 pt-11 sm:grid-cols-2 sm:pt-14 lg:grid-cols-3 lg:pt-16">
          {courses.slice(0, 6).map((course: CourseType) => {
            return <CourseCard key={course._id} course={course} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;

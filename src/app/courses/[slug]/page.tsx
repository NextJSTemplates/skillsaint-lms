import SectionTitle from "@/components/sectionTitle";
import Button from "@/components/ui/button";
import ButtonArrow from "@/components/ui/buttonArrow";
import {
  BookOpen,
  Clock,
  FileAlt,
  GraduationHat,
  LifeRing,
  SingleStrong,
} from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";
import CourseContent from "./courseContent";
import InstructorInfo from "./instructorInfo";
import Cta from "@/components/cta";
import CoursseReview from "./coursseReview";
import AddReview from "./addReview";
import BackButton from "./backButton";

const CourseDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  return (
    <main>
      <section className="bg-gray-50 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pb-28">
        <div className="container">
          <div className="xl:px-24">
            <BackButton />
            <div className="mt-10 flex flex-col items-start justify-between gap-x-5 gap-y-8 lg:flex-row">
              <div className="w-full shrink space-y-12 lg:max-w-150">
                <div>
                  <SectionTitle
                    subTitle="Courses Details"
                    description={
                      "Grow your skills with expert-led lessons designed to help you achieve your goals — anytime, anywhere."
                    }
                    descriptionClass="max-w-full"
                  >
                    Mastering UI/UX Design Principles for Modern Websites
                  </SectionTitle>
                  {/*  instructor name, image and course lavel*/}
                  <div className="flex items-center justify-between pt-8">
                    <div className="flex items-center gap-2">
                      <Image
                        width={32}
                        height={32}
                        src={"/images/instructor/avatar.png"}
                        alt="img"
                        className="size-8 rounded-full object-cover"
                      />
                      <Link
                        href={"#"}
                        className="leading-6 tracking-base text-secondary transition-all duration-500 hover:text-purple-500"
                      >
                        Jake Thompson
                      </Link>
                    </div>
                    <div className="flex items-center gap-1">
                      <SingleStrong />
                      <span className="leading-6 text-secondary capitalize">
                        Intermediate
                      </span>
                    </div>
                  </div>
                </div>
                {/* thumb */}
                <div>
                  <Image
                    width={586}
                    height={343}
                    sizes="100vw"
                    src={"/images/courses/img-1.png"}
                    alt="img"
                    className="w-full rounded-2xl"
                  />
                </div>

                {/* Overview */}
                <div>
                  <h4 className="font-mulish text-xl font-bold sm:text-2xl sm:leading-8">
                    Overview
                  </h4>
                  <div className="mt-5 space-y-4 text-sm leading-5 tracking-sm text-secondary">
                    <p>
                      This comprehensive course is designed to help learners
                      build a strong foundation in UI/UX Design — from the
                      basics of design thinking to mastering advanced tools like
                      Figma. Across 48 lessons and over 12 hours of hands-on
                      learning, students will gain real-world skills to design
                      beautiful, user-friendly digital experiences.
                    </p>
                    <p>
                      By the end, you’ll have a solid understanding of the
                      entire design workflow and the confidence to build your
                      own projects or pursue a professional career in UI/UX
                      design.
                    </p>
                  </div>
                </div>
                <CourseContent />
                <InstructorInfo />
                <CoursseReview />
                <AddReview />
              </div>
              {/* right side  */}
              <div className="sticky top-24 w-full lg:max-w-93.25">
                <div className="rounded-3xl bg-primary px-6 pt-7 pb-8 shadow-card">
                  <p className="text-sm leading-5 tracking-sm text-secondary">
                    Course Pricing
                  </p>
                  <div className="mt-1.5 flex items-center gap-3">
                    <h3 className="text-[clamp(1.5rem,1.3533rem+0.6522vw,1.875rem)] leading-9.5 font-medium">
                      $29.99
                    </h3>
                    <del className="text-xl text-gray-400 lg:text-2xl lg:leading-7.5">
                      $50.00
                    </del>
                  </div>
                  <div className="mt-6">
                    <p className="leading-6 font-medium tracking-base">
                      This Course includes:
                    </p>
                    <ul className="space-y-3 pt-4">
                      <li className="flex items-center gap-1.5 text-secondary">
                        <span className="flex h-4.5 w-4.5 items-center justify-center">
                          <BookOpen className="size-4.5" />
                        </span>
                        <span className="text-sm leading-5 tracking-sm">
                          48 Lessons
                        </span>
                      </li>
                      <li className="flex items-center gap-1.5 text-secondary">
                        <span className="flex h-4.5 w-4.5 items-center justify-center">
                          <Clock className="size-4.5" />
                        </span>
                        <span className="text-sm leading-5 tracking-sm">
                          12h 30m
                        </span>
                      </li>

                      <li className="flex items-center gap-1.5 text-secondary">
                        <span className="flex h-4.5 w-4.5 items-center justify-center">
                          <GraduationHat className="size-4.5" />
                        </span>
                        <span className="text-sm leading-5 tracking-sm">
                          1.2k learners learners
                        </span>
                      </li>

                      <li className="flex items-center gap-1.5 text-secondary">
                        <span className="flex h-4.5 w-4.5 items-center justify-center">
                          <FileAlt />
                        </span>
                        <span className="text-sm leading-5 tracking-sm">
                          Complete Certification
                        </span>
                      </li>

                      <li className="flex items-center gap-1.5 text-secondary">
                        <span className="flex h-4.5 w-4.5 items-center justify-center">
                          <LifeRing />
                        </span>
                        <span className="text-sm leading-5 tracking-sm">
                          Lifetime Access
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="mt-8 w-full py-1.5 pr-1.5 pl-6"
                  >
                    <Link href={`#`}>
                      <span className="w-full text-center">Enroll Now</span>
                      <ButtonArrow />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta className="pb-16 sm:pb-20 lg:pb-28" />
    </main>
  );
};

export default CourseDetails;

import Button from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { WheatLeavesLeft, WheatLeavesRight } from "@/lib/icons";
import ButtonArrow from "../ui/buttonArrow";

const Hero = () => {
  return (
    <section
      className="overflow-x-hidden bg-cover bg-center bg-no-repeat pt-11 pb-[87px] sm:pt-16 lg:pt-20"
      style={{ backgroundImage: `url('/images/hero/bg-img.png')` }}
    >
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <div className="mb-3 flex items-center gap-2">
            <span>
              <WheatLeavesLeft />
            </span>
            <div className="flex items-center -space-x-[7.5px]">
              <Image
                width={26}
                height={26}
                src={"/images/hero/avatar.png"}
                alt="avatar"
                sizes="100vw"
                className="border border-primary rounded-full size-6.5"
              />
              <Image
                width={26}
                height={26}
                src={"/images/hero/avatar-1.png"}
                alt="avatar"
                sizes="100vw"
                className="border border-primary rounded-full size-6.5"
              />
              <Image
                width={26}
                height={26}
                src={"/images/hero/avatar-2.png"}
                alt="avatar"
                sizes="100vw"
                className="border border-primary rounded-full size-6.5"
              />
            </div>
            <p className="text-sm leading-5 font-medium text-secondary">
              85k Happy learner
            </p>
            <span>
              <WheatLeavesRight />
            </span>
          </div>
          <h1 className="text-[clamp(2.25rem,1.663rem+2.6087vw,3.75rem)] leading-[1.2] font-bold tracking-[-1.2px]">
            Learn New Skills.{" "}
            <span className="block text-gray-400">Create Your Future.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[629px] text-center leading-[1.5] text-secondary sm:text-lg lg:text-xl">
            Discover hundreds of curated lessons to boost your career, all in
            one place. Learn at your own pace from industry experts
          </p>
          <div className="mt-12 flex flex-col gap-4 max-sm:w-full sm:flex-row">
            <Button
              asChild
              size="lg"
              className="py-1.5 pr-1.5 pl-6 max-sm:w-full"
            >
              <Link href={"/courses"}>
                <span className="w-full">Browse Course</span>
                <ButtonArrow />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full bg-primary sm:max-w-[133px]"
            >
              <Link href={"/about"}>
                <span>Learn More</span>
              </Link>
            </Button>
          </div>
          {/* image gallery */}
          <div className="pt-20 sm:pt-[154px]">
            <div className="mx-auto grid max-w-[1048px] grid-cols-2 lg:grid-cols-4">
              <div className="relative z-[1] h-[272px] w-[261px] rotate-[7deg] rounded-[14.7px] bg-primary p-1.5 shadow-2xl">
                <Image
                  width={261}
                  height={272}
                  sizes="100vw"
                  src={"/images/hero/img-1.png"}
                  alt="img"
                />
              </div>
              <div className="h-[272px] w-[261px] -rotate-[15deg] rounded-[14.7px] bg-primary p-1.5 shadow-2xl">
                <Image
                  width={261}
                  height={272}
                  sizes="100vw"
                  src={"/images/hero/img-2.png"}
                  alt="img"
                  className="rounded-[14.7px]"
                />
              </div>
              <div className="hidden h-[272px] w-[261px] rotate-[7deg] rounded-[14.7px] bg-primary p-1.5 shadow-2xl sm:block">
                <Image
                  width={261}
                  height={272}
                  sizes="100vw"
                  src={"/images/hero/img-3.png"}
                  alt="img"
                  className="rounded-[14.7px]"
                />
              </div>
              <div className="hidden h-[272px] w-[261px] -rotate-[7.85deg] rounded-[14.7px] bg-primary p-1.5 shadow-2xl sm:block">
                <Image
                  width={261}
                  height={272}
                  sizes="100vw"
                  src={"/images/hero/img-4.png"}
                  alt="img"
                  className="rounded-[14.7px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

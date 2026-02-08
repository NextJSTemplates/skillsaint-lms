import Button from "../ui/button";
import Link from "next/link";
import ButtonArrow from "../ui/buttonArrow";
import { cn } from "@/lib/utils";

const Cta = ({ className }: { className?: string }) => {
  return (
    <section className={cn("pt-16 sm:pt-20 lg:pt-[112px]", className)}>
      <div className="container">
        <div
          className="rounded-[36px] bg-cover bg-center bg-no-repeat px-4 py-16 sm:py-24 lg:py-[120px]"
          style={{ backgroundImage: `url('/images/cta/bg-img.png')` }}
        >
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[clamp(2rem,1.6087rem+1.7391vw,3rem)] leading-[1.25] font-semibold tracking-[-0.96px]">
              Start Your Learning Journey Today
            </h2>
            <p className="mt-3 max-w-[426px] tracking-sm text-secondary sm:text-lg sm:leading-7">
              Gain new skills, explore creative fields, and achieve your career
              goals — all in one platform.
            </p>
            <div className="mt-12 flex flex-col items-center gap-4 max-sm:w-full sm:flex-row">
              <Button
                asChild
                size="lg"
                className="py-1.5 pr-1.5 pl-6 max-lg:w-full"
              >
                <Link href={"/courses"}>
                  <span className="w-full"> Browse Course</span>
                  <ButtonArrow />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full bg-primary sm:max-w-[133px]"
              >
                <Link href={"/sign-up"}>
                  <span>Get Started</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

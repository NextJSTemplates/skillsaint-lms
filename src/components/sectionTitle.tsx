import { CircleStop } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  subTitle?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClass?: string;
  subTitleClass?: string;
};
const SectionTitle = ({
  children,
  subTitle,
  description,
  className,
  titleClassName,
  descriptionClass,
  subTitleClass,
}: SectionTitleProps) => {
  return (
    <div className={cn("", className)}>
      {subTitle ? (
        <div
          className={cn(
            "btn-gradient-border mb-4 inline-flex max-h-7 items-center gap-[4.5px] rounded-full py-1 pr-3 pl-1.5 text-secondary",
            subTitleClass,
          )}
        >
          <div className="flex h-4 w-4 items-center justify-center">
            <CircleStop />
          </div>
          <p className="text-sm leading-5 font-medium tracking-sm">
            {subTitle}
          </p>
        </div>
      ) : null}
      <h2
        className={cn(
          "text-[clamp(2rem,1.6087rem+1.7391vw,3rem)] `leading-tight font-semibold tracking-[-0.96px]",
          titleClassName,
        )}
      >
        {children}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-119.5 leading-6 tracking-base text-secondary",
            descriptionClass,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionTitle;

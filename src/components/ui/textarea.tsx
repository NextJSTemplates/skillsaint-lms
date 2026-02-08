import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type TextAreaProps = ComponentProps<"textarea"> & {
  dataState?: "error" | "default" | "success";
};

const Textarea = ({ className, ref, dataState, ...props }: TextAreaProps) => {
  return (
    <textarea
      data-state={dataState}
      ref={ref}
      className={cn(
        "min-h-[132px] w-full rounded-2xl border border-gray-200 px-4 py-3.5 text-sm leading-5 tracking-sm shadow-xs outline-0 placeholder:text-gray-400 focus:border-purple-200 focus:shadow-[0_0_0_4px_rgba(70,95,255,0.12)] data-[state=error]:border-[#FB3748]",
        className,
      )}
      {...props}
    />
  );
};

export default Textarea;

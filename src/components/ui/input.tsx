import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  dataState?: "error" | "default" | "success";
};

const Input = ({ type, className, ref, dataState, ...props }: InputProps) => {
  return (
    <input
      data-state={dataState}
      type={type}
      ref={ref}
      className={cn(
        "h-11 w-full rounded-[999px] border border-gray-200 bg-primary px-5 py-2.5 text-sm leading-5 tracking-sm shadow-xs outline-0 placeholder:text-gray-400 focus:border-purple-200 focus:shadow-[0_0_0_4px_rgba(70,95,255,0.12)] data-[state=error]:border-[#FB3748] sm:h-12",
        className,
      )}
      {...props}
    />
  );
};

export default Input;

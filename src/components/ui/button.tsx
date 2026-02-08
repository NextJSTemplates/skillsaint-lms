"use client";
import { Slot } from "@/lib/slot";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, RefObject } from "react";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full text-sm tracking-sm font-medium leading-5 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#7D52F4] text-primary hover:bg-purple-600",
        outline:
          "shadow-xs border border-gray-200 text-secondary bg-transparent hover:bg-gray-50 hover:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-3",
        lg: "sm:h-12 h-11 px-6 py-3 text-base tracking-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  ref?: RefObject<any>;
}

const Button = ({
  className,
  variant,
  size,
  children,
  asChild,
  ref,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </Comp>
  );
};

export default Button;

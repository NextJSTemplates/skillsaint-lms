import { ArrowRight } from "@/lib/icons";

const ButtonArrow = () => {
  return (
    <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary text-purple-500">
      <span className="relative flex h-full w-full items-center justify-center">
        <span className="absolute transition-transform duration-300 ease-in-out group-hover:translate-x-10">
          <ArrowRight />
        </span>
        <span className="absolute -translate-x-10 transition-transform duration-300 ease-in-out group-hover:translate-x-0">
          <ArrowRight />
        </span>
      </span>
    </span>
  );
};

export default ButtonArrow;

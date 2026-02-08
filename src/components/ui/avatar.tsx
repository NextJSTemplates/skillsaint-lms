import { cn } from "@/lib/utils";
import Image from "next/image";

const Avatar = ({
  img,
  name,
  className,
}: {
  img: string;
  name: string;
  className?: string;
}) => {
  return (
    <div className={cn("rounded-full bg-gray-100 size-12", className)}>
      {img ? (
        <img
          width={48}
          height={48}
          src={img || ""}
          alt={name}
          className={cn("size-full rounded-full bg-cover")}
        />
      ) : (
        <div className="flex size-full items-center justify-center rounded-full">
          <span className="text-xl font-medium tracking-base">
            {name.charAt(0).toUpperCase()}
          </span>
        </div>
      )}
    </div>
  );
};

export default Avatar;

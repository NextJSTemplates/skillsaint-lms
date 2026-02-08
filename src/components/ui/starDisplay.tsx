import { HalfStar, Star } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface StarDisplayProps {
  value: number; // e.g. 4.5, 3, 5
  totalStars?: number;
  className?: string;
}

export function StarDisplay({
  value,
  totalStars = 5,
  className,
}: StarDisplayProps) {
  return (
    <ul className={cn("flex items-center -space-x-px", className)}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        const isFull = starValue <= Math.floor(value);
        const isHalf = !isFull && value + 0.5 >= starValue;

        return (
          <li key={index} className="relative">
            <Star
              className={cn(
                "size-5 text-gray-300",
                isFull && "fill-yellow-400 text-yellow-400",
                isHalf && "text-transparent",
              )}
            />
            {isHalf && (
              <div className="absolute inset-0 w-1/2 overflow-hidden">
                <HalfStar className="size-5 fill-yellow-400 text-yellow-400" />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

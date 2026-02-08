import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CourseType } from "@/types/CourseType";

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(...inputs));
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
export const formatViews = (views: number) => {
  if (views >= 1_000_000) {
    return `${(views / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (views >= 1_000) {
    return `${(views / 1_000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return views.toString();
};


export function calculateMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
}

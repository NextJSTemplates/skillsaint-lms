"use client";

import { categoryData } from "@/components/categories/categoryData";
import CourseCard from "@/components/courses/courseCard";
import Input from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon } from "@/lib/icons";
import { CourseType } from "@/types/CourseType";

const priceFilter = [
  {
    label: "$0-$50",
    value: "0-50",
  },
  {
    label: "$50-$100",
    value: "50-100",
  },
  {
    label: "$100-$200",
    value: "100-200",
  },
  {
    label: "$200-$500",
    value: "200-500",
  },
  {
    label: "$500-$1000",
    value: "500-1000",
  },
];

const sorting = [
  {
    label: "Top Rated",
    value: "top-rated",
  },
  {
    label: "Newly Added",
    value: "newly-added",
  },
  {
    label: "Price Low to high",
    value: "price-low-to-high",
  },
  {
    label: "Price High to low",
    value: "price-high-to-low",
  },
];

const CoursesDsiplay = ({ courses }: { courses: CourseType[] }) => {
  return (
    <div className="bg-gray-50 pt-11 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-28">
      <div className="container">
        {/* search and sorting  */}
        <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-4">
          <div className="relative h-11 w-full sm:h-12 sm:max-w-85">
            <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400">
              <SearchIcon />
            </span>
            <Input
              placeholder="Search course here..."
              className="h-full bg-primary pr-7 pl-11"
            />
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <Select>
              <SelectTrigger>
                <SelectValue
                  placeholder="Category"
                  placeholderClass="text-secondary"
                />
              </SelectTrigger>
              <SelectContent>
                {categoryData.map((item) => (
                  <SelectItem key={item._id} value={item.title}>
                    {item.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue
                  placeholder="Price"
                  placeholderClass="text-secondary"
                />
              </SelectTrigger>
              <SelectContent>
                {priceFilter.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue
                  placeholder="Sorting"
                  placeholderClass="text-secondary"
                />
              </SelectTrigger>
              <SelectContent>
                {sorting.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* courses  */}
        <div className="grid gap-6 pt-11 pb-11 sm:grid-cols-2 sm:pb-14 lg:grid-cols-3 lg:pb-16">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesDsiplay;

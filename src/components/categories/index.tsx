import { CategoryType } from "@/types/CategoryType";
import SectionTitle from "../sectionTitle";

import CategoryCard from "./categoryCard";
import { categoryData } from "./categoryData";

const Categories = async () => {
  const categories: CategoryType[] = categoryData;

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
      <div className="container">
        <SectionTitle subTitle="Categories">Explore Category</SectionTitle>
        <div className="grid gap-4 pt-11 sm:grid-cols-2 sm:pt-14 lg:grid-cols-3 lg:pt-16">
          {categories.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

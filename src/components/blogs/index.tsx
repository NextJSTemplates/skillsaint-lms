import SectionTitle from "../sectionTitle";
import Button from "../ui/button";
import Link from "next/link";
import BlogCard from "./blogCard";
import ButtonArrow from "../ui/buttonArrow";
import { blogData } from "./blogData";

const Blogs = () => {
  const blogs =blogData
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-x-3 gap-y-5">
          <SectionTitle
            subTitle="Blogs"
            description="Get expert insights, coding tutorials, career advice, and industry deep dives to fuel your learning journey. "
          >
            The Skillsaint Knowledge Hub
          </SectionTitle>
          <Button
            asChild
            size="lg"
            className="py-1.5 pr-1.5 pl-6 max-sm:w-full"
          >
            <Link href={"/blog"}>
              <span className="w-full text-center">View All Articles</span>
              <ButtonArrow />
            </Link>
          </Button>
        </div>
        <div className="grid gap-8 pt-11 sm:grid-cols-2 sm:pt-14 lg:grid-cols-3 lg:pt-16">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

import Image from "next/image";
import Link from "next/link";
import { BlogType } from "@/types/BlogType";
import { formatDate } from "@/lib/utils";

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <div>
      <div>
        <Image
          width={384}
          height={216}
          sizes="100vw"
          src={blog.featureImage || ""}
          alt="img"
          className="w-full rounded-2xl"
        />
      </div>
      <div className="pt-6">
        <Link
          href={`#`}
          className="trani text-lg font-semibold duration-500 hover:text-purple-500 sm:text-xl lg:text-2xl lg:leading-8"
        >
          {blog.title}
        </Link>
        <p className="mt-3 line-clamp-2 leading-6 tracking-base text-secondary">
          {blog.shortDescription}
        </p>
        <div className="flex items-center gap-3 pt-7">
          <div className="flex items-center gap-2">
            <Image
              width={32}
              height={32}
              src={blog.author.photo|| ""}
              alt={blog.author.name}
              className="rounded-full size-8"
            />
            <Link
              href={"#"}
              className="text-sm leading-5 tracking-sm text-secondary transition-all duration-500 hover:text-purple-500"
            >
              {blog.author.name}
            </Link>
          </div>
          <span className="block h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300"></span>
          <p className="text-sm leading-5 tracking-sm text-secondary">
            {formatDate(blog.date)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

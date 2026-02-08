"use client";
import Link from "next/link";
import { MenuType } from "./index";
import { ChevronDown } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navigation = ({ data }: { data: MenuType[] }) => {
  const pathName = usePathname();
  return (
    <nav className="hidden xl:block">
      <ul className="flex items-center">
        {data.map(({ href, id, label, subMenu }) => {
          // Check if current path matches parent or any submenu item
          const isActive =
            pathName === href ||
            subMenu?.some((item) => pathName === item.href);

          return (
            <li key={id} className="group/dropdown relative">
              <Link
                href={href}
                className={cn(
                  "inline-flex items-center gap-x-1 rounded-xl px-4.5 py-2 leading-6 font-medium tracking-base transition-all duration-500 group-hover/dropdown:text-purple-500",
                  isActive ? "text-purple-500" : "text-secondary",
                )}
              >
                {label}
                {subMenu?.length && <ChevronDown className="size-5" />}
              </Link>
              {subMenu?.length && (
                <ul className="absolute right-0 z-40 hidden min-w-54.25 rounded-2xl bg-primary px-1.5 py-2 shadow-2xl group-hover/dropdown:block">
                  {subMenu.map(({ href, id, label }) => (
                    <li key={id}>
                      <Link
                        href={href}
                        className={cn(
                          "flex rounded-lg px-3 py-2.5 text-sm leading-6 font-medium tracking-base transition-all duration-500 hover:bg-gray-50 hover:text-purple-500",
                          pathName === href
                            ? "bg-gray-50 text-purple-500"
                            : "text-secondary",
                        )}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;

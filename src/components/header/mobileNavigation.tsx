"use client";
import { MouseEvent, useEffect, useState } from "react";
import { MenuType } from ".";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CloseIcon,
  MenuIcon,
  PlusIcon,
} from "@/lib/icons";
import { cn } from "@/lib/utils";
import Button from "../ui/button";
import { usePathname } from "next/navigation";

const MobileNavigation = ({ data }: { data: MenuType[] }) => {
  const pathName = usePathname();
  const [navbarShow, setNavbarShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<null | number>(null);
  const [selectLabel, setSelectLabel] = useState("");

  const handleDropdownLinkClick = (
    e: MouseEvent,
    id: number,
    label: string,
    subMenu: any,
  ) => {
    if (subMenu.length) {
      e.preventDefault();
    }
    setDropdownOpen(id);
    setSelectLabel(label);
  };

  const handleBackClick = () => {
    setDropdownOpen(null);
    setSelectLabel("");
  };

  useEffect(() => {
    setNavbarShow(false);
  }, [pathName]);

  return (
    <div className="relative z-50 block xl:hidden">
      <button onClick={() => setNavbarShow(true)} className="cursor-pointer">
        <MenuIcon />
      </button>
      {/* navigation overlay */}
      <div
        onClick={() => setNavbarShow(false)}
        className={cn(
          "fixed top-0 left-0 z-50 h-full min-h-screen w-full min-w-screen bg-gray-700/90 transition-all duration-300",
          navbarShow ? "visible opacity-100" : "invisible opacity-0",
        )}
      ></div>
      <nav
        className={cn(
          "fixed top-0 z-999 flex h-full min-h-screen w-full max-w-85 flex-col justify-between overflow-y-auto bg-primary px-3 pt-7 pb-3 shadow-lg transition-all duration-500",
          navbarShow ? "right-0" : "-right-full",
        )}
      >
        {/* navigation close button */}
        <button
          onClick={() => setNavbarShow(false)}
          className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center transition-all duration-500 hover:text-red-600"
        >
          <CloseIcon />
        </button>
        {/* menu items */}
        <ul className="flex flex-col">
          {data.map(({ href, id, label, subMenu }) => {
            // Check if current path matches parent or any submenu item
            const isActive =
              pathName === href ||
              subMenu?.some((item) => pathName === item.href);

            return (
              <li key={id}>
                <Link
                  href={href}
                  onClick={(e) =>
                    handleDropdownLinkClick(e, id, label, subMenu)
                  }
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-5 py-2 leading-6 font-medium tracking-base transition-all duration-500 hover:text-purple-500",
                    isActive ? "text-purple-500" : "text-secondary",
                  )}
                >
                  {label}
                  {subMenu?.length && (
                    <span>
                      <PlusIcon />
                    </span>
                  )}
                </Link>

                {subMenu?.length && (
                  <ul
                    className={cn(
                      "absolute top-0 w-full space-y-1 bg-primary py-3 transition-all duration-300",
                      dropdownOpen === id ? "left-0" : "-left-full",
                    )}
                  >
                    <li className="flex items-center border-b border-b-gray-200 px-5 pb-2 font-medium">
                      <span
                        onClick={handleBackClick}
                        className="flex h-7 w-7 cursor-pointer items-center"
                      >
                        <ArrowLeft className="size-5" />
                      </span>
                      {selectLabel}
                    </li>
                    {subMenu.map(({ href, id, label }) => (
                      <li key={id}>
                        <Link
                          href={href}
                          className={cn(
                            "flex rounded-xl px-5 py-2 text-sm leading-6 font-medium tracking-base transition-all duration-500 hover:bg-gray-50 hover:text-purple-500",
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

        {/* login and sign up button the button*/}
        <Button className="flex h-12 w-full justify-between gap-2.5 py-1.5 pr-1.5 pl-6 text-base tracking-base lg:hidden">
          Login/ Sign up
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-purple-500">
            <ArrowRight />
          </span>
        </Button>
      </nav>
    </div>
  );
};

export default MobileNavigation;

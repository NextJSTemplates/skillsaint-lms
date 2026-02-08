"use client";
import { useState } from "react";
import Button from "../ui/button";
import { CloseIcon, SearchIcon } from "@/lib/icons";
import Input from "../ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ButtonArrow from "../ui/buttonArrow";

const HeaderExtraInfo = () => {
  const [searchBarShow, setSearchBarShow] = useState(false);

  return (
    <div className="flex items-center gap-x-4">
      <div>
        {/* search input field */}
        <div
          className={cn(
            "relative z-50 h-12 w-full max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:z-999 lg:max-w-60",
            searchBarShow ? "max-lg:block" : "max-lg:hidden",
          )}
        >
          <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400">
            <SearchIcon />
          </span>
          <button
            onClick={() => setSearchBarShow(false)}
            className="absolute top-1/2 right-3 z-30 flex h-6 w-6 -translate-y-1/2 items-center justify-center text-gray-600 lg:hidden"
          >
            <CloseIcon />
          </button>
          <Input
            placeholder="Search course here..."
            className="h-full bg-gray-50 pr-7 pl-11 max-lg:rounded-none shadow-none"
          />
        </div>
        {searchBarShow && (
          <div className="absolute top-0 left-0 z-30 h-full min-h-screen w-full bg-gray-50"></div>
        )}
        {/* the search icon show less than larger devices */}
        <button
          onClick={() => setSearchBarShow(true)}
          className="flex h-4 w-4 items-center justify-center lg:hidden"
        >
          <SearchIcon />
        </button>
        {/* login and sign up button the button*/}
      </div>
      <Button
        asChild
        className="hidden h-12 justify-between gap-2.5 py-1.5 pr-1.5 pl-6 text-base tracking-base lg:flex"
      >
        <Link href={"/login"}>
          Login/ Sign up
          <ButtonArrow />
        </Link>
      </Button>
    </div>
  );
};

export default HeaderExtraInfo;

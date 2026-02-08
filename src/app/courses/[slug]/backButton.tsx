"use client";
import { ArrowLeft } from "@/lib/icons";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="inline-flex h-9 max-w-fit items-center justify-center gap-1 rounded-full border border-gray-200 py-2 pr-4 pl-2 font-medium tracking-sm text-[#6B7280] transition-all duration-500 hover:bg-gray-50"
    >
      <ArrowLeft className="size-5"/>
      Back
    </button>
  );
};

export default BackButton;

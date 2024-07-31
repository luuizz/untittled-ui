import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function TagFeature() {
  return (
    <div className="inline-flex items-center gap-3 p-1 pr-[10px] bg-brand-50 rounded-2xl">
      <span className="bg-white border border-brand-200 inline-block h-6 px-[10px] rounded-2xl text-xs/6 xl:text-sm/6 font-medium text-brand-700">
        New Feature
      </span>
      <Link
        className="flex items-center gap-1 text-xs/6 xl:text-sm/6 font-medium text-brand-700 hover:opacity-50 transition-opacity"
        href="/"
      >
        Check out the team dashboard <FiArrowRight className="text-brand-500" />
      </Link>
    </div>
  );
}

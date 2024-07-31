import React from "react";
import Link from "next/link";
import GridContainer from "@/components/GridContainer";

export default function HomeSectionTrial() {
  return (
    <section className="py-16 xl:py-24 bg-gray-50">
      <GridContainer className="text-center">
        <h2 className="text-3xl xl:text-4xl font-semibold text-gray-900 mb-5">
          Start your free trial
        </h2>
        <p className="text-lg/relaxed xl:text-xl/6 text-gray-600 mb-10">
          Join over 4,000+ startups already growing with Untitled.
        </p>

        <div className="flex flex-col w-full xl:w-auto xl:flex-row gap-3 justify-center">
          <Link
            className="py-3 px-5 bg-white rounded-lg border border-gray300 text-gray-700 font-semibold leading-normal hover:bg-gray-100 transition-colors"
            href="#"
          >
            Learn more
          </Link>

          <Link
            className="py-3 px-5 bg-brand-600 rounded-lg text-white font-semibold leading-normal hover:bg-brand-700 transition-all"
            href="#"
          >
            Get started
          </Link>
        </div>
      </GridContainer>
    </section>
  );
}

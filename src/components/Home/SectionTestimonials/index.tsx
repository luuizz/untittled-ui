import GridContainer from "@/components/GridContainer";
import Image from "next/image";
import React from "react";

export default function SectionTestimonials() {
  return (
    <section className="py-16 xl:py-24 bg-gray-50">
      <GridContainer className="text-center">
        <Image
          src="/logo-sisyphus.svg"
          width={140}
          height={40}
          alt="Logo Sysphus"
          className="mx-auto"
        />
        <h2 className="my-8 text-3xl/tight xl:text-5xl/tight text-gray-900 -tracking-[0.96px] font-medium">
          Weve been using Untitled to kick start every new project and cant
          imagine working without it.
        </h2>

        <div>
          <Image
            className="mx-auto mb-4"
            src="/avatar-02.png"
            width={64}
            height={64}
            alt="Avatar"
          />
          <span className="block font-medium text-lg text-gray-900">
            Candice Wu
          </span>
          <small className="block text-gray-600 text-base">
            Product Manager, Sisyphus
          </small>
        </div>
      </GridContainer>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import GridContainer from "@/components/GridContainer";

const logosClients = [
  {
    source: "/logo-layers.svg",
    alt: "Logo Layers",
    width: 148,
    height: 48,
  },
  {
    source: "/logo-sisyphus.svg",
    alt: "Logo Sisyphus",
    width: 169,
    height: 48,
  },
  {
    source: "/logo-circooles.svg",
    alt: "Logo Circooles",
    width: 183,
    height: 48,
  },
  {
    source: "/logo-catalog.svg",
    alt: "Logo Catalog",
    width: 160,
    height: 48,
  },
  {
    source: "/logo-quotient.svg",
    alt: "Logo Quotient",
    width: 187,
    height: 48,
  },
];

export default function HomeSectionCompanies() {
  return (
    <section className="pt-0 xl:pt-24">
      <GridContainer>
        <p className="text-center text-gray-600 font-medium mb-8">
          Join 4,000+ companies already growing
        </p>
        <div className="grid grid-cols-2 gap-y-4 gap-x-10 xl:gap-y-0 xl:gap-x-0 xl:flex items-center justify-between">
          {logosClients.map(({ source, alt, width, height }, index) => (
            <Image
              key={index}
              src={source}
              alt={alt}
              width={width}
              height={height}
            />
          ))}
        </div>
        <hr className="mt-16 border-b border-gray-200 xl:mt-24" />
      </GridContainer>
    </section>
  );
}

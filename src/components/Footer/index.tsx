import React from "react";
import Link from "next/link";
import Image from "next/image";
import GridContainer from "../GridContainer";
import ItemNav from "./ItemNav";
import { productMenu } from "@/app/utils/data";

export default function Footer() {
  const dataAtual = new Date().getFullYear();
  return (
    <footer className="py-12 xl:pt-16">
      <GridContainer>
        <div className="grid grid-cols-2 gap-8 xl:gap-0 lg:flex items-start justify-between pb-12 xl:pb-16">
          {productMenu.map(({ title, items }, index) => (
            <ItemNav key={index} title={title} itemsMenu={items} />
          ))}
        </div>

        <div className="flex flex-col xl:flex-row items-start gap-6 xl:gap-0 xl:items-center justify-between border-t border-gray-200 py-8">
          <Link href="/">
            <Image
              src="/untitle-ui.svg"
              width={142}
              height={32}
              alt="Logo Untitled UI"
            />
          </Link>

          <p className="text-gray-500">
            © {dataAtual} Untitled UI. All rights reserved.
          </p>
        </div>
      </GridContainer>
    </footer>
  );
}

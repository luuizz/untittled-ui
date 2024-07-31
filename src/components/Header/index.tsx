"use client";
import React, { useState } from "react";
import GridContainer from "../GridContainer";
import Image from "next/image";
import ItemMenu from "./ItemMenu";
import Hamburger from "hamburger-react";

const menuItems = [
  {
    url: "/",
    title: "Home",
    hasDropdown: false,
  },
  {
    url: "/products",
    title: "Products",
    hasDropdown: true,
  },
  {
    url: "/resources",
    title: "Resources",
    hasDropdown: true,
  },
  {
    url: "/pricing",
    title: "Pricing",
    hasDropdown: false,
  },
];

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="sticky w-full py-5 top-0 z-50 bg-white border-b border-gray-100">
      <GridContainer className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-10">
          <Image
            alt="Logo Untitled UI"
            src="/untitle-ui.svg"
            width={142}
            height={32}
          />
          <nav className="hidden xl:flex items-center  gap-8">
            {menuItems.map(({ url, title, hasDropdown }, index) => (
              <ItemMenu
                key={index}
                url={url}
                title={title}
                hasDropdown={hasDropdown}
              />
            ))}
          </nav>
        </div>
        <div>
          <button aria-expanded={isOpen} role="button" className="xl:hidden">
            <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
          </button>
          <Image
            className="hidden xl:block"
            src="/avatar.png"
            width={40}
            height={40}
            alt="Avatar"
          />
        </div>
      </GridContainer>
    </header>
  );
}

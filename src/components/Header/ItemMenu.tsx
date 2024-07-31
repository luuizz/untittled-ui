import Link from "next/link";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

interface ItemMenuProps {
  url: string;
  title: string;
  hasDropdown: boolean;
}

export default function ItemMenu({ url, title, hasDropdown }: ItemMenuProps) {
  return (
    <Link
      className="flex items-center font-semibold text-gray-600 hover:opacity-50 transition-opacity gap-2"
      href={url}
    >
      {title} {hasDropdown && <FiChevronDown className="text-gray-600" />}
    </Link>
  );
}

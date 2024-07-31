import React from "react";

interface ItemNavProps {
  title: string;
  itemsMenu: ItemMenuProps[];
}

interface ItemMenuProps {
  url: string;
  name: string;
  newlest?: boolean;
}

export default function ItemNav({ title, itemsMenu }: ItemNavProps) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-gray-500 mb-4">{title}</h4>
      <ul className="space-y-3">
        {itemsMenu.map(({ url, name }, index) => (
          <li key={index}>
            <a
              className="text-gray-600 font-semibold transition-opacity hover:opacity-50"
              href={url}
            >
              {name}
            </a>
            {name === "Solutions" && (
              <span className="px-2 ml-2 inline-block py-[2px] rounded-2xl bg-success-50 text-success-700 font-medium text-xs leading-[18px] w-[42px]">
                New
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

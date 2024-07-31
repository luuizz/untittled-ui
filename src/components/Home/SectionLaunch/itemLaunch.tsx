import React from "react";

interface ItemLaunchProps {
  value: string;
  title: string;
  text: string;
  index?: number;
}

export default function ItemLauncn({ value, title, text }: ItemLaunchProps) {
  return (
    <div className="w-full text-center">
      <h3 className="text-5xl lg:text-6xl font-semibold text-brand-600">
        {value}
      </h3>
      <h4 className="text-lg font-medium text-gray-900 mt-3 mb-2">{title}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

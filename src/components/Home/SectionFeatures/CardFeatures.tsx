import Link from "next/link";
import React from "react";
import { FiArrowRight, FiMail } from "react-icons/fi";

interface CardFeaturesProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  isBtn?: boolean;
}

export default function CardFeatures({
  icon,
  title,
  text,
  isBtn = false,
}: CardFeaturesProps) {
  return (
    <div className="text-center max-w-full xl:max-w-96 w-full">
      <div className="w-12 h-12 bg-brand-100 rounded-full mx-auto border-8 border-brand-50 mb-5 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-gray-900 text-xl/6 font-medium mb-2">{title}</h3>
      <p className="text-gray-600 leading-6">{text}</p>
      {isBtn && (
        <Link
          href="#"
          className="flex items-center justify-center mt-5 font-semibold text-brand-700 gap-2 hover:opacity-50 transition-opacity"
        >
          Learn more
          <FiArrowRight size={20} className="text-brand-700" />
        </Link>
      )}
    </div>
  );
}

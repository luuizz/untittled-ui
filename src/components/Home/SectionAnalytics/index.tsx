import GridContainer from "@/components/GridContainer";
import Image from "next/image";
import React from "react";
import CardFeatures from "../SectionFeatures/CardFeatures";
import { FiBarChart2, FiMail, FiZap } from "react-icons/fi";

const ItemFeatures = [
  {
    title: "Share team inboxes",
    text: "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
    icon: <FiMail className="text-brand-600" size={24} />,
  },
  {
    title: "Deliver instant answers",
    text: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    icon: <FiZap className="text-brand-600" size={24} />,
  },
  {
    title: "Manage your team with reports",
    text: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    icon: <FiBarChart2 className="text-brand-600" size={24} />,
  },
];

export default function SectionAnalytics() {
  return (
    <section className="pt-16 xl:pt-24">
      <GridContainer>
        <div className="text-center mb-12 xl:mb-16">
          <span className="inline-block mb-4 py-1 px-3 bg-brand-50 rounded-2xl text-sm/snug font-medium text-brand-700">
            Features
          </span>
          <h2 className="text-3xl xl:text-4xl font-semibold text-gray-900 mb-6">
            Cutting-edge features for advanced analytics
          </h2>
          <p className="text-lg/relaxed xl:text-xl/normal text-gray-600 max-w-3xl mx-auto">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <div className="w-full max-w-full mb-12  xl:max-w-[888px] h-auto xl:h-[561px] flex justify-center relative mx-auto xl:mb-24">
          <Image
            src="/mockup-desk.png"
            width={768}
            height={512}
            alt="Dashboard Desktop"
            className="absolute hidden xl:block top-0 right-0 w-full max-w-3xl"
          />
          <Image
            src="/mockup-mobile.png"
            width={244}
            height={497}
            alt="Mockup Mobile"
            className="relative xl:absolute bottom-0 -left-0 w-full max-w-[244px]"
          />
        </div>

        <div className="flex flex-col xl:flex-row gap-10 xl:gap-0 items-start justify-between">
          {ItemFeatures.map(({ title, text, icon }, index) => (
            <CardFeatures
              key={index}
              title={title}
              text={text}
              icon={icon}
              isBtn
            />
          ))}
        </div>
        <hr className="border-b mt-16 border-gray-200 xl:mt-24" />
      </GridContainer>
    </section>
  );
}

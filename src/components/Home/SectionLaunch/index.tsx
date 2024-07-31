import React from "react";
import Image from "next/image";
import GridContainer from "@/components/GridContainer";
import ItemLauncn from "./itemLaunch";

const itemsLaunch = [
  {
    value: "4,000+",
    title: "Global customers",
    text: "We've helped over 4,000 amazing global companies.",
  },
  {
    value: "600%",
    title: "Return on investment",
    text: "Our customers have reported an average of ~600% ROI.",
  },
  {
    value: "10k",
    title: "Global downloads",
    text: "Our app has been downloaded over 10k times.",
  },
  {
    value: "200+",
    title: "5-star reviews",
    text: "We’re proud of our 5-star rating with over 200 reviews.",
  },
];

export default function HomeSectionLaunch() {
  return (
    <section className="py-16 xl:py-24">
      <GridContainer>
        <div className="w-full max-w-3xl mb-16">
          <span className="block mb-3 font-semibold text-brand-700">
            Launch faster
          </span>
          <h2 className="text-3xl xl:text-4xl mb-5 font-semibold text-gray-900 -tracking-[0.72px]">
            Build something great
          </h2>
          <p className="text-lg/relaxed xl:text-xl/6 text-gray-600">
            Weve done all the heavy lifting so you dont have to — get all the
            data you need to launch and grow your business faster.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-0 justify-between items-center">
          <div className="grid w-full max-w-xl grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-8 xl:gap-y-16">
            {itemsLaunch.map((items, index) => (
              <ItemLauncn
                value={items.value}
                text={items.text}
                title={items.title}
                key={index}
              />
            ))}
          </div>
          <div>
            <Image
              src="/img-launch.jpg"
              alt="Launch"
              width={560}
              height={560}
              className="max-h-60 xl:max-h-full"
            />
          </div>
        </div>
      </GridContainer>
    </section>
  );
}

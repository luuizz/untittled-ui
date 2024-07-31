import React from "react";
import CardFeatures from "./CardFeatures";
import { FiMail } from "react-icons/fi";
import { FiZap } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
import { FiSmile } from "react-icons/fi";
import { FiCommand } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import GridContainer from "@/components/GridContainer";

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
  {
    title: "Connect with customers",
    text: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    icon: <FiSmile className="text-brand-600" size={24} />,
  },
  {
    title: "Connect the tools you already use",
    text: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    icon: <FiCommand className="text-brand-600" size={24} />,
  },
  {
    title: "Our people make the difference",
    text: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    icon: <FiMessageCircle className="text-brand-600" size={24} />,
  },
];

export default function HomeSectionFeatures() {
  return (
    <section className="py-16 xl:py-24">
      <GridContainer>
        <div className="text-center mb-16">
          <small className="block mb-3 text-base text-brand-700 font-semibold">
            Features
          </small>
          <h2 className="text-center text-3xl font-semibold xl:text-4xl text-gray-900 tracking-[-0.72px] mb-5">
            Analytics that feels like its from the future
          </h2>
          <p className="text-lg/relaxed xl:text-xl/6 text-gray-600 max-w-3xl mx-auto">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-8 xl:gap-y-16 gap-y-11 px-8">
          {ItemFeatures.map(({ title, text, icon }, index) => (
            <CardFeatures key={index} title={title} text={text} icon={icon} />
          ))}
        </div>
      </GridContainer>
    </section>
  );
}

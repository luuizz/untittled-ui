import GridContainer from "@/components/GridContainer";
import React from "react";
import Question from "./Question";
import CTAQuestion from "./CTAQuestion";

const questionsList = [
  {
    title: "Is there a free trial available?",
  },
  {
    title: "Can I change my plan later?",
  },
  {
    title: "What is your cancellation policy?",
  },
  {
    title: "Can other info be added to an invoice?",
  },
  {
    title: "How does billing work?",
  },
  {
    title: "How do I change my account email?",
  },
];

export default function SectionQuestions() {
  return (
    <section className="pt-16  xl:pt-24">
      <GridContainer>
        <div className="text-center mb-12 xl:mb-16 space-y-5">
          <h2 className="text-3xl xl:text-4xl font-semibold text-gray-900 -tracking-[0.72px]">
            Frequently asked questions
          </h2>
          <p className="text-lg/relaxed xl:text-xl/6 text-gray-600">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto divide-y divide-gray-200">
          {questionsList.map(({ title }, index) => (
            <Question
              key={index}
              title={title}
              response="Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
            />
          ))}
        </div>
        <CTAQuestion />
        <hr className="xl:mt-24 mt-16 border-gray-200" />
      </GridContainer>
    </section>
  );
}

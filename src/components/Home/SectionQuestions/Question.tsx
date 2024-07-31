"use client";
import React, { useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

interface QuestionProps {
  title: string;
  response: string;
}

export default function Question({ title, response }: QuestionProps) {
  const [open, setOpen] = useState(false);

  function handleOpenQuestion() {
    setOpen(!open);
  }

  return (
    <div className="w-full pt-6 pb-8 first:pt-0 last:pb-0">
      <button
        className="w-full flex items-center text-left justify-between"
        onClick={handleOpenQuestion}
      >
        <h3 className="text-gray-900 text-lg/6 font-semibold">{title}</h3>
        {open ? (
          <FiMinusCircle className="text-brand-600" size={20} />
        ) : (
          <FiPlusCircle className="text-brand-600" size={20} />
        )}
      </button>
      {open && (
        <p className="mt-2 text-gray-600 leading-normal pr-12">{response}</p>
      )}
    </div>
  );
}

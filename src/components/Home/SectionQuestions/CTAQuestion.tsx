import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTAQuestion() {
  return (
    <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
      <Image
        className="mx-auto"
        src="/users.png"
        width={120}
        height={56}
        alt="Users"
      />
      <h4 className="mt-8 mb-2 text-xl font-medium text-gray-900">
        Still have questions?
      </h4>
      <p className="text-gray-600 text-lg mb-8">
        Cant find the answer youre looking for? Please chat to our friendly
        team.
      </p>
      <Link
        className="py-3 px-5 bg-brand-600 rounded-lg text-white font-semibold leading-normal hover:bg-brand-700 transition-all"
        href="#"
      >
        Get in touch
      </Link>
    </div>
  );
}

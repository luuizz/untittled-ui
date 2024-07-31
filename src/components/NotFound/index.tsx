"use client";
import React, { useEffect } from "react";
import GridContainer from "../GridContainer";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeroNotFound() {
  const router = useRouter();

  useEffect(() => {
    if (window.history.length <= 1) {
      router.replace("/");
    }
  }, [router]);

  const handleBack = () => {
    router.back();
  };

  return (
    <section className="py-16 md:py-24">
      <GridContainer className="flex lg:flex-row flex-col items-center justify-between gap-16">
        <div className="w-full max-w-xl">
          <small className="text-brand-700 text-base/6 font-semibold mb-3 block">
            404 error
          </small>
          <h1 className="text-6xl font-semibold text-gray-900 tracking-[-0.12px] mb-6">
            Page not found
          </h1>
          <p className="text-xl/8 text-gray-600 w-auto lg:w-[480px]">
            Sorry, the page you are looking for doesnt exist. Here are some
            helpful links:
          </p>
          <div className="flex  items-center gap-3 mt-12 flex-col-reverse sm:flex-row">
            <button
              className="w-full lg:w-auto  justify-center py-3 gap-2 flex items-center px-5 border border-gray-300 rounded-lg text-base font-semibold text-gray-700 hover:bg-gray-100 transition-all"
              onClick={handleBack}
            >
              <FiArrowLeft size={20} className="text-gray-700" />
              Go back
            </button>

            <Link
              href="/"
              className="w-full lg:w-auto text-center py-3 px-5 bourder border-brand-600 rounded-lg text-base font-semibold bg-brand-600 text-white hover:bg-brand-700 transition-all"
            >
              Take me home
            </Link>
          </div>
        </div>

        <div className="w-full max-w-[592px] h-72 md:h-[720px]">
          <Image
            className="w-full h-full object-cover"
            src="/img-404.png"
            alt="Imagem de uma montanha"
            width={592}
            height={720}
          />
        </div>
      </GridContainer>
    </section>
  );
}

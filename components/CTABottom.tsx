import React from "react";
import Button from "./Button";
import Image from "next/image";

const CTABottom = () => {
  return (
    <div className="mt-[7.5rem] bg-soft-pink px-4 flex flex-col md:flex-row items-center justify-center w-fit rounded-[1.25rem]  mx-auto text-center md:text-start xl:justify-evenly text-dark-grey">
      <section className="flex flex-col items-center md:items-start ">
        <h2 className="pt-10 xl:pt-0 font-semibold md:font-bold text-[1.75rem] md:text-[2.375rem] xl:text-[3.125rem] mb-5 w-[19.69rem] md:w-[22.63rem] xl:w-[39.63rem] ">
          Get Landing Page UI Kit Today!
        </h2>
        <p className="font-mulish mx-auto md:mx-0 text-[1.325rem] mb-10 w-[19.69rem]  md:w-[25rem] lg:w-[35.63rem]">
          Break the Figma limits and explore the endless possibilities with
          Anima.
        </p>
        <Button text="Get Started" className="w-fit" arrow regular />
      </section>
      <section className="mt-10 md:mt-0">
        <Image
          src="/cta-bottom.png"
          alt="CTA Illustration"
          width={584}
          height={434}
          className="w-full"
        />
      </section>
    </div>
  );
};

export default CTABottom;

import Image from "next/image";
import Button from "./Button";

const CTA = () => {
  return (
    <div className="mt-[7.5rem] px-4 flex flex-col md:flex-row items-center justify-center    mx-auto text-center md:text-start xl:justify-evenly text-dark-grey">
      <section className="">
        <Image
          src="/cta.png"
          alt="CTA Illustration"
          width={540}
          height={450}
          className=""
        />
      </section>
      <section className="flex flex-col items-center md:items-start ">
        <h2 className=" font-semibold md:font-bold text-[1.75rem] md:text-[2.375rem] xl:text-[3.125rem] mb-5 w-[19.69rem] md:w-[22.63rem] xl:w-[39.63rem] ">
          Get Landing Page UI Kit Today!
        </h2>
        <p className="font-mulish mx-auto text-[1.325rem] mb-10 w-[19.69rem]  md:w-[25rem] lg:w-[35.63rem]">
          Break the Figma limits and explore the endless possibilities with
          Anima.
        </p>
        <Button text="Get Started" className="w-fit" arrow regular />
      </section>
    </div>
  );
};

export default CTA;

import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="mt-[7.5rem] px-4 flex flex-col xl:flex-row items-center justify-center mx-auto text-center xl:text-start xl:justify-around">
      <section className="">
        <h1 className="font-bold text-[2.375rem] md:text-[4.195rem] xl:leading-[80px] text-dark-grey mx-auto w-[19.69rem] md:w-[42.50rem] xl:w-[40.50rem] mb-5">
          Create Engaging Landing Pages
        </h1>
        <p className=" font-mulish md:text-[1.325rem] text-dark-grey w-[19.69rem] md:w-[42.50rem] xl:w-[40.50rem]">
          Build beautiful landing pages in record time with{" "}
          <span className="text-blue-400">Anima</span>’s Landing Page UI kit for
          Figma. No code required!
        </p>
        <div className="inline-flex items-center gap-[1.125rem] mt-[1.885rem] mb-10 xl:mb-0 xl:mt-10">
          <Button text="Get Started" rocket regular />
          <Button
            text="How it works"
            className="text-deep-green border hidden xl:flex  border-deep-green"
          />
        </div>
      </section>
      <section>
        <Image
          src="/hero.png"
          alt="Hero Illustration"
          width={450}
          height={450}
          className=""
        />
      </section>
    </div>
  );
};

export default Hero;

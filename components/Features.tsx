import { features } from "@/constants";
import Image from "next/image";

const Features = () => {
  return (
    <div className="flex justify-center items-center flex-col text-dark-grey mt-[3.75rem] md:mt-[6.25rem] xl:mt-[7.5rem] px-4 xl:px-14">
      <h2 className="font-semibold text-black md:font-bold text-[2.375rem] mb-5">
        Features
      </h2>
      <p className="font-mulish text-center ">
        Few good reasons why you should use Anima Landing Page Ui Kit to make
        your own pages.
      </p>
      <div className="grid place-items-center gap-8 xl:grid-cols-3 mt-[3.75rem] ">
        {features.map((item) => (
          <div
            className="bg-white flex flex-col justify-center items-center mx-auto py-10 px-8 text-center w-[23rem] md:w-[42.50rem] xl:w-96 rounded-[1.25rem]"
            key={item.id}
          >
            <Image src={item.icon} alt={item.heading} width={82} height={82} />
            <h3 className="font-semibold text-[1.75rem] mt-8 mb-6">
              {item.heading}
            </h3>
            <p className="font-mulish w-[15.95rem] md:w-[620px] xl:w-[19.38rem]">
              {item.paragraph}
            </p>

            <span className="text-deep-green font-semibold flex items-center gap-2 mt-8">
              Learn More{" "}
              <Image
                src="/features/arrow-right.svg"
                alt="Arrow right"
                width={20}
                height={20}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

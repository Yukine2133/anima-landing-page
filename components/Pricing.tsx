import { pricing } from "@/constants";
import Image from "next/image";
import Button from "./Button";

const Pricing = () => {
  return (
    <div className="flex justify-center items-center flex-col text-dark-grey mt-[3.75rem] md:mt-[6.25rem] xl:mt-[7.5rem] px-8 xl:px-14">
      <h2 className="font-semibold text-black md:font-bold text-[2.375rem] mb-5">
        Pick Your Perfect Plan
      </h2>
      <p className="font-mulish text-center ">
        Find the perfect plan for your business with our flexible pricing
        options.
      </p>
      <div className="grid place-items-center gap-8 xl:grid-cols-3 mt-[3.75rem] ">
        {pricing.map((item) => (
          <div
            className="bg-white last:bg-deep-green last:text-white  py-10 px-8  w-[23rem] md:w-[42.50rem] xl:w-[23.13rem] rounded-[1.25rem]"
            key={item.id}
          >
            <h4 className="font-mulish text-[1.325rem]  ">{item.type}</h4>
            <h3 className="font-bold text-[3.125rem] my-1.5">
              ${item.price}{" "}
              <span className="text-base font-mulish">/ month</span>
            </h3>
            <p className="font-mulish">{item.for}</p>
            <ul className="mt-6 mb-8">
              {item.features.map((feature) => (
                <ul key={feature.id}>
                  {feature.feature.map((detail, index) => (
                    <div className="flex gap-3" key={index}>
                      <Image
                        src={feature.checkmark}
                        alt="Checkmark"
                        width={20}
                        height={20}
                      />
                      <li className="font-bold font-mulish">{detail}</li>
                    </div>
                  ))}
                </ul>
              ))}
            </ul>
            {item.green ? (
              <Button
                text="Get started"
                className="bg-white text-deep-green w-full  justify-center"
                arrowGreen
              />
            ) : (
              <Button
                text="Get started"
                className="bg-[#E5F4F2] mx-auto text-deep-green w-full justify-center  "
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

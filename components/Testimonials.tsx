import { testimonials } from "@/constants";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="flex justify-center items-center flex-col text-dark-grey mt-[3.75rem] md:mt-[6.25rem] xl:mt-[7.5rem] px-4 xl:px-14">
      <h2 className="font-semibold text-center text-black md:font-bold text-[2.375rem] mb-5">
        Real Stories from Satisfied Customers
      </h2>
      <p className="font-mulish text-center ">
        See how our landing page ui kit is making an impact.
      </p>
      <div className="grid place-items-center gap-8 xl:grid-cols-3 mt-[3.75rem]">
        {testimonials.map((item) => (
          <div
            className="bg-white flex flex-col justify-center items-center mx-auto py-10 px-8 text-center w-[23rem] md:w-[42.50rem] xl:w-96 rounded-[1.25rem]"
            key={item.id}
          >
            <Image src={item.image} alt={item.name} width={56} height={56} />
            <h3 className="text-[#111827] font-semibold text-[1.325rem] mb-1.5 mt-4">
              {item.name}
            </h3>
            <span className="text-[#374151] font-mulish text-sm">
              {item.job}
            </span>
            <p className="font-mulish my-8 xl:w-[23.13rem]">
              &quot;{item.testimonial}&quot;
            </p>
            <Image src={item.rating} alt="Rating" width={310} height={23} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

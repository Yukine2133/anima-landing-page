import { team } from "@/constants";
import Image from "next/image";

const Team = () => {
  return (
    <div className="flex justify-center items-center flex-col text-dark-grey mt-[3.75rem] md:mt-[6.25rem] xl:mt-[7.5rem] px-4 xl:px-14">
      <h2 className="font-semibold text-black md:font-bold text-[2.375rem] mb-5">
        Meet our team
      </h2>
      <p className="font-mulish text-center ">
        Get to know the faces behind the scenes and learn about the values that
        drive us.
      </p>
      <div className="grid place-items-center gap-8 md:grid-cols-3 mt-[3.75rem] ">
        {team.map((item) => (
          <div
            className="bg-white flex flex-col justify-center items-center mx-auto  text-center w-full md:w-[13.31rem] xl:w-96 rounded-[1.25rem]"
            key={item.id}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={370}
              height={278}
              className="w-full"
            />
            <h3 className="font-semibold text-[#111827] text-[1.325rem] mt-5 mb-1.5">
              {item.name}
            </h3>
            <p className="font-mulish pb-5">{item.job}</p>
            <hr className="w-full" />
            <div className="pt-5 pb-8  ">
              <Image
                src="/team/social-links.png"
                alt="Social Links"
                width={128}
                height={32}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

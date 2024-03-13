import { metrics } from "@/constants";

const Metrics = () => {
  return (
    <div className="flex justify-center text-center  items-center flex-col text-dark-grey mt-[3.75rem] md:mt-[6.25rem] xl:mt-[7.5rem] px-4 xl:px-14 ">
      <h2 className="font-semibold  text-black md:font-bold text-[2.375rem] mb-5">
        Our Metrics Tell the Story
      </h2>
      <p className="font-mulish ">
        Our metrics component gives you the inside scoop on your success and
        helps you stay on top of your game in style.
      </p>
      <div className="grid place-items-center gap-8 grid-cols-2 md:grid-cols-4  mt-[3.75rem]">
        {metrics.map((item) => (
          <div
            className="bg-white px-4 py-8 xl:py-12 w-[11rem] sm:w-[13rem] md:w-[9.69rem] xl:w-[16.88rem] h-[10.25rem] text-center rounded-t-[1.25rem]  border-b-4 border-soft-pink"
            key={item.id}
          >
            <h3 className="font-semibold text-[1.75rem] xl:font-bold xl:text-[2.375rem] gap-[0.3125rem]">
              {item.heading}
            </h3>
            <p className="font-mulish ">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;

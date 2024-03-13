import { clients } from "@/constants";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="grid mt-[3.785rem] lg:mt-[6.25rem] xl:mt-[7.525rem]  grid-cols-3 md:grid-cols-6  place-items-center mx-auto md:place-content-evenly gap-[3.25rem] md:gap-14  lg::gap-[72px] px-4 xl:px-14 border-y py-10 w-[90%] xl:w-3/4">
      {clients.map((item) => (
        <Image
          src={item.image}
          alt="Client Logo"
          width={90}
          height={28}
          key={item.id}
          className=""
        />
      ))}
    </div>
  );
};

export default Clients;

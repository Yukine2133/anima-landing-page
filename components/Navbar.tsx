import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-center md:justify-around xl:justify-between items-center mt-5 md:mt-[2.125rem] sm:mx-[3.125rem] ">
      <h1 className="text-[1.325rem] inline-flex gap-1.5">
        <Image src="/logo-mark.svg" alt="Menu Mark" width={32} height={32} />
        <span className="font-bold">Landing</span>Page
      </h1>
      <div className="flex">
        <Button
          text="Contact"
          className="bg-[#F8F9FF] hidden xl:flex px-0 py-0 text-deep-green mr-[3.125rem] "
        />
        <div className="flex gap-5">
          <Button
            text="How it works"
            className="bg-[#E5F4F2] hidden md:flex text-deep-green"
          />
          <Button
            text="Get Started"
            className="hidden xl:flex"
            rocket
            regular
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

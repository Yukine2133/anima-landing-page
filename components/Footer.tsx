import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-dark-grey flex flex-col-reverse md:justify-between md:flex-row md:items-center py-6 px-5 md:px-8 xl:px-[3.75rem]  mt-[3.75rem]">
      <h6 className="text-white text-sm font-mulish mt-5 md:mt-0">
        &#169; {new Date().getFullYear()} Anima&apos;s Landing Page UI Kit.
      </h6>
      <Image
        src="/footer/social-links.png"
        alt="Social Links"
        width={176}
        height={32}
      />
    </footer>
  );
};

export default Footer;

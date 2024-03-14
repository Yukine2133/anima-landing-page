import Image from "next/image";
import Button from "./Button";

const Contact = () => {
  return (
    <div className=" text-dark-grey mt-[3.75rem] bg-white w-fit mx-4 md:mx-auto md:mt-[6.25rem] xl:mt-[7.5rem] p-10 xl:p-[3.75rem] rounded-[1.25rem] ">
      <h3 className="font-bold text-[2.375rem] mb-2.5">
        Let&apos;s get in touch!
      </h3>
      <p className="font-mulish">
        Got questions about the Landing Page UI Kit? Our team is here to help.
        Contact us for quick and friendly support.
      </p>
      <div className="grid place-content-between xl:grid-cols-2 mt-[3.75rem]">
        <div className="grid gap-5">
          <h5 className="inline-flex  items-center gap-3">
            <Image
              src="/contact/phone-icon.png"
              alt="Phone Icon"
              width={24}
              height={24}
            />
            +012 345 6789
          </h5>
          <h5 className="inline-flex  items-center gap-3">
            <Image
              src="/contact/mail-icon.png"
              alt="Mail Icon"
              width={24}
              height={24}
            />
            Hello@animaapp.com
          </h5>

          <h4 className="font-semibold text-[1.325rem] mt-[4rem] mb-5">
            Connect with us
          </h4>
          <Image
            src="/contact/social-links.png"
            alt="Social Links"
            width={176}
            height={32}
          />
        </div>
        <div className="mt-10 xl:mt-0 ">
          <div className="border flex gap-3 items-center rounded-[1.25rem] py-2 px-5 sm:w-[30rem] md:w-[40rem] xl:w-[36rem]">
            <Image
              src="/contact/user-icon.png"
              alt="User Icon"
              width={20}
              height={20}
              className="border-r pr-2 w-fit"
            />
            <h6 className="font-mulish">Full Name</h6>
          </div>
          <div className="border flex gap-3 items-center rounded-[1.25rem] py-2 px-5 mt-2.5 mb-5 ">
            <Image
              src="/contact/mail-icon.png"
              alt="Mail Icon"
              width={20}
              height={20}
              className="border-r pr-2 w-fit"
            />
            <h6 className="font-mulish">Email</h6>
          </div>
          <Button text="Submit" regular />
        </div>
      </div>
    </div>
  );
};

export default Contact;

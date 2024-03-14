import Image from "next/image";

interface ButtonProps {
  text: string;
  className?: string;
  rocket?: boolean;
  arrow?: boolean;
  regular?: boolean;
  arrowGreen?: boolean;
}

const Button = ({
  text,
  className,
  rocket,
  arrow,
  regular,
  arrowGreen,
}: ButtonProps) => {
  return (
    <button
      className={`${className}  flex items-center gap-2 font-semibold px-[3.125rem] py-4  rounded-[1.25rem] ${
        regular && "text-white bg-deep-green"
      }  `}
    >
      {rocket && (
        <Image
          src="/rocket-launch.svg"
          alt="Rocket Launch"
          width={20}
          height={20}
        />
      )}{" "}
      {text}
      {arrow && (
        <Image
          src="/arrow-right.svg"
          alt="Arrow Right"
          width={20}
          height={20}
        />
      )}
      {arrowGreen && (
        <Image
          src="/arrow-right-green.png"
          alt="Arrow Right Green"
          width={20}
          height={20}
        />
      )}
    </button>
  );
};

export default Button;

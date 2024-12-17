import Image from "next/image";
import classNames from "classnames";

const Logo = ({ size = 80 }) => {
  return (
    <>
      <Image
        alt="Your Company"
        src="/images/common/pet.png"
        width={200}
        height={100}
        className={classNames("w-auto", `h-${size}`)}
      />
    </>
  );
};

export default Logo;

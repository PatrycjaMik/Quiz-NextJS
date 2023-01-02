import Image from "next/image";
import clsxm from "../../lib/clsxm";

export const ArrowButton = ({
  className,
  onClick,
  type = "button",
  disabled,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsxm(
        "w-[98px] h-[98px] relative bg-black border-solid border-[4px] border-white rounded-full transition-opacity",
        className,
        { "opacity-70": disabled, "opacity-100": !disabled }
      )}
    >
      <Image
        src="/images/arrowYellow.png"
        layout="fill"
        width="17px"
        height="32px"
      />
    </button>
  );
};

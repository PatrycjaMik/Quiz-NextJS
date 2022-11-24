import Image from "next/image";
import clsxm from "../../lib/clsxm";

export const ArrowButton = ({ className, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsxm(
        "w-[98px] h-[98px] absolute bg-black border-solid border-[4px] border-white rounded-full",
        className
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

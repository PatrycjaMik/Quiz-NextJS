import Image from "next/image";
import { SideBorderBox } from "../SideBorderBox";

export default function Prize() {
  return (
    <section className="relative bg-primary aspect-[320/867] ">
      <div className="absolute  top-0 right-0 w-10/12 h-1/5 aspect-[249/138]">
        <Image src="/images/topRightBlackDots.png" layout="fill" />
      </div>

      <SideBorderBox containerClass=" h-[550px]" inverted={true}>
        <div className="pt-10 w-[80%] m-auto">
          <div className="flex flex-col">
            <p className="font-oswald font-[600] text-2xl tracking-[0.62px] ">
              Nagroda w konkursie:
            </p>
            <p className=" mt-5 mb-2 font-oswald font-[400] text-2xl text-white tracking-[0.52px] ">
              TechniSat DIGITRADIO BT1
            </p>
            <p className="font-oswald  text-base tracking-[0.52px] ">
              nowoczesny głośnik Bluetooth z radiem cyfrowym DAB+ i FM
            </p>
          </div>
          <div className="absolute">
            <Image src="/images/radio.png" width="268px" height="259px"></Image>
          </div>
        </div>
      </SideBorderBox>

      <div className="absolute  bottom-0 left-0 w-10/12 aspect-[249/138] ">
        <Image src="/images/bottomLeftBlackDots.png" layout="fill" />
      </div>
    </section>
  );
}

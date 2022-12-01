import Image from "next/image";
import { SideBorderBox } from "../SideBorderBox";

export default function Prize() {
  return (
    <section className="relative bg-primary aspect-[320/867] md:aspect-[1920/1090] md:pb-[40px]">
      <div className="absolute  top-0 right-0 w-10/12 h-1/5 aspect-[249/138] md:w-1/4 md:h-1/4">
        <Image src="/images/topRightBlackDots.png" layout="fill" />
      </div>

      <div className=" pt-16 w-[80%] m-auto md:w-[70%] md:pr-1 md:mr-10">
        <SideBorderBox
          containerClass=" h-[550px] border-black  max-w-[670px] "
          inverted={true}
        >
          <div className="pt-10 px-7 m-auto md:flex md:justify-end">
            <div className="flex flex-col px-5 md:w-[50%]">
              <p className="font-oswald  font-[600] text-2xl tracking-[0.62px] md:text-right md:text-[35px] md:leading-10">
                Nagroda w konkursie:
              </p>
              <p className=" mt-5 mb-2 font-oswald font-[400] text-2xl text-white tracking-[0.52px] md:text-[30px] md:text-right leading-10">
                TechniSat DIGITRADIO BT1
              </p>
              <p className="font-oswald  text-base tracking-[0.52px] md:text-right md:text-[24px] md:leading-8">
                nowoczesny głośnik Bluetooth z radiem cyfrowym DAB+ i FM
              </p>
            </div>
            <div className="absolute w-[300px] bottom-[9%] left-[50%] translate-y-1/2 -translate-x-1/2  md:left-[20%] md:bottom-[50%] md:w-[400px] ">
              <div className=" md:absolute md:bg-[url('/images/desktop-bg-radio.png')] md:w-full md:h-full md:bg-no-repeat md:bg-contain md:-translate-y-1/3  md:-translate-x-1/3 md:w-[450px] md:h-[450px] md:ml-[65px]"></div>
              <Image
                src="/images/radio.png"
                width="288px"
                height="279px"
                className="block md:invisible"
              ></Image>
            </div>
          </div>
        </SideBorderBox>
      </div>

      <div className="absolute  bottom-0 left-0 w-10/12 aspect-[249/138] md:w-1/4 md:h-1/4">
        <Image src="/images/bottomLeftBlackDots.png" layout="fill" />
      </div>
    </section>
  );
}

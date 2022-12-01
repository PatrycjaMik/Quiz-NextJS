import Image from "next/image";
import Link from "next/link";
import { SideBorderBox } from "../SideBorderBox";

export default function QuizEnd() {
  return (
    <section className="relative bg-black aspect-[320/1035] h-full">
      <div className="absolute  top-0 right-0 w-10/12 aspect-[249/138] ">
        <Image src="/images/topRightYellowDots.png" layout="fill" />
      </div>

      <div className="pt-28 w-[80%] m-auto ">
        <p className="text-center text-3xl font-bold font-oswald text-primary font-[600] uppercase pt-1 mb-16">
          Co wiesz o Marii Konopnickiej?
        </p>
        <SideBorderBox containerClass=" h-[550px]">
          <div className="flex justify-center items-center h-full">
            <div className="border-b-[1px] border-t-[1px] border-black w-[80%] p-1 ">
              <p className=" text-[40px] font-bold font-oswald text-center pb-8">
                DZIĘKUJEMY ZA UDZIAŁ
              </p>
            </div>
          </div>

          {/* <div className="mt-20 p-5 bg-transparent mr-5 ml-5">
            <p className=" text-[26px] font-bold font-oswald text-center pb-8">
              Dziękujemy za udział
            </p>
          </div> */}
        </SideBorderBox>
        <SideBorderBox
          containerClass=" h-[87px] mt-12 z-10"
          className=" w-[280px] "
          inverted={true}
        >
          <Link href="/">
            <a
              target="_blank"
              className="text-[26px]  font-oswald h-full w-full flex justify-center items-center"
            >
              Regulamin konkursu
            </a>
          </Link>
        </SideBorderBox>
      </div>

      <div className="absolute bottom-0 left-0 w-10/12 z-0 aspect-[249/138]">
        <Image src="/images/bottomLeftYellowDots.png" layout="fill" />
      </div>
    </section>
  );
}

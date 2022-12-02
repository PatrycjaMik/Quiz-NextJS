import Image from "next/image";
import Link from "next/link";
import { SideBorderBox } from "../SideBorderBox";

export default function PreStart() {
  return (
    <section className="relative bg-black h-full">
      <div className="absolute  top-0 right-0 w-1/2 aspect-[249/138] md:w-1/3 md:h-1/4">
        <Image src="/images/topRightYellowDots.png" layout="fill" />
      </div>

      <div className="pt-28 w-[80%] m-auto ">
        <p className="text-center text-3xl font-bold font-oswald text-primary font-[600] uppercase pt-1 mb-16">
          Co wiesz o Marii Konopnickiej?
        </p>
        <SideBorderBox containerClass=" h-[550px] z-10 max-w-screen-md md:m-auto mb-10">
          <div className="flex justify-center items-center h-full">
            <div className="border-b-[1px] border-t-[1px] border-black w-[80%] p-4 ">
              <p className=" text-[28px] md:text-[30px] font-bold font-oswald text-center  p-4 ">
                Quiz jeszcze się nie rozpoczął. Spróbuj ponownie później
              </p>
            </div>
          </div>
        </SideBorderBox>
        <div className="md:flex md:justify-end md:pt-6 md:w-full pb-10">
          <SideBorderBox
            containerClass=" h-[87px] md:w-[280px] md:mt-6 z-10 max-w-md "
            className="  py-8"
            inverted={true}
          >
            <Link href="/docs/Regulamin_Quiz_Maria_Konopnicka_grudzien_2022.pdf">
              <a
                target="_blank"
                className="text-[26px]  font-oswald h-full w-full flex justify-center items-center "
              >
                Regulamin konkursu
              </a>
            </Link>
          </SideBorderBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-1/2 z-0 aspect-[249/138] md:w-1/3 md:h-1/4">
        <Image src="/images/bottomLeftYellowDots.png" layout="fill" />
      </div>
    </section>
  );
}

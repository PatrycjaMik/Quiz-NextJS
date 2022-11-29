import { ArrowButton } from "../ArrowButton";
import { SideBorderBox } from "../SideBorderBox";
import Link from "next/link";
import Image from "next/image";

export default function ErrorModal() {
  return (
    <section className="relative bg-black aspect-[320/1035] h-full">
      <div className="absolute  top-0 right-0 w-10/12 aspect-[249/138] ">
        <Image src="/images/topRightYellowDots.png" layout="fill" />
      </div>

      <div className="pt-[40%] w-[80%] m-auto ">
        <p className="text-center text-3xl font-bold font-oswald text-primary font-[600] uppercase pt-1 mb-16">
          Co wiesz o Marii Konopnickiej?
        </p>
      </div>
      <div className="p-6 w-screen h-screen">
        <SideBorderBox
          containerClass=" h-[210px] mt-12 z-10"
          className=" w-[280px]"
        >
          <div className=" flex  w-full h-full  items-center justify-center p-[37px]">
            <div className="border-[red] border-solid border-[2px] p-3">
              <p className="font-oswald text-[red] font-bold">
                Ups... coś poszło nie tak
              </p>
              <p className="font-oswald text-[red] ">spróbuj później</p>
            </div>
            <div className="p-2">
              <Link href="#quizStart">
                <ArrowButton className="bg-[red] border-none w-[40px] h-[40px] mr-1 -translate-y-[50%]" />
              </Link>
            </div>
          </div>
          <div>{/* {errorMessage && <div> {errorMessage} </div>} */}</div>
        </SideBorderBox>
      </div>
      <div className="absolute bottom-0 left-0 w-10/12 z-0 aspect-[249/138]">
        <Image src="/images/bottomLeftYellowDots.png" layout="fill" />
      </div>
    </section>
  );
}

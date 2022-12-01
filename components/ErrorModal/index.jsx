import { ArrowButton } from "../ArrowButton";
import { SideBorderBox } from "../SideBorderBox";
import Link from "next/link";
import Image from "next/image";

export default function ErrorModal({ setError, setLoggedIn }) {
  return (
    <section className="relative bg-black aspect-[320/1035] h-full md:aspect-[1920/1080]">
      <div className="absolute  top-0 right-0 w-10/12 aspect-[249/138] md:w-1/3 md:h-1/4">
        <Image src="/images/topRightYellowDots.png" layout="fill" />
      </div>

      <div className="pt-[40%] w-[80%] m-auto md:pt-[10%]">
        <p className="text-center text-3xl font-bold font-oswald text-primary font-[600] uppercase pt-1 mb-16">
          Co wiesz o Marii Konopnickiej?
        </p>
      </div>
      <div className="p-6">
        <SideBorderBox containerClass=" h-[410px] mt-2 z-10  max-w-screen-md md:m-auto">
          <div className=" flex  w-full h-full  items-center justify-center p-[5px]">
            <div className="border-[red] border-solid border-[2px] p-2 w-[70%] h-[50%]">
              <p className="font-oswald text-[red] text-[24px] mt-3 md:text-[35px] md:text-center md:mt-4 font-bold">
                Ups... coś poszło nie tak
              </p>
              <p className="font-oswald text-[red] text-[22px] md:text-[31px] md:text-center ">
                spróbuj później
              </p>
            </div>
            <div className="p-1">
              <Link href="#quizStart">
                <ArrowButton
                  className="bg-[red] border-none w-[40px] h-[40px] md:w-[60px] md:h-[60px] mr-1 -translate-y-0"
                  onClick={() => {
                    setError(false);
                    setLoggedIn(false);
                  }}
                />
              </Link>
            </div>
          </div>
        </SideBorderBox>
      </div>
      <div className="absolute bottom-0 left-0 w-10/12 z-0 aspect-[249/138] md:w-1/3 md:h-1/4">
        <Image src="/images/bottomLeftYellowDots.png" layout="fill" />
      </div>
    </section>
  );
}

// import { useState } from "react";
import { ArrowButton } from "../ArrowButton";
import { SideBorderBox } from "../SideBorderBox";
import Link from "next/link";

// const [curtainClose, setcurtainClose] = useState(true);
// const [errorMsg, setErrorMsg] = useState();

// const handleCurtainClose = () => {
//   setcurtainClose();
// };

export default function ErrorModal() {
  return (
    <div className="p-6 w-screen h-screen">
      <SideBorderBox
        containerClass=" h-[210px] mt-12 z-10"
        className=" w-[280px]"
      >
        <div className=" flex  w-full h-full ml-[10%] justify-start items-center ">
          <div className="border-[red] border-solid border-[2px] p-4">
            <p className="font-oswald text-[red] font-bold">
              Ups... coś poszło nie tak
            </p>
            <p className="font-oswald text-[red] ">spróbuj później</p>
          </div>
          <div>
            <Link href="#quizStart">
              <ArrowButton className="bg-[red] border-none w-[42px] h-[42px] translate-x-[50%] -translate-y-[50%]" />
            </Link>
          </div>
        </div>
        <div>{/* {errorMessage && <div> {errorMessage} </div>} */}</div>
      </SideBorderBox>
    </div>
  );
}

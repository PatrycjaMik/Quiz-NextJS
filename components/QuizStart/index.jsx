import Image from "next/image";
import Link from "next/link";
import { SideBorderBox } from "../SideBorderBox";
import axios from "axios";
import { QUIZ_ID } from "../../config";
import { ArrowButton } from "../ArrowButton";

export default function QuizStart({ setQuizData, loginForm }) {
  const {
    formState: { errors },
    register,
    setValue,
    handleSubmit,
  } = loginForm;

  const submitUser = async (data) => {
    const userdata = {
      ...data,
      QuizId: QUIZ_ID,
      Agreements: true,
    };
    await axios
      .post(
        "https://votingresults.polskieradio.pl/api/quiz/StartQuiz",
        userdata
      )
      .then((result) => {
        console.log(result);
        setQuizData(result.data);
        setValue("quizVoteId", result.data.quizVoteId);
      });
  };
  return (
    <section className="relative bg-black aspect-[320/1035] h-full">
      <div className="absolute  top-0 right-0 w-10/12 h-1/5 ">
        <Image src="/images/topRightYellowDots.png" layout="fill" />
      </div>

      <div className="pt-28 ">
        <div className="pt-20">
          <p className="text-center text-3xl font-bold font-oswald text-primary font-[600] uppercase">
            Co wiesz o Marii Konopnickiej?
          </p>
        </div>
        <div className=" w-[80%] m-auto mt-[5%]">
          <SideBorderBox containerClass=" h-[550px]">
            <div className="border-b-[1px] border-black w-[80%] p-1 m-auto mt-8 ">
              <p className=" text-[24px] font-bold font-oswald text-center pb-8">
                Podaj dane by rozpocząć quiz.
              </p>
            </div>

            <div className="mt-10 p-5 bg-black mr-5 ml-5">
              <form onSubmit={handleSubmit(submitUser)}>
                <div>
                  <label htmlFor="username"></label>
                  <input
                    placeholder="username"
                    id="UserName"
                    type="text"
                    required
                    className=" p-4 bg-black text-center text-white placeholder:text-white font-oswald text-[24px] w-full border-b-[1px] border-primary"
                    {...register("UserName", {
                      required: true,
                    })}
                  />
                  {errors.userName && <span>podaj nazwę użytkownika</span>}
                  <label htmlFor="email"></label>
                  <input
                    placeholder="email"
                    id="Email"
                    type="email"
                    className="p-2 bg-black text-center text-white placeholder:text-white font-oswald text-[24px] w-full "
                    {...register("Email", {
                      required: true,
                    })}
                  />
                  {errors.Email && <span>wpisz swój email</span>}
                </div>
                <button className="absolute bottom-16 left-[30%]" type="submit">
                  <ArrowButton></ArrowButton>
                </button>
              </form>
            </div>
          </SideBorderBox>
        </div>
      </div>

      <div className="absolute bottom-0 pb-7 ">
        <SideBorderBox
          containerClass=" h-[87px]"
          className=" w-[280px]"
          inverted={true}
        >
          <Link href="/">
            <a target="_blank" className="text-[26px] p-7 font-oswald">
              Regulamin konkursu
            </a>
          </Link>
        </SideBorderBox>
      </div>

      <div className="absolute bottom-0 left-0 w-10/12 h-1/5 z-0">
        <Image src="/images/bottomLeftYellowDots.png" layout="fill" />
      </div>
    </section>
  );
}

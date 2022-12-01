import Image from "next/image";
import Link from "next/link";
import { SideBorderBox } from "../SideBorderBox";
import axios from "axios";
import { QUIZ_ID } from "../../config";
import { ArrowButton } from "../ArrowButton";

export default function QuizStart({ setQuizData, loginForm, setVotedAlready }) {
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
        setQuizData(result.data);
        setValue("quizVoteId", result.data.quizVoteId);
      })
      .catch((e) => {
        console.log({ e });
        if (e?.response?.data?.Message === "VotedAlready")
          setVotedAlready(true);
      });
  };
  return (
    <section
      id="quizStart"
      className="relative bg-black aspect-[320/1035] md:aspect-[1920/1080] h-full"
    >
      <div className="absolute  top-0 right-0 w-10/12 aspect-[249/138] md:w-1/3 md:h-1/4">
        <Image src="/images/topRightYellowDots.png" layout="fill" />
      </div>

      <div className="pt-28 w-[80%] m-auto ">
        <p className="text-center text-3xl font-bold font-oswald text-primary font-[600] uppercase pt-1 mb-16">
          Co wiesz o Marii Konopnickiej?
        </p>
        <SideBorderBox containerClass=" h-[550px] max-w-screen-md md:m-auto">
          <div className="border-b-[1px] border-black w-[80%] p-1 m-auto mt-8 ">
            <p className=" text-[24px] font-bold font-oswald text-center pb-8">
              Podaj dane by rozpocząć quiz.
            </p>
          </div>

          <div className="mt-20 md:p-1 p-5  mx-2 md:mx-auto md:flex justify-between items-center md:w-[80%]">
            <form onSubmit={handleSubmit(submitUser)}>
              <div className="md:w-full">
                <label htmlFor="username"></label>
                <input
                  placeholder="username"
                  id="UserName"
                  type="text"
                  required
                  className=" p-4 bg-black outline-0  text-center md:text-left text-white placeholder:text-white font-oswald text-[24px] md:text-[30px] w-full md:w-[90%] border-b-[1px] border-primary"
                  {...register("UserName", {
                    required: true,
                  })}
                />
                {errors.UserName && (
                  <span className="font-oswald text-[14px] flex">
                    podaj nazwę użytkownika
                  </span>
                )}
                <label htmlFor="email"></label>
                <input
                  placeholder="email"
                  id="Email"
                  type="email"
                  className="p-4 bg-black  outline-0 text-center md:text-left text-white placeholder:text-white font-oswald text-[24px] md:text-[30px] w-full md:w-[90%] "
                  {...register("Email", {
                    required: true,
                  })}
                />
                {errors.Email && (
                  <span className="font-oswald text-[14px] flex">
                    wpisz swój email
                  </span>
                )}
              </div>

              <ArrowButton
                className="absolute bottom-[0%] left-[50%] translate-y-1/2 -translate-x-1/2 visible md:invisible"
                type="submit"
              />
            </form>
            <ArrowButton
              className=" invisible md:visible md:w-[127px] md:h-[127px] md:p-12 "
              type="submit"
              onClick={handleSubmit(submitUser)}
            />
          </div>
        </SideBorderBox>
        <div className="md:flex md:justify-end md:pt-6 md:w-full">
          <SideBorderBox
            containerClass=" h-[87px] my-12  md:mt-6 z-10 max-w-md  md:w-[80%]"
            className=" w-[280px]"
            inverted={true}
          >
            <Link href="/">
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

      <div className="absolute bottom-0 left-0 w-10/12 z-0 aspect-[249/138] md:w-1/3 md:h-1/4">
        <Image src="/images/bottomLeftYellowDots.png" layout="fill" />
      </div>
    </section>
  );
}

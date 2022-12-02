import { useForm } from "react-hook-form";
import Carousel from "nuka-carousel";
import axios from "axios";
import React, { useState } from "react";
import { SideBorderBox } from "../SideBorderBox";
import Image from "next/image";
import CustomRadio from "../CustomRadio";
import { ArrowButton } from "../ArrowButton";
import { QUIZ_ID } from "../../config";
import { ErrorMessage } from "@hookform/error-message";
import Link from "next/link";

export default function FormQuiz({
  data,
  loginData,
  setIsQuizFinished,
  setError,
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const vals = watch();

  const EMPTY_OPEN_ANSWERID = "224";

  const [activeIndex, setActiveIndex] = useState(0);

  React.useEffect(() => {
    handleErrors();
  }, [errors]);

  const handleErrors = () => {
    const errorsId = Object.keys(errors);
    if (errorsId.length > 0) {
      const slideIndex = data.questions
        .map((el) => String(el.questionId))
        .indexOf(errorsId[0]);
      if (activeIndex !== slideIndex) setActiveIndex(slideIndex);
    }
  };

  const submitAnswers = async (data) => {
    const usersanswers = {
      QuizId: QUIZ_ID,
      QuizVoteId: loginData.quizVoteId,
      UserName: loginData.UserName,
      Answers: Object.entries(data).map(([QuestionId, OptionId]) => ({
        QuestionId,
        OptionId: !isNaN(OptionId) ? OptionId : EMPTY_OPEN_ANSWERID,
        OpenAnswer: isNaN(OptionId) ? OptionId : "",
      })),
    };
    await axios
      .post(
        "https://votingresults.polskieradio.pl/api/quiz/SaveQuizResult",
        usersanswers
      )
      .then((result) => {
        setIsQuizFinished(true);
        data(result.data);
      })
      .catch((e) => {
        if (e?.response?.data?.Message) setError(true);
      });
  };

  return (
    <section className="relative bg-black aspect-[320/1035] h-full md:aspect-[1920/1080]">
      <div className="absolute  top-0 right-0 w-10/12 h-1/7 aspect-[249/138] md:w-1/3 md:h-1/3">
        <Image src="/images/topRightYellowDots.png" layout="fill" />
      </div>
      <div className="pt-28 w-[80%] m-auto max-w-[900px]">
        <p className="text-center text-3xl md:text-[35px] font-bold font-oswald text-primary font-[600] uppercase pt-1 md:mt-[60px] mb-16">
          Co wiesz o Marii Konopnickiej?
        </p>
        <SideBorderBox
          containerClass=" h-[550px] md:mr-[10px]  min-[768px]:w-[85%] min-[1180px]:w-full m-auto"
          className="z-1"
        >
          <form onSubmit={handleSubmit(submitAnswers)} className="h-full  p-2">
            <Carousel
              renderBottomCenterControls={false}
              slideIndex={activeIndex}
              beforeSlide={(_, slideIndex) => setActiveIndex(slideIndex)}
              renderCenterRightControls={({ nextSlide }) => {
                if (activeIndex < data.questions.length - 1)
                  return (
                    <ArrowButton
                      onClick={nextSlide}
                      className="w-[45px] h-[45px] border-primary border-solid border-[2px] md:border-[4px] cursor-pointer top-1/2 -translate-y-1/8 translate-x-10 md:w-[80px] md:h-[80px] min-[1024px]:translate-x-[150px] lg:w-[110px] lg:h-[110px] md:translate-x-[120px]"
                    />
                  );
                return (
                  <ArrowButton
                    disabled={activeIndex === data.questions.length - 1}
                    onClick={nextSlide}
                    className="hidden w-[45px] h-[45px] bg-black border-primary border-solid border-[2px]  cursor-pointer top-1/2 -translate-y-1/2 "
                  />
                );
              }}
              renderCenterLeftControls={({ previousSlide }) => {
                if (activeIndex === 0) return null;

                return (
                  <ArrowButton
                    disabled={activeIndex === 0}
                    onClick={() => {
                      previousSlide();
                    }}
                    className=" rotate-180 w-[45px] h-[45px] border-primary border-solid border-[2px] md:border-[4px] cursor-pointer right-full top-1/2 -translate-y-1/8 md:-translate-x-[55px]  md:w-[80px] md:h-[80px] lg:w-[110px] lg:h-[110px]"
                  />
                );
              }}
            >
              {data?.questions?.map((el, index) => {
                return (
                  <div className="relative h-full" key={el.questionId}>
                    <div className="absolute  top-0 left-0 h-14 w-16 bg-[black] font-oswald flex justify-center items-center text-[26px] text-primary">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-[20px] lg:text-[28px]  pb-4 min-[768px]:text-[26px] font-bold font-oswald text-center min-[425px]:pt-24 pt-14 md:pb-[60px] md:w-[80%] w-[70%] border-solid border-b-[1px] border-black m-auto">
                        {el.content}
                      </p>
                      {el.options?.map((element) => {
                        return (
                          <div
                            key={element.optionId}
                            className="my-3 md:ml-4 mt-3"
                          >
                            <label
                              htmlFor={String(element.optionId)}
                              className=" px-2 font-oswald text-[24px] md:text-[30px]  tracking-[.48px] flex items-center md:ml-4"
                            >
                              {el.options.length > 1 && (
                                <>
                                  <input
                                    id={String(element.optionId)}
                                    type="radio"
                                    value={element.optionId}
                                    className="text-black m-4 w-5 h-5 hidden "
                                    {...register(
                                      String(el.questionId),

                                      {
                                        required: "To pole jest wymagane",
                                      }
                                    )}
                                  />

                                  <CustomRadio
                                    htmlFor={String(element.optionId)}
                                    selected={
                                      String(vals[el.questionId]) ===
                                      String(element.optionId)
                                    }
                                  />
                                </>
                              )}
                              <div className="h-full w-[100%] flex flex-col ">
                                <p className="ml-2 md:ml-4 min-[425px]:my-1 min-[768px]:text-[24px] text-[22px] lg:text-[28px] ">
                                  {element.content}
                                </p>
                                {el.options.length === 1 && (
                                  <input
                                    id={String(element.optionId)}
                                    type="text"
                                    className="fill:bg-primary h-[180px] md:h-[120px] w-full bg-black  outline-0 text-white flex justify-center placeholder:text-white font-oswald text-[24px] "
                                    {...register(String(el.questionId), {
                                      required: "To pole jest wymagane",
                                    })}
                                  />
                                )}
                              </div>
                            </label>
                            {index + 1 === data?.questions.length && (
                              <div className="ml-2 mt-4 md:ml-9">
                                <button
                                  type="submit"
                                  onClick={() => {
                                    handleSubmit(submitAnswers);
                                    handleErrors();
                                  }}
                                  className="leading-[26px] w-[45%] h-[100%] text-black font-oswald text-[29px] font-bold text-start"
                                >
                                  Wyślij
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <ErrorMessage
                      errors={errors}
                      name={String(el.questionId)}
                      render={({ message }) => (
                        <p className="text-[red] font-oswald ml-5 md:ml-10">
                          {message}
                        </p>
                      )}
                    />
                  </div>
                );
              })}
            </Carousel>
          </form>
        </SideBorderBox>
        <div className="md:flex md:justify-end md:py-8 md:w-full">
          <SideBorderBox
            containerClass=" h-[87px] mt-12 md:mt-6 z-10 max-w-md  md:w-[280px]"
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
      <div className="absolute bottom-0 left-0 w-10/12 z-0 aspect-[249/138]  md:w-1/4 md:h-1/4">
        <Image src="/images/bottomLeftYellowDots.png" layout="fill" />
      </div>
    </section>
  );
}

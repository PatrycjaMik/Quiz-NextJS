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

export default function FormQuiz({ data, loginData, setIsQuizEnded, isQuizEnded }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const vals = watch();

  const EMPTY_OPEN_ANSWERID = "208";

  const [activeIndex, setActiveIndex] = useState(0);

  React.useEffect(() => {
    handleErrors();
    console.log(isQuizEnded);
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
        setIsQuizEnded(true);
        data(result.data);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <section className="relative bg-black aspect-[320/1035] h-full">
      <div className="absolute  top-0 right-0 w-10/12 aspect-[249/138] ">
        <Image src="/images/topRightYellowDots.png" layout="fill" />
      </div>
      <div className="pt-28 w-[80%] m-auto  ">
        <p className="text-center text-3xl font-bold font-oswald text-primary font-[600] uppercase pt-1 mb-16">
          Co wiesz o Marii Konopnickiej?
        </p>
        <SideBorderBox containerClass=" h-[550px]">
          <form onSubmit={handleSubmit(submitAnswers)} className="h-full">
            <Carousel
              renderBottomCenterControls={false}
              slideIndex={activeIndex}
              beforeSlide={(_, slideIndex) => setActiveIndex(slideIndex)}
              renderCenterRightControls={({ nextSlide }) => (
                <ArrowButton
                  onClick={nextSlide}
                  className="w-[45px] h-[45px] border-primary border-solid border-[2px] cursor-pointer top-1/2 -translate-y-1/2"
                />
              )}
              renderCenterLeftControls={({ previousSlide }) => (
                <ArrowButton
                  onClick={previousSlide}
                  className=" rotate-180 w-[45px] h-[45px] border-primary border-solid border-[2px] cursor-pointer right-full top-1/2 -translate-y-1/2"
                />
              )}
            >
              {data?.questions?.map((el, index) => {
                return (
                  <div className="relative h-full" key={el.questionId}>
                    <div className="absolute  top-0 left-0 h-14 w-16 bg-[black] font-oswald flex justify-center items-center text-[26px] text-primary">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-[26px] font-bold font-oswald text-center pt-14 w-[70%] border-solid border-b-[1px] border-black m-auto">
                        {el.content}
                      </p>
                      {el.options?.map((element) => {
                        return (
                          <div key={element.optionId} className="my-4">
                            <label
                              htmlFor={String(element.optionId)}
                              className=" px-5 font-oswald text-[24px] tracking-[.48px] flex items-center"
                            >
                              {el.options.length > 1 && (
                                <>
                                  <input
                                    id={String(element.optionId)}
                                    type="radio"
                                    value={element.optionId}
                                    className="text-black m-4 w-5 h-5 hidden"
                                    {...register(
                                      String(el.questionId),

                                      {
                                        required: true,
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
                              <div className="h-full w-[90%] flex flex-col">
                                <p className="ml-4 ">{element.content}</p>
                                {el.options.length === 1 && (
                                  <input
                                    id={String(element.optionId)}
                                    type="text"
                                    className="fill:bg-primary h-[200px] w-full mx-2 bg-black  outline-0 text-white flex  placeholder:text-white font-oswald text-[24px] "
                                    {...register(
                                      String(el.questionId),

                                      {
                                        required: "To pole jest wymagane",
                                      }
                                    )}
                                  />
                                )}

                                <ErrorMessage
                                  errors={errors}
                                  render={({ message }) => <p>{message}</p>}
                                />
                              </div>
                            </label>
                            {index + 1 === data?.questions.length && (
                              <button
                                type="submit"
                                onClick={() => {
                                  handleSubmit(submitAnswers);
                                  handleErrors();
                                }}
                                className="absolute right-0 top-0 translate-x-1/2 translate-y-1/2 bg-primary border-solid border-black border-[3px]  w-[150px] h-[170px] text-black font-oswald text-[24px]"
                              >
                                Zatwierdź swoje odpowiedzi
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </form>
        </SideBorderBox>
      </div>
      <div className="absolute bottom-0 left-0 w-10/12 z-0 aspect-[249/138]">
        <Image src="/images/bottomLeftYellowDots.png" layout="fill" />
      </div>
    </section>
  );
}

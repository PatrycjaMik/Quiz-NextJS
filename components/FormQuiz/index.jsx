import { useForm } from "react-hook-form";
import Carousel from "nuka-carousel";
import axios from "axios";
import React, { useState } from "react";
import { SideBorderBox } from "../SideBorderBox";
import Image from "next/image";

export default function FormQuiz({ data, loginData, setQuizData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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

  const submitAnswers = async (e) => {
    e.preventDefault();
    const usersanswers = {
      QuizId: loginData.quizId,
      QuizVoteId: loginData.quizVoteId,
      UserName: loginData.username,
      Answers: [
        {
          QuestionId: userquestionid,
          OptionId: useroptionid,
          OpenAnswer: useropenanswer,
        },
      ],
    };
    await axios
      .post(
        "https://votingresults.polskieradio.pl/api/quiz/SaveQuizResult",
        usersanswers
      )
      .then((result) => {
        console.log(result);
        data(result.data);
      });
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
          <form
            action="api/quiz/SaveQuizResult"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Carousel
              withoutControls={false}
              adaptiveHeight={true}
              slideIndex={activeIndex}
              renderBottomCenterControls={true}
              beforeSlide={(_, slideIndex) => setActiveIndex(slideIndex)}
              defaultControlsConfig={{
                prevButtonStyle: {
                  background: "black",
                  color: "yellow",
                },
                nextButtonStyle: {
                  background: "black",
                  color: "yellow",
                },
                prevButtonText: "<",
                nextButtonText: ">",
              }}
            >
              {/* , index */}
              {data?.questions?.map((el) => {
                return (
                  <div key={el.questionId}>
                    <div>
                      <p className="text-[26px] font-bold font-oswald text-center pt-14 w-[80%] border-solid border-b-[1px] border-black m-auto">
                        {el.content}
                      </p>
                      {el.options?.map((element) => {
                        return (
                          <div key={element.optionId}>
                            <label
                              htmlFor={String(element.optionId)}
                              className=" px-5 font-oswald text-[24px] tracking-[.48px]"
                            >
                              {el.options.length > 1 && (
                                <input
                                  id={String(element.optionId)}
                                  type="radio"
                                  value={element.optionId}
                                  className=" text-gray-900 text-black text-black m-4"
                                  {...register(String(el.questionId), {
                                    required: true,
                                  })}
                                />
                              )}
                              {element.content}
                              {/* {index === data?.questions?.length && 'Ostatnie pytanie'} */}
                              {el.options.length === 1 && (
                                <input
                                  id={String(element.optionId)}
                                  type="text"
                                  {...register(String(el.questionId), {
                                    required: true,
                                  })}
                                />
                              )}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </Carousel>
            <div>
              <button
                type="submit"
                onClick={() => {
                  handleSubmit(onSubmit);
                  handleErrors();
                  setQuizData(10);
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </SideBorderBox>
      </div>
      <div className="absolute bottom-0 left-0 w-10/12 z-0 aspect-[249/138]">
        <Image src="/images/bottomLeftYellowDots.png" layout="fill" />
      </div>
    </section>
  );
}

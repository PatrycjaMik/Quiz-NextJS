import { useForm } from "react-hook-form";
import Carousel from "nuka-carousel";
import axios from "axios";
import React, { useState } from "react";

export default function FormQuiz({ data, loginData }) {
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
                <p>{el.content}</p>
                {el.options?.map((element) => {
                  return (
                    <div className="form-check" key={element.optionId}>
                      <label htmlFor={String(element.optionId)}>
                        {el.options.length > 1 && (
                          <input
                            id={String(element.optionId)}
                            type="radio"
                            value={element.optionId}
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
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

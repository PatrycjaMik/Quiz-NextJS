import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styles from "../FormQuiz/formQuiz.module.scss";
import axios from "axios";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

export default function FormQuiz({ data, loginData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // const errorsArr = Object.entries(errors);
  // errorsArr.forEach(([questId]) => {
  //   console.log("questId: ", questId); //string
  //   // console.log("errors: ", errors); //object
  //   // console.log("errors length: ", errorsArr.length); //number
  // });

  const [swiper, setSwiper] = useState();

  // const mojaFunkcja = (k) => {
  //   swiper.slideTo(k, 800, false);
  // };

  React.useEffect(() => {
    handleErrors();
  }, [errors]);

  const handleErrors = () => {
    const errorsId = Object.keys(errors);
    if (errorsId.length > 0) {
      const slideIndex = data.questions
        .map((el) => String(el.questionId))
        .indexOf(errorsId[0]);
      if (swiper.activeIndex !== slideIndex)
        swiper.slideTo(slideIndex, 800, true);
    }
  };

  // funkcja powrotu do slajdu bez odp

  //   funkcja SlideTo
  // const [swiper, setSwiper] = useState();
  // const handleSlideTo = () => {
  //   swiper.slideTo(0, 800, false);
  // };

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
      className={styles.form}
    >
      <Swiper
        className={styles.swiperContainer}
        navigation={true}
        modules={[Navigation]}
        onSwiper={(swiper) => setSwiper(swiper)}
        onSlideChange={() => console.log(swiper?.activeIndex)}
      >
        {data?.questions?.map((el) => {
          return (
            <SwiperSlide key={el.questionId} className={styles.swiperQuestion}>
              <div className={styles.swiperBlock}>
                <p className={styles.question}>{el.content}</p>
                {el.options?.map((element) => {
                  return (
                    <div className="form-check" key={element.optionId}>
                      <label htmlFor={String(element.optionId)}>
                        {el.options.length > 1 && (
                          <input
                            id={String(element.optionId)}
                            type="radio"
                            value={element.optionId}
                            className={styles.radioInput}
                            {...register(String(el.questionId), {
                              required: true,
                            })}
                          />
                        )}
                        {element.content}
                        {el.options.length === 1 && (
                          <input
                            id={String(element.optionId)}
                            type="text"
                            className={styles.textInput}
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
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.btnContainer}>
        <button
          type="submit"
          className={styles.btnSubmit}
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

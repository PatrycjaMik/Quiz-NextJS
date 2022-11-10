import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styles from "../FormQuiz/formQuiz.module.scss";
import axios from "axios";
import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";

export default function FormQuiz({ data, loginData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

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
        <button type="submit" className={styles.btnSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}

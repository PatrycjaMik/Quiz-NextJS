import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../FormQuiz/formQuiz.module.scss";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function FormQuiz({ data }) {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
        {data.questions?.map((el) => {
          return (
            <SwiperSlide key={el.questionId} className={styles.swiperQuestion}>
              <div className={styles.swiperBlock}>
                <p className={styles.question}>{el.content}</p>
                {el.options?.map((element) => {
                  return (
                    <div className="form-check">
                      <label htmlFor={toString(element.optionId)}>
                        <input
                          value={element.content}
                          id={toString(element.optionId)}
                          type="radio"
                          className="form-check-input"
                        />{" "}
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

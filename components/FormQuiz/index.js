import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../FormQuiz/formQuiz.module.scss";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function FormQuiz({ data }) {
  const {
    register,
    handleSubmit,
    watch,
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
                  return el.options.length == 1 ? (
                    <div className="form-check">
                      <label htmlFor={toString(element.optionId)}>
                        <input
                          value={element.content}
                          id={toString(element.optionId)}
                          type="radio"
                          className={styles.radioInput}
                        />
                        {element.content}
                        <input
                          id={toString(element.optionId)}
                          type="text"
                          className={styles.textInput}
                          {...register("answerRequired", {
                            required: true,
                          })}
                        />
                        {""}
                      </label>
                    </div>
                  ) : (
                    <div className="form-check">
                      <label htmlFor={toString(element.optionId)}>
                        <input
                          value={element.content}
                          id={toString(element.optionId)}
                          type="radio"
                          className={styles.radioInputVisible}
                          {...register("answerRequired", { required: true })}
                        />
                        {element.content}
                        <input
                          value={element.content}
                          id={toString(element.optionId)}
                          type="text"
                          className={styles.textInputHidden}
                        />
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

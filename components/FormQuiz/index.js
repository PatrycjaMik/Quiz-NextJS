import { useForm } from "react-hook-form";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
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
    >
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation={true}
        className=".swiper-container"
      >
        {data.questions?.map((el) => {
          return (
            <div>
              <SwiperSlide key={el.questionId}>
                <div>
                  <p>{el.content}</p>
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
            </div>
          );
        })}
      </Swiper>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
}

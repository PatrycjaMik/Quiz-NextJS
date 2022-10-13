import { useForm } from "react-hook-form";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function FormQuiz({ data }) {
  const {
    register,
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
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.questions.map(({ content, options, questionId }) => {
          <SwiperSlide key={questionId}>
            <div>
              <p>{content}</p>
              {options.map(({ content, optionId }) => (
                <div className="form-check">
                  <label for="odp1">
                    <input
                      {...register("UsersAnswer", { required: false })}
                      value={optionId}
                      type="radio"
                      className="form-check-input"
                    />{" "}
                    {content}
                  </label>
                </div>
              ))}
            </div>
          </SwiperSlide>;
        })}
      </Swiper>

      <div className="text-danger mt-2">
        {errors.favShow?.type === "required" && "Value is required"}
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
}

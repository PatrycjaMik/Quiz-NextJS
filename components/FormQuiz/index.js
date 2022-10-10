import { useForm } from "react-hook-form";
import { quizData } from "../../mocks";

export default function FormQuiz() {
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
      <p>{quizData[0].questionText}</p>
      <div className="form-check">
        <label for="odp1">
          <input
            {...register("UsersAnswer", { required: false })}
            id={quizData[0].id}
            type="radio"
            value="odp1"
            className="form-check-input"
          />{" "}
          {quizData[0].answers[0].answerText}
        </label>
      </div>

      <div className="form-check">
        <label for="odp2">
          <input
            {...register("UsersAnswer", { required: true })}
            type="radio"
            value="odp2"
            className="form-check-input"
            id={quizData[0].id}
          />{" "}
          {quizData[0].answers[1].answerText}
        </label>
      </div>

      <div className="form-check">
        <label for="odp3">
          <input
            {...register("UsersAnswer", { required: false })}
            type="radio"
            value="odp3"
            className="form-check-input"
            id={quizData[0].id}
          />
          {quizData[0].answers[2].answerText}
        </label>
      </div>

      <div className="form-check">
        <label for="odp4">
          <input
            {...register("UsersAnswer", { required: false })}
            type="radio"
            value="odp4"
            className="form-check-input"
            id={quizData[0].id}
          />
          {quizData[0].answers[3].answerText}
        </label>
      </div>

      <div className="text-danger mt-2">
        {errors.favShow?.type === "required" && "Value is required"}
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
}

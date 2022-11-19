import axios from "axios";
import { QUIZ_ID } from "../../config";

export default function QuizStartPage({ setQuizData, loginForm }) {
  const {
    formState: { errors },
    register,
    setValue,
    handleSubmit,
  } = loginForm;

  const submitUser = async (data) => {
    const userdata = {
      ...data,
      QuizId: QUIZ_ID,
      Agreements: true,
    };
    await axios
      .post(
        "https://votingresults.polskieradio.pl/api/quiz/StartQuiz",
        userdata
      )
      .then((result) => {
        console.log(result);
        setQuizData(result.data);
        setValue("quizVoteId", result.data.quizVoteId);
      });
  };
  console.log(loginForm);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(submitUser)}>
          <div>
            <label htmlFor="username">nazwa użytkownika</label>
            <input
              id="UserName"
              type="text"
              required
              {...register("UserName", {
                required: true,
              })}
            />
            {errors.userName && <span>podaj nazwę użytkownika</span>}
            <label htmlFor="email">email</label>
            <input
              id="Email"
              type="email"
              {...register("Email", {
                required: true,
              })}
            />
            {errors.Email && <span>wpisz swój email</span>}
          </div>
          <div>
            <button type="submit">Zacznij quiz</button>
          </div>
        </form>
      </div>
    </div>
  );
}

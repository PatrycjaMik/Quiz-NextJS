import axios from "axios";
import styles from "../QuizStartPage/quizStartPage.module.scss";
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
    <div className={styles.startCard}>
      <div className={styles.formContainer}>
        <form
          onSubmit={handleSubmit(submitUser)}
          className={styles.formStartPage}
        >
          <div className={styles.formWrapper}>
            <label className="inputName" htmlFor="username">
              nazwa użytkownika
            </label>
            <input
              className="registerInput"
              id="UserName"
              type="text"
              required
              {...register("UserName", {
                required: true,
              })}
            />
            {errors.userName && (
              <span className={styles.errorMessage}>
                podaj nazwę użytkownika
              </span>
            )}
            <label className="inputName" htmlFor="email">
              email
            </label>
            <input
              className="registerInput"
              id="Email"
              type="email"
              {...register("Email", {
                required: true,
              })}
            />
            {errors.Email && (
              <span className={styles.errorMessage}>wpisz swój email</span>
            )}
          </div>
          <div className={styles.btnWrapper}>
            <button className={styles.submitBtn} type="submit">
              Zacznij quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import QuizStartPage from "../components/QuizStartPage";
import FormQuiz from "../components/FormQuiz/index.js";
import styles from "../styles/Home.module.scss";
import { useForm } from "react-hook-form";

export default function Home() {
  const [quiz, setQuiz] = React.useState();
  const loginForm = useForm();

  const { watch } = loginForm;
  const loginData = watch();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {!quiz && <QuizStartPage setQuizData={setQuiz} loginForm={loginForm} />}
        {quiz && <FormQuiz data={quiz} loginData={loginData} />}
      </main>
    </div>
  );
}

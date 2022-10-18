import React from "react";
import QuizStartPage from "../components/QuizStartPage";
import FormQuiz from "../components/FormQuiz/index.js";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [quiz, setQuiz] = React.useState();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {!quiz && <QuizStartPage setQuizData={setQuiz} />}
        {quiz && <FormQuiz data={quiz} />}
      </main>
    </div>
  );
}

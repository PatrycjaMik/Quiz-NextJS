import React from "react";
import QuizStartPage from "../components/QuizStartPage";
import FormQuiz from "../components/FormQuiz/index.js";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [quizData, setQuizData] = React.useState();

  const submitUser = async (e) => {
    e.preventDefault();
    const userdata = {
      UserName: username,
      Email: useremail,
      QuizId: 7,
      Agreements: true,
      Description: "Pati z Zamościa",
    };
    await axios
      .post(
        "https://votingresults.polskieradio.pl/api/quiz/StartQuiz",
        userdata
      )
      .then((result) => {
        console.log(result.userdata);
      });
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {!quizData && <QuizStartPage />}
        {quizData && <FormQuiz data={quizData} />}
      </main>
    </div>
  );
}

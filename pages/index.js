import QuizQuestionPage from "../components/QuizQuestionPage";
import QuizStartPage from "../components/QuizStartPage";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <QuizStartPage />
        <QuizQuestionPage />
      </main>
    </div>
  );
}

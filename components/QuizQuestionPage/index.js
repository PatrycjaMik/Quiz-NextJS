import styles from "../QuizStartPage/quizStartPage.module.scss";
import FormQuiz from "../FormQuiz/index.js";

export default function QuizQuestionPage(props) {
  return (
    <div className={styles.startCard}>
      <div className={styles.formContainer}>
        <FormQuiz />
      </div>
    </div>
  );
}

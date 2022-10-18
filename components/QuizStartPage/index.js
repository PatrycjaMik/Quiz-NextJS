import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styles from "../QuizStartPage/quizStartPage.module.scss";

export default function QuizStartPage({ setQuizData }) {
  const {
    formState: { errors },
  } = useForm();
  const [username, setUsername] = useState("");
  const [useremail, setUserEmail] = useState("");

  const handleUserName = (e) => {
    const UserName = e.target.value;
    setUsername(UserName);
  };

  const handleUserEmail = (e) => {
    const Email = e.target.value;
    setUserEmail(Email);
  };

  const submitUser = async (e) => {
    e.preventDefault();
    const userdata = {
      UserName: username,
      Email: useremail,
      QuizId: 7,
      Agreements: true,
      Description: "Pati",
    };
    await axios
      .post(
        "https://votingresults.polskieradio.pl/api/quiz/StartQuiz",
        userdata
      )
      .then((result) => {
        console.log(result);
        setQuizData(result.data);
      });
  };
  return (
    <div className={styles.startCard}>
      <div className={styles.formContainer}>
        <form onSubmit={submitUser} className={styles.formStartPage}>
          <div className={styles.formWrapper}>
            <label className="inputName" for="username">
              nazwa użytkownika
            </label>
            <input
              className="registerInput"
              id="UserName"
              type="text"
              required
              onChange={(e) => handleUserName(e)}
            />
            {errors.userName && (
              <span className={styles.errorMessage}>
                podaj nazwę użytkownika
              </span>
            )}
            <label className="inputName" for="email">
              email
            </label>
            <input
              className="registerInput"
              id="Email"
              type="email"
              onChange={(e) => handleUserEmail(e)}
            />
            {errors.Email && (
              <span className={styles.errorMessage}>wpisz swój email</span>
            )}
          </div>
          <div className={styles.btnWrapper}>
            <button className={styles.submitBtn} onClick={(e) => submitUser(e)}>
              Zacznij quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

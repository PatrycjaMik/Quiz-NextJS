import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styles from "../QuizStartPage/quizStartPage.module.scss";

export default function QuizStartPage() {
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
    <div className={styles.startCard}>
      <div className={styles.formContainer}>
        <form onSubmit={submitUser} className={styles.formStartPage}>
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
            <span className={styles.errorMessage}>podaj nazwę użytkownika</span>
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
        </form>
      </div>
    </div>
  );
}

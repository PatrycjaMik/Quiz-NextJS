import React from "react";
import Hero from "../components/Hero";
import QuizStart from "../components/QuizStart";
import FormQuiz from "../components/FormQuiz/index.jsx";
import Prize from "../components/Prize";
import QuizEnd from "../components/QuizEnd";

import { useForm } from "react-hook-form";
import SmallerBlackMenu from "../components/SmallerBlackMenu/SmallerBlackMenu";
import YellowMenu from "../components/YellowMenu/YellowMenu";
import ModalTerms from "../components/ModalTerms/ModalTerms";
import ErrorModal from "../components/ErrorModal";

export default function Home() {
  const [quiz, setQuiz] = React.useState();
  const [isQuizEnded, setQuizEnded] = React.useState(false);
  const loginForm = useForm();

  const { watch } = loginForm;
  const loginData = watch();

  return (
    <div>
      <SmallerBlackMenu />
      <YellowMenu />
      <main style={{ marginTop: "170px" }}>
        <Hero />
        {!quiz && !isQuizEnded && (
          <QuizStart setQuizData={setQuiz} loginForm={loginForm} />
        )}
        {quiz && !isQuizEnded && (
          <FormQuiz
            data={quiz}
            loginData={loginData}
            setQuizEnded={setQuizEnded}
          />
        )}
        {isQuizEnded && <QuizEnd />}
        <Prize />{" "}
      </main>
      <ModalTerms />
      <ErrorModal />
    </div>
  );
}

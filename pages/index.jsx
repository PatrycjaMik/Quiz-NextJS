import React from "react";
import Hero from "../components/Hero";
import QuizStart from "../components/QuizStart";
import FormQuiz from "../components/FormQuiz/index.jsx";
import Prize from "../components/Prize";

import { useForm } from "react-hook-form";
import SmallerBlackMenu from "../components/SmallerBlackMenu/SmallerBlackMenu";
import YellowMenu from "../components/YellowMenu/YellowMenu";
import QuizEnd from "../components/QuizEnd";

export default function Home() {
  const [quiz, setQuiz] = React.useState();
  const loginForm = useForm();

  const { watch } = loginForm;
  const loginData = watch();

  return (
    <div>
      <SmallerBlackMenu />
      <YellowMenu />
      <main style={{ marginTop: "170px" }}>
        <Hero />
        {!quiz && <QuizStart setQuizData={setQuiz} loginForm={loginForm} />}
        {quiz && quiz !== 10 && <FormQuiz data={quiz} loginData={loginData} setQuizData={setQuiz} />}
        {quiz === 10 && <QuizEnd />}
        <Prize />
      </main>
    </div>
  );
}

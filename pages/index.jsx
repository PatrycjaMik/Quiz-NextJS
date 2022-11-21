import React from "react";
import Hero from "../components/Hero";
import QuizStart from "../components/QuizStart";
import QuizStartPage from "../components/QuizStartPage";
import FormQuiz from "../components/FormQuiz/index.jsx";

import { useForm } from "react-hook-form";
import SmallerBlackMenu from "../components/SmallerBlackMenu/SmallerBlackMenu";
import YellowMenu from "../components/YellowMenu/YellowMenu";


export default function Home() {
  const [quiz, setQuiz] = React.useState();
  const loginForm = useForm();

  const { watch } = loginForm;
  const loginData = watch();

  return (
    <div>
      <SmallerBlackMenu />
      <YellowMenu />
      <main style={{marginTop: "140px"}}>
        <Hero />
        <QuizStart/>
        {!quiz && <QuizStartPage setQuizData={setQuiz} loginForm={loginForm} />}
        {quiz && <FormQuiz data={quiz} loginData={loginData} />}
      </main>
    </div>
  );
}

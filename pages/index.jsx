import React from "react";
import Hero from "../components/Hero";
import QuizStart from "../components/QuizStart";
import FormQuiz from "../components/FormQuiz/index.jsx";

import { useForm } from "react-hook-form";


export default function Home() {
  const [quiz, setQuiz] = React.useState();
  const loginForm = useForm();

  const { watch } = loginForm;
  const loginData = watch();

  return (
    <div>
      <main>
        <Hero />
        {!quiz && <QuizStart setQuizData={setQuiz} loginForm={loginForm}/>}
        {quiz && <FormQuiz data={quiz} loginData={loginData} />}
      </main>
    </div>
  );
}

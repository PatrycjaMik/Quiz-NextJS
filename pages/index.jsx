import React from "react";
import Hero from "../components/Hero";
import QuizStart from "../components/QuizStart";
import FormQuiz from "../components/FormQuiz/index.jsx";
import Prize from "../components/Prize";
import QuizEnd from "../components/QuizEnd";
import axios from "axios";
import { QUIZ_ID } from "../config";

import { useForm } from "react-hook-form";
import SmallerBlackMenu from "../components/SmallerBlackMenu/SmallerBlackMenu";
import YellowMenu from "../components/YellowMenu/YellowMenu";
import ModalTerms from "../components/ModalTerms/ModalTerms";
import ErrorModal from "../components/ErrorModal";
import PreStart from "../components/PreStartQuiz";
// import QuizExpired from "../components/QuizExpired";
// import VotedAlready from "../components/VotedAlready";

export default function Home() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [isQuizFinished, setIsQuizFinished] = React.useState(false);
  const [isQuizAvailable, setQuizAvailable] = React.useState(false);
  const [isQuizExpired, setQuizExpired] = React.useState(false);
  // const [isVotedAlready, setVotedAlready] = React.useState(false);
  const [isError, setError] = React.useState(false);
  const loginForm = useForm();

  const { watch } = loginForm;
  const loginData = watch();

  React.useEffect(() => {
    console.log({ isError });
  }, [isError]);

  const shouldShowQuiz =
    !isQuizFinished && !isQuizExpired && isQuizAvailable && !isError;

  React.useEffect(() => {
    const fetchQuizAvailability = async () => {
      const { data } = await axios.get(
        `https://votingresults.polskieradio.pl/api/quiz/${QUIZ_ID}/details`
      );
      return data;
    };
    fetchQuizAvailability().then((data) => handleSetAvailability(data));
  }, []);
  const handleSetAvailability = (data) => {
    if (data.isAvailable) setQuizAvailable(true);
    if (data.isExpired) setQuizExpired(true);
  };

  return (
    <div>
      <SmallerBlackMenu />
      <YellowMenu />
      <main style={{ marginTop: "170px" }}>
        <Hero expired={isQuizExpired} />
        {!shouldShowQuiz && !isQuizAvailable && !isQuizExpired && <PreStart />}
        {/* {!shouldShowQuiz && isVotedAlready && <VotedAlready />} */}
        {!shouldShowQuiz && isQuizFinished && <QuizEnd />}
        {!shouldShowQuiz && isError && (
          <ErrorModal setError={setError} setLoggedIn={setLoggedIn} />
        )}
        {!isLoggedIn && shouldShowQuiz && (
          <QuizStart
            setQuizData={setLoggedIn}
            loginForm={loginForm}
            // setVotedAlready={setVotedAlready}
          />
        )}
        {isLoggedIn && shouldShowQuiz && (
          <FormQuiz
            data={isLoggedIn}
            loginData={loginData}
            setIsQuizFinished={setIsQuizFinished}
            setError={setError}
          />
        )}
        <Prize />
      </main>
      <ModalTerms />
    </div>
  );
}

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
import PreStart from "../components/PreStartQuiz";

export default function Home() {
  const [isLoggedIn, setLoggedIn] = React.useState(false); // użytkownik się zalogował i nie głosował wcześniej, quiz jest dostępny
  const [isQuizFinished, setIsQuizFinished] = React.useState(false); // użytkownik wypełnił quiz i submitnął - quizEnd
  const [isQuizAvailable, setQuizAvailable] = React.useState(true); // czy quiz może już być wypełniany (jeśli nie to komunikat, że jeszcze się nie rozpoczął) - prestart
  const [isQuizExpired, setQuizExpired] = React.useState(false); // czy quiz może jeszcze być wypełniany (jeśli nie, to komunikat, że termin quizu upłynął) - errorModal 'quiz zakonczony'
  const [isVotedAlready, setVotedAlready] = React.useState(false); // czy użytkownik już zagłosował (jeśli tak, to komunikat o tym)
  const loginForm = useForm();

  const { watch } = loginForm;
  const loginData = watch();

  console.log(isQuizFinished);

  const shouldShowQuiz =
    !isQuizFinished && !isQuizExpired && !isVotedAlready && isQuizAvailable;

  // React.useEffect(() => {
  //   const fetchQuizAvailability = async () => {
  //     const {data} = await axios.get(awldknawldihqawliej)
  //     return data
  //   }
  //   fetchQuizAvailability().then(data => handleSetAvailability(data))
  // }, [])
  // const handleSetAvailability = (data) => {
  //   if(data.isStarted) setQuizAvailable(true)
  //   if(data.isExpired) setQuizExpired(true)
  // }

  return (
    <div>
      <SmallerBlackMenu />
      <YellowMenu />
      <main style={{ marginTop: "170px" }}>
        <Hero />
        {/* {!shouldShowQuiz && isQuizExpired && <ExpiredMessage />} */}
        {/* {!shouldShowQuiz && !isAvailable && !isQuizExpired && <NotAvailableYetMessage />} prestart */}
        {/* {!shouldShowQuiz && isQuizFinished && <ThankYouForVotingMessage /> quizEnd} */}
        {/* {!shouldShowQuiz && isVotedAlready && <VotedAlreadyMessage />} */}
        {!isLoggedIn && shouldShowQuiz && (
          <QuizStart setQuizData={setLoggedIn} loginForm={loginForm} />
        )}
        {isLoggedIn && shouldShowQuiz && (
          <FormQuiz
            data={isLoggedIn}
            loginData={loginData}
            setIsQuizEnded={setIsQuizFinished}
          />
        )}
        {isQuizFinished && <QuizEnd />}
        <Prize />
      </main>
      <ModalTerms />
      <ErrorModal />
      <PreStart />
    </div>
  );
}

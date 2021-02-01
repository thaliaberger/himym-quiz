import React from "react";
import db from "../db.json";
import styled from "styled-components";

import QuizBackground from "../src/components/QuizBackground";
import Widget from "../src/components/Widget";
import QuizContainer from "../src/components/QuizContainer";
import AlternativesForm from "../src/components/AlternativesForm";

function LoadingWidget() {
  return (
    <Widget.Loading>
      <h1>wait for it</h1>

      <img
        style={{
          margin: "0 auto",
        }}
        src="https://media3.giphy.com/media/cOoZeyKRpexWmQP1QX/giphy.gif"
      />
    </Widget.Loading>
  );
}

function ResultWidget({ result }) {
  return (
    <Widget>
      <Widget.Header>
        <h1>dary. Legendary!</h1>
      </Widget.Header>
      <img
        style={{
          margin: "0",
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
        src="https://payload.cargocollective.com/1/19/619795/10006275/Barney.gif"
      />
      <Widget.Content>
        <h2 className="questions-title">
          Você acertou {result.filter((x) => x).length} questões.
        </h2>
        <ul className="result-ul">
          {result.map((resposta, index) => {
            return (
              <li key="">
                <strong> {index + 1}: </strong>
                <p> {resposta === true ? "Acertou" : "Errou :("}</p>
              </li>
            );
          })}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(
    undefined
  );
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <h3 className="header-title">
          Pergunta {questionIndex + 1} de {totalQuestions}
        </h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          margin: "0",
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2 className="questions-title">{question.title}</h2>
        <form
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsFormSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsFormSubmited(false);
              setSelectedAlternative(undefined);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
              >
                <input
                  style={{ display: "none" }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeId)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <button type="submit" disabled={!hasAlternativeSelected}>
            Ok
          </button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: "QUIZ",
  LOADING: "LOADING",
  RESULT: "RESULT",
};

export default function Quiz() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [result, setResult] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const question = db.questions[currentQuestion];
  const totalQuestions = db.questions.length;
  const questionIndex = currentQuestion;

  function addResult(newResult) {
    setResult([...result, newResult]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 2 * 1000);
  }, []);

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground>
      <QuizContainer>
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={currentQuestion}
            onSubmit={handleSubmit}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <ResultWidget result={result} />
        )}
      </QuizContainer>
    </QuizBackground>
  );
}

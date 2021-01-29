import React from "react";
import db from "../db.json";
import styled from "styled-components";

import QuizBackground from "../src/components/QuizBackground";
import Widget from "../src/components/Widget";
import QuizContainer from "../src/components/QuizContainer";
import AlternativesForm from "../src/components/AlternativesForm";

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h1>wait for it</h1>
      </Widget.Header>

      <Widget.Content>
        <img
          style={{
            margin: "0 auto",
          }}
          src="https://media3.giphy.com/media/cOoZeyKRpexWmQP1QX/giphy.gif"
        />
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit }) {
  const questionId = `question__${questionIndex}`;
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
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic as="label" htmlFor={alternativeId}>
                <input
                  style={{ display: "none" }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <button type="submit">Ok</button>
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
  // const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const question = db.questions[currentQuestion];
  const totalQuestions = db.questions.length;
  const questionIndex = currentQuestion;

  // function addResult(result) {
  //   setResults([...results, result]);
  // }

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
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <div>Você acertou X questões, parabéns!</div>
        )}
      </QuizContainer>
    </QuizBackground>
  );
}

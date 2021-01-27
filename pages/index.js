import React from "react";
import styled from "styled-components";
import Widget from "../src/components/Widget";
import QuizBackground from "../src/components/QuizBackground";
import { useRouter } from "next/router";

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 20px 0 90px 0;
  margin: auto 13%;

  img {
    height: 100px;
    margin-left: 110px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState("");

  return (
    <QuizBackground>
      <QuizContainer>
        <img src="https://i.pinimg.com/originals/87/91/e0/8791e067c5486e07267c022720d4d21c.png" />
        <Widget>
          <Widget.Header>
            <h1>Hi! Haaave you met Ted?</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={function (event) {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <input
                onChange={function (event) {
                  setName(event.target.value);
                }}
                placeholder="Qual o seu nome?"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
              </button>
            </form>
            <p class="legen">It's gonna be legen...</p>
            <p>
              <small>wait for it </small>
            </p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz</h1>
            <p>Lorem ipsum...</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}

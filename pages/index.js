import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import Widget from "../src/components/Widget";
import Input from "../src/components/Input";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";

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
              <Input
                name="nomeDoUsuario"
                onChange={function (event) {
                  setName(event.target.value);
                }}
                placeholder="Qual o seu nome?"
                value={name}
              />
              <p class="legen">It's gonna be legen...</p>

              <button type="submit" disabled={name.length === 0}>
                Ei {name}, vamos jogar?
              </button>
            </form>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}

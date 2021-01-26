import styled from "styled-components";
import Widget from "../src/components/Widget";
import QuizBackground from "../src/components/QuizBackground";

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 50px 0 150px 0;
  margin: auto 10%;

  img {
    height: 100px;
    margin-left: 110px;
  }
`;

export default function Home() {
  return (
    <QuizBackground>
      <QuizContainer>
        <img src="https://i.pinimg.com/originals/87/91/e0/8791e067c5486e07267c022720d4d21c.png" />
        <Widget>
          <Widget.Header>
            <h1>how i met your mother - The Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum...</p>
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

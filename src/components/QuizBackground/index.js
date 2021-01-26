import styled from "styled-components";

const QuizBackground = styled.div`
  width: 100%;
  background-size: cover;
  background-position: 0 0;
  background-image: url("https://i.ibb.co/RvvY7M9/Design-sem-nome-1.png");
  background-color: ${({ theme }) => theme.colors.dark};
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
      background-position: center;
      background-image: linear-gradient(
          transparent,
          ${({ theme }) => theme.colors.bird}
        ),
        url("https://i.ibb.co/RvvY7M9/Design-sem-nome-1.png");
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;

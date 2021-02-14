import styled from "styled-components";

const QuizBackground = styled.div`
  min-height: 800px;
  background: url("https://i.ibb.co/dDDyzZw/bg.png") no-repeat center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.bird};
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
        url("https://i.ibb.co/HndSm4n/bg.png");
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

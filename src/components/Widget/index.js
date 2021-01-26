import styled from "styled-components";

const Widget = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
  font-family: "Open Sans", sans-serif;
  margin: 30px 0;
  border: 2px solid black;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 10px;
  overflow: hidden;
  height: 150px;
  /* display: flex;
  flex-direction: column;
  align-items: center; */

  h1 {
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
    font-family: "Playfair Display", serif;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.15em;
  }

  p {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.orange};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;

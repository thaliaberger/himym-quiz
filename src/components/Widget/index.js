import styled from "styled-components";

const Widget = styled.div`
  font-family: "Poppins", sans-serif;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  h1 {
    font-family: "Playfair Display", serif;
    color: ${({ theme }) => theme.colors.wood};
    font-size: 1.15em;
    letter-spacing: 1px;
    margin: 0 auto;
  }

  p {
    color: ${({ theme }) => theme.colors.bic};
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.bic};
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.2);

  * {
    margin: 0;
  }

  .header-title {
    font-family: "Playfair Display", serif;
    color: ${({ theme }) => theme.colors.wood};
    font-size: 1.15em;
    letter-spacing: 1px;
    margin: 0 auto;
  }
`;

Widget.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .result-ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .result-ul li {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 20px;
    padding: 5px;
    margin: 5px 0;
    background-color: ${({ theme }) => theme.colors.wood};
  }

  .result-ul strong {
    color: ${({ theme }) => theme.colors.bic};
    width: 30px;
  }

  button {
    position: relative;
    width: auto;
    display: inline-block;
    color: #ecf0f1;
    text-decoration: none;
    border-radius: 5px;
    border: solid 1px #f93920;
    background: ${({ theme }) => theme.colors.torange};
    text-align: center;
    padding: 6px 15px;
    margin: 20px 0 0 0;

    -webkit-transition: all 0.1s;
    -moz-transition: all 0.1s;
    transition: all 0.1s;

    -webkit-box-shadow: 0px 3px 0px #f93920;
    -moz-box-shadow: 0px 3px 0px #f93920;
    box-shadow: 0px 3px 0px #f93920;
  }

  button:active {
    -webkit-box-shadow: 0px 2px 0px #f93920;
    background-color: #fc4e37;
    -moz-box-shadow: 0px 2px 0px #f93920;
    box-shadow: 0px 2px 0px #f93920;
    position: relative;
    top: 4px;
  }

  button:hover {
    cursor: pointer;
    background-color: #fc4e37;
  }

  button:disabled {
    opacity: 0.5;
    -webkit-box-shadow: 0px 1px 0px #db8074;
    -moz-box-shadow: 0px 1px 0px #db8074;
    box-shadow: 0px 1px 0px #db8074;
    border: solid 1px #db8074;
    background: ${({ theme }) => theme.colors.torange};
    cursor: default;
  }

  button:focus {
    outline: none;
  }

  .legen {
    margin: 30px 0 0 0;
    font-weight: bold;
    font-size: 1.1em;
    font-family: "Playfair Display", serif;
  }

  [placeholder]:focus::-webkit-input-placeholder {
    transition: text-indent 0.2s 0.2s ease;
    text-indent: -100%;
    opacity: 1;
  }

  .questions-title {
    font-size: 1em;
    min-height: 70px;
    margin: 0;
    font-family: "Playfair Display", serif;
    color: ${({ theme }) => theme.colors.bic};
  }

  .result-title {
    font-size: 1em;
    min-height: 30px;
    margin: 0;
    padding: 0;
    font-family: "Playfair Display", serif;
    color: ${({ theme }) => theme.colors.bic};
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.bic};
  background-color: ${({ theme }) => theme.colors.wood};
  width: 200px;
  padding: 5px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.2s;
  display: block;
  box-shadow: 2px 2px 3px 0.2px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${({ theme }) => theme.colors.torange};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

Widget.Loading = styled.div`
  h1 {
    font-family: "Playfair Display", serif;
    color: ${({ theme }) => theme.colors.wood};
    background-color: ${({ theme }) => theme.colors.bic};
    width: 120px;
    text-align: center;
    font-size: 1.3em;
    letter-spacing: 1px;
    margin: 50px auto;
  }

  img {
    max-width: 200px;
    max-height: 500px;
    padding-left: 13px;
  }
`;

export default Widget;

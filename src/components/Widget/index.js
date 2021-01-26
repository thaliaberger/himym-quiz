import styled from "styled-components";

const Widget = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
  font-family: "Open Sans", sans-serif;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  h1 {
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
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
  ul {
    list-style: none;
    padding: 0;
  }

  input {
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
    width: 275px;
    height: 30px;
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.dark};
  }

  [placeholder]:focus::-webkit-input-placeholder {
    transition: text-indent 0.2s 0.2s ease;
    text-indent: -100%;
    opacity: 1;
  }

  input:focus,
  button:focus {
    outline: none;
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
    margin: 20px;

    -webkit-transition: all 0.1s;
    -moz-transition: all 0.1s;
    transition: all 0.1s;

    -webkit-box-shadow: 0px 3px 0px #f93920;
    -moz-box-shadow: 0px 3px 0px #f93920;
    box-shadow: 0px 3px 0px #f93920;
  }

  button:active {
    -webkit-box-shadow: 0px 2px 0px #f93920;
    -moz-box-shadow: 0px 2px 0px #f93920;
    box-shadow: 0px 2px 0px #f93920;
    position: relative;
    top: 4px;
  }

  button:disabled {
    opacity: 0.5;
    -webkit-box-shadow: 0px 1px 0px #db8074;
    -moz-box-shadow: 0px 1px 0px #db8074;
    box-shadow: 0px 1px 0px #db8074;
    border: solid 1px #db8074;
  }

  p {
    margin: 0;
  }
  .legen {
    font-weight: bold;
    font-size: 1.1em;
    font-family: "Playfair Display", serif;
  }
`;

export default Widget;

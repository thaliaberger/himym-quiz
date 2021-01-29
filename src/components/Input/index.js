import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputBase = styled.input`
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  width: 275px;
  height: 30px;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

function Input({ onChange, placeholder, ...props }) {
  return <InputBase placeholder={placeholder} onChange={onChange} {...props} />;
}
Input.defaultProps = {
  value: "",
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
export default Input;

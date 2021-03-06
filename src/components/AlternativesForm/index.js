import styled from "styled-components";

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.torange};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default AlternativesForm;

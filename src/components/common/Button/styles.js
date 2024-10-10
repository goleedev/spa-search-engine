import styled from "styled-components";

import theme from "../../../styles/theme";

export const Button = styled.button`
  padding: 14px 0;
  width: ${({ width }) => width};
  height: 48px;
  text-align: center;
  border-radius: ${theme.spacing.xs};
  cursor: pointer;
  border: none;

  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;

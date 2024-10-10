import styled from "styled-components";

import theme from "../../../styles/theme";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.grey.light};
  border-radius: ${theme.spacing.xs};
  padding: 14px ${theme.spacing.md};
  width: ${({ width }) => width || "100%"};
  height: 48px;
  max-width: 600px;

  svg {
    margin-right: ${theme.spacing.xs};
    width: 20px;
    height: 20px;
    stroke: ${theme.colors.grey.darker};
  }
`;

export const InputField = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: ${theme.font.size.xs};
  line-height: ${theme.font.size.md};

  color: ${theme.colors.textPrimary};
  background-color: transparent;

  &::placeholder {
    color: ${theme.colors.grey.darkest};
  }
`;

import styled from "styled-components";

import theme from "../../../styles/theme";

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 36px;
    height: 36px;
    cursor: pointer;
    font-size: ${theme.font.size.xs};
    line-height: ${theme.font.size.md};
    font-weight: 500;

    background: none;
    border: 1px solid ${theme.colors.grey.darker};
    border-radius: 4px;

    &:first-child {
      border-radius: 4px 0 0 4px;
    }

    &:last-child {
      border-radius: 0 4px 4px 0;
    }

    &:hover:not(:disabled) {
      background: none;
    }

    &.active {
      border: none;
      color: ${theme.colors.primary};
    }

    &.inactive {
      border: none;
      color: ${theme.colors.grey.darkest};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    .flip {
      transform: rotate(180deg);
    }
  }
`;

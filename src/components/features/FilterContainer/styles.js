import styled from "styled-components";

import theme from "../../../styles/theme";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: ${theme.spacing.xl};
`;

export const FilterGroup = styled.div`
  display: flex;
  width: 100%;
  gap: ${theme.spacing.md};
  padding-bottom: ${theme.spacing.xl};
`;

export const DatePickerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  border: 1px solid ${theme.colors.grey.light};
  border-radius: ${theme.spacing.xs};
  padding: 0 ${theme.spacing.sm} 0 40px;

  svg {
    position: absolute;
    left: ${theme.spacing.md};
    pointer-events: none;

    color: ${theme.colors.grey.darkest};
  }
`;

export const DateInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 12px;

  color: ${theme.colors.textPrimary};

  &::placeholder {
    font-size: ${theme.font.size.xs};
    color: ${theme.colors.grey.darkest};
  }
`;

export const ClearFiltersButton = styled.button`
  width: fit-content;
  height: ${theme.font.size.xl};
  font-size: ${theme.font.size.xs};
  line-height: ${theme.font.size.md};
  font-weight: 500;
  border: none;
  cursor: pointer;

  background-color: transparent;
  color: ${theme.colors.primary};

  &:hover {
    color: ${theme.colors.primaryDark};
  }
`;

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

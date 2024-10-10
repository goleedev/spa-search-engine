import styled from "styled-components";

import theme from "../../../styles/theme";

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Result = styled.div`
  padding: 72px 0;
  border-bottom: 1px solid ${theme.colors.grey.light};
`;

export const ResultDate = styled.div`
  padding-top: 11px;
  padding-bottom: ${theme.spacing.md};
  font-size: 12px;
  line-height: ${theme.font.size.sm};
  font-weight: 600;
  text-transform: uppercase;

  color: ${theme.colors.black};
`;

export const ResultTitle = styled.h2`
  font-size: 26px;
  line-height: ${theme.spacing.xl};
  font-weight: 400;
  cursor: pointer;
  padding-bottom: ${theme.spacing.md};

  color: ${theme.colors.primary};

  &:hover {
    text-decoration: underline;
  }
`;

export const ResultContent = styled.p`
  font-size: ${theme.font.size.xs};
  line-height: ${theme.spacing.md};
  padding-bottom: ${theme.spacing.lg};

  color: ${theme.colors.grey.darkest};
`;

export const ResultDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ResultDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  font-size: ${theme.font.size.xs};
  line-height: ${theme.font.size.md};
  font-weight: 600;

  color: ${theme.colors.grey.darkest};

  span:first-child {
    font-size: 12px;
    line-height: ${theme.font.size.sm};
    font-weight: 400;
  }
`;

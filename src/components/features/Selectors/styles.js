import styled from "styled-components";

import theme from "../../../styles/theme";

export const SelectorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${theme.spacing.xl};
`;

export const SelectorsGroups = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
`;

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

export const ResultText = styled.h1`
  font-size: ${theme.font.size.xl};
  line-height: 32px;

  color: ${theme.colors.textPrimary};
`;

export const ResultCount = styled.p`
  font-size: ${theme.font.size.xs};
  line-height: ${theme.font.size.md};

  color: ${theme.colors.grey.darkest};
`;

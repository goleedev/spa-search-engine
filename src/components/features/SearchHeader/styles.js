import styled from "styled-components";

import theme from "../../../styles/theme";

export const SearchHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
  text-align: center;
  margin-bottom: 64px;
`;

export const Title = styled.h1`
  font-size: ${theme.font.size.xxl};
  line-height: 55px;
  font-weight: 600;

  color: ${theme.colors.textPrimary};
`;

export const Description = styled.p`
  font-size: ${theme.font.size.md};
  line-height: ${theme.font.size.xl};

  color: ${theme.colors.grey.darkest};
`;

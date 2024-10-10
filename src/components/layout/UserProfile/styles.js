import styled from "styled-components";

import theme from "../../../styles/theme";

export const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};
  padding: 10px;
`;

export const Thumbnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;

  color: ${theme.colors.primaryDarker};
  background-color: ${theme.colors.primaryMutedDark};
`;

export const UserName = styled.span`
  font-size: ${theme.font.size.md};
  line-height: ${theme.font.size.xl};

  color: ${theme.colors.textPrimary};
`;

import styled from "styled-components";

import theme from "../../../styles/theme";

export const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};
  padding: 10px;
`;

export const ThumbnailContainer = styled.div`
  width: 48px;
  height: 48px;

  border: 1px solid ${theme.colors.black};
`;

export const Thumbnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  color: ${theme.colors.primaryDarker};
  background-color: ${theme.colors.primaryMutedDark};
  box-shadow: 0px 4px 4px 0px #00000040;
`;

export const UserName = styled.span`
  font-size: ${theme.font.size.md};
  line-height: ${theme.font.size.xl};

  color: ${theme.colors.textPrimary};
`;

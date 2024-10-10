import styled from "styled-components";

import theme from "../../../styles/theme";

export const Logo = styled.img`
  width: 32px;
  height: 32px;
`;

export const SidebarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100px;
  height: 100vh;
  padding: 32px 27px;
  z-index: 999;

  background-color: ${theme.colors.white};
  border-right: 1px solid ${theme.colors.primaryMuted};
  flex-direction: column;
`;

export const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const SidebarItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;

  background: ${({ isActive }) => (isActive ? `${theme.colors.primaryMuted}` : "transparent")};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.primaryLight};
  }
`;

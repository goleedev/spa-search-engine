import styled from "styled-components";

import theme from "../../../styles/theme";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 40px 64px 40px 170px;

  background-color: ${theme.colors.primaryLight};
`;

export const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${theme.spacing.lg};
`;

export const FooterGroup = styled.div`
  display: flex;
  gap: 96px;
`;

export const LogoContainer = styled.div`
  flex: 1;

  font-size: ${theme.font.size.xs};
  line-height: ${theme.font.size.md};
  color: ${theme.colors.grey.darkest};
`;

export const Tagline = styled.p`
  padding: ${theme.spacing.md} 0;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  gap: ${theme.spacing.sm};
`;

export const LinksTitle = styled.h3`
  font-size: ${theme.font.size.sm};
  line-height: ${theme.font.size.lg};
  font-weight: 600;

  color: ${theme.colors.textPrimary};
`;

export const LinkItem = styled.a`
  font-size: ${theme.font.size.xs};
  line-height: ${theme.font.size.md};
  cursor: pointer;

  color: ${theme.colors.grey.darkest};
  -webkit-text-stroke: ${({ isHome }) => (isHome ? `1px ${theme.colors.black}` : "none")};
  text-shadow: ${({ isHome }) => (isHome ? "0 4px 4px rgba(0, 0, 0, 0.25)" : "none")};

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${theme.spacing.lg};

  border-top: 1px solid ${theme.colors.grey.lighter};
`;

export const Copyright = styled.p`
  font-size: ${theme.font.size.xs};
  line-height: ${theme.font.size.md};

  color: ${theme.colors.grey.darkest};
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
`;

export const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

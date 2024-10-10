import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  LogoIcon,
  TiktokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../../assets";
import * as S from "./styles";

const links = [
  {
    title: "Quick Links",
    items: ["Home", "Data", "Cases", "Customers", "Search Engine", "Custom Fields", "Support"],
  },
  {
    title: "Legals",
    items: ["Terms & Conditions", "Privacy Policy", "AI Safety Policy", "Cookie Policy", "Compliance Statement"],
  },
];

const socialMediaLinks = [
  { href: "#", icon: <FacebookIcon />, alt: "Facebook" },
  { href: "#", icon: <TwitterIcon />, alt: "Twitter" },
  { href: "#", icon: <LinkedinIcon />, alt: "LinkedIn" },
  { href: "#", icon: <YoutubeIcon />, alt: "YouTube" },
  { href: "#", icon: <TiktokIcon />, alt: "Tiktok" },
  { href: "#", icon: <InstagramIcon />, alt: "Instagram" },
];

const Footer = () => (
  <S.FooterContainer>
    <S.FooterSection>
      <S.LogoContainer>
        <LogoIcon />
        <S.Tagline>Justice for all.</S.Tagline>
        <>
          hello@courtcorrect.com
          <br />
          33 Percy St, London W1T 2DF
          <br />
          020 7867 3925
        </>
      </S.LogoContainer>

      <S.FooterGroup>
        {links.map(({ title, items }) => (
          <S.LinksContainer key={title}>
            <S.LinksTitle>{title}</S.LinksTitle>
            {items.map(item => (
              <S.LinkItem key={item}>{item}</S.LinkItem>
            ))}
          </S.LinksContainer>
        ))}
      </S.FooterGroup>
    </S.FooterSection>

    <S.FooterBottom>
      <S.Copyright>© 2023 CourtCorrect LTD</S.Copyright>
      <S.SocialMediaContainer>
        {socialMediaLinks.map(({ href, icon, alt }) => (
          <S.SocialIcon key={alt} href={href} target="_blank" aria-label={alt}>
            {icon}
          </S.SocialIcon>
        ))}
      </S.SocialMediaContainer>
    </S.FooterBottom>
  </S.FooterContainer>
);

export default Footer;

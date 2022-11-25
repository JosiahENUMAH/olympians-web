import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterSocialMedia,
  FooterSocialWrap,
  FooterSocialLogo,
  FooterWebsiteRights,
  FooterSocialIcons,
  SocialIconLink,
} from "./FooterStyled";
import Logo from "../../images/Logo.svg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> Who Are We? </FooterLinkTitle>
                <FooterLink to="/">How It works</FooterLink>
                <FooterLink to="/">Testimonials</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
                <FooterLink to="/">Investors</FooterLink>
                <FooterLink to="/">Terms of Service</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle> Videos </FooterLinkTitle>
                <FooterLink to="/">Submit Video</FooterLink>
                <FooterLink to="/">Ambassadors</FooterLink>
                <FooterLink to="/">Agency</FooterLink>
                <FooterLink to="/">Inflencer</FooterLink>
                <FooterLink to="/">Partner</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> Contact Us </FooterLinkTitle>
                <FooterLink to="/">Contact</FooterLink>
                <FooterLink to="/">Support</FooterLink>
                <FooterLink to="/">Destinations</FooterLink>
                <FooterLink to="/">Sponsorships</FooterLink>
                <FooterLink to="/">CSR</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle> Offerings </FooterLinkTitle>
                <FooterLink to="/">Event Management</FooterLink>
                <FooterLink to="/">Lorem</FooterLink>
                <FooterLink to="/">Ipsum</FooterLink>
                <FooterLink to="/">Cnnecting</FooterLink>
                <FooterLink to="/">Ipsum</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>

          <FooterSocialMedia>
            <FooterSocialWrap>
              <FooterSocialLogo to="/" onClick={toggleHome}>
                <>
                  <img src={Logo} />
                  <sub>©</sub>
                </>
              </FooterSocialLogo>
              <FooterWebsiteRights>
                All rights reserved. {new Date().getFullYear()}
              </FooterWebsiteRights>
              <FooterSocialIcons>
                <SocialIconLink
                  href="//www.linkedin.com/company/king-cabana-hq/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialIconLink>

                <SocialIconLink
                  href="//www.instagram.com/kingcabanahq/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>

                <SocialIconLink
                  href="//www.youtube.com"
                  target="_blank"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </SocialIconLink>

                <SocialIconLink
                  href="//www.twitter.com/KingCabanaHQ"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>

                <SocialIconLink
                  href="//www.facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
              </FooterSocialIcons>
            </FooterSocialWrap>
          </FooterSocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;

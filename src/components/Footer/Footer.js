import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterSocialMedia,
  FooterSocialWrap,
  FooterSocialLogo,
  FooterWebsiteRights,
  FooterSocialIcons,
  SocialIconLink,
} from "./FooterStyled";
import {
  FaTiktok,
  FaWhatsapp,
  FaTwitter,
  FaYoutube,
  FaMailBulk,
} from "react-icons/fa";
import { GiFlamingTrident } from "react-icons/gi";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer
        to="contact"
        id="contact"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        <FooterWrap>
          <div style={{ color: "white", marginBottom: "1rem" }}>
            {" "}
            Contact Us{" "}
          </div>
          <div style={{ color: "white", marginBottom: "2rem" }}>
            {" "}
            Reach us via the followwing channels partnerships, sponsorships and
            general inquiries:{" "}
          </div>
          <FooterSocialIcons>
            <SocialIconLink
              href="https://www.tiktok.com/@olympianstv"
              target="_blank"
              aria-label="TikTok"
            >
              <FaTiktok />
            </SocialIconLink>

            <SocialIconLink
              href="http://wa.me/+2348084809607"
              target="_blank"
              aria-label="Whatsapp"
            >
              <FaWhatsapp />
            </SocialIconLink>

            <SocialIconLink
              href="//youtube.com/@olympiangamers"
              target="_blank"
              aria-label="YouTube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="mailto:olympiansfpl@gmail.com"
              target="_blank"
              aria-label="YouTube"
            >
              <FaMailBulk />
            </SocialIconLink>

            <SocialIconLink
              href="https://twitter.com/OlympiansFPL"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
          </FooterSocialIcons>
          {/* <FooterLinksContainer>
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
          </FooterLinksContainer> */}
          <FooterSocialMedia>
            <FooterSocialWrap>
              <FooterSocialLogo to="/" onClick={toggleHome}>
                <>
                  Scroll to Top
                  <GiFlamingTrident style={{ color: "#ff2957" }} size={60} />
                </>
              </FooterSocialLogo>
              <FooterWebsiteRights>
                All rights reserved. {new Date().getFullYear()}
              </FooterWebsiteRights>
            </FooterSocialWrap>
          </FooterSocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;

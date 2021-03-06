import React from "react";
import {
  ArrowToTop,
  ContactHeader,
  ContactLink,
  Copyright,
  FooterArrowLine,
  FooterBigLink,
  FooterBigLinkContainer,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSmallTitle,
  FooterSmallTitleWrapper,
  FooterSocials,
  Small,
  StyledFooter,
} from "../styles/Footer.styled";
import { animateScroll as scroll } from "react-scroll";

import {
  SiLinkedin,
  SiGithub,
  SiMinutemailer,
  SiTwitter,
} from "react-icons/si";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 });
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter id="contactme">
      <FooterSmallTitleWrapper>
        <FooterSmallTitle>get in touch</FooterSmallTitle>
      </FooterSmallTitleWrapper>

      <FooterBigLinkContainer>
        <FooterBigLink
          href="mailto:imomkarlondhe@gmail.com"
          data-hover="Let's talk!"
        >
          Need a developer?
        </FooterBigLink>
      </FooterBigLinkContainer>
      <FooterContacts>
        <FooterContact>
          <ContactHeader>Call me</ContactHeader>
          <ContactLink href="tel:9049797926">9049797926</ContactLink>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Social</ContactHeader>{" "}
          <FooterSocials>
            <ContactLink
              href="https://github.com/Omkaar1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/omkar-londhe-495956224//"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin />
            </ContactLink>
            <ContactLink
              href="https://twitter.com/IMOmkaar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTwitter />
            </ContactLink>
          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Mail</ContactHeader>
          <ContactLink href="mailto:imomkarlondhe@gmail.com">
            imomkarlondhe@gmail.com
          </ContactLink>
        </FooterContact>
      </FooterContacts>

      <FooterLine />
      <div
        onClick={toTop}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontSize: "30px",
        }}
      >
        <BsFillArrowUpSquareFill
          style={{
            width: "40px",
            marginTop: "10px",
            cursor: "pointer",
            color: "white",
          }}
        />
        <a style={{ fontSize: "20px" }} onClick={toTop}>
          Go to top
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;

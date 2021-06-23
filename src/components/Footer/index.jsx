import React from "react";
import {
  FooterBottom,
  FooterContainer,
  FooterHalf,
  FooterLink,
  FooterLinkContainer,
  FooterLinkH2,
  FooterWrapper,
} from "./FooterElements";

const FooterSection = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterHalf>
          <FooterLinkContainer>
            <FooterLinkH2>About Us</FooterLinkH2>
            <FooterLink to='/'>How it's work</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of services</FooterLink>
          </FooterLinkContainer>
          <FooterLinkContainer>
            <FooterLinkH2>Videos</FooterLinkH2>
            <FooterLink to='/'>Submite video</FooterLink>
            <FooterLink to='/'>Ambassador</FooterLink>
            <FooterLink to='/'>Agency</FooterLink>
            <FooterLink to='/'>Influencers</FooterLink>
          </FooterLinkContainer>
        </FooterHalf>
        <FooterHalf>
          <FooterLinkContainer>
            <FooterLinkH2>Contac Us</FooterLinkH2>
            <FooterLink to='/'>Contact</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
            <FooterLink to='/'>Destination</FooterLink>
            <FooterLink to='/'>Sponsership</FooterLink>
          </FooterLinkContainer>
          <FooterLinkContainer>
            <FooterLinkH2>Social Media</FooterLinkH2>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Twitter</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'>Instagram</FooterLink>
          </FooterLinkContainer>
        </FooterHalf>
      </FooterContainer>
      <FooterBottom>
        &copy; V-Bank {new Date().getFullYear()} All right reserved.
      </FooterBottom>
    </FooterWrapper>
  );
};

export default FooterSection;

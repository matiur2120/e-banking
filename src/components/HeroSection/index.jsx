import React from "react";
import Video from "../../videos/video.mp4";
import Button from "../common/Button";
import {
  HeroBg,
  HeroContainer,
  HeroContents,
  HeroWrapper,
  VideoBg,
} from "./HerorSectionElements";

const HeroSection = () => {
  return (
    <HeroWrapper id='home'>
      <HeroContainer>
        <HeroContents>
          <h2>Virtual Banking Made Easy</h2>
          <p>
            Sign up for new account today and receive $250 in creadit towards
            your next payment.
          </p>
          <Button primary={true} big={false}>
            <span>Get Started</span>
          </Button>
        </HeroContents>
      </HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted>
          <source src={Video} type='video/mp4' />
        </VideoBg>
      </HeroBg>
    </HeroWrapper>
  );
};

export default HeroSection;

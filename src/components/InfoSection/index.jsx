import React from "react";
import Button from "../common/Button";
import {
  BtnContainer,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TopLine,
} from "./InfoSectionElements";

const InfoSection = ({
  id,
  lightBg,
  lightText,
  lightTextDesc,
  topLine,
  headline,
  description,
  buttonLavel,
  imgStart,
  img,
  alt,
  dark,
  primary,
  darkText,
}) => {
  return (
    <InfoWrapper id={id} lightBg={lightBg}>
      <InfoContainer>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText}>{headline}</Heading>
            <Subtitle darkLight={darkText}>{description}</Subtitle>
            <BtnContainer>
              <Button
                to='home'
                primary={primary}
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                {buttonLavel}
              </Button>
            </BtnContainer>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoContainer>
    </InfoWrapper>
  );
};

export default InfoSection;

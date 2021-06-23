import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";

import ServicesSection from "../components/ServicesSection";


const Home = () => {

  return (
    <>
      
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <ServicesSection />
    </>
  );
};

export default Home;

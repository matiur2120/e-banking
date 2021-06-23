import React from "react";
import Icon3 from "../../images/finance.svg";
import Icon1 from "../../images/saving.svg";
import Icon2 from "../../images/virtual.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH2,
  ServicesHeading,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

const ServicesSection = () => {
  return (
    <ServicesWrapper id='services'>
      <ServicesHeading>Our Services</ServicesHeading>
      <ServicesContainer>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            We help reduce your fees and increase your overall revenue.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>We can access our platform online anywhere.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium Benifits</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cash back.
          </ServicesP>
        </ServicesCard>
      </ServicesContainer>
    </ServicesWrapper>
  );
};

export default ServicesSection;

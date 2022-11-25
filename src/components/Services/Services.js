import React, { useState, useEffect } from "react";
import Icon1 from "../../images/svggggg.svg";
import Icon2 from "../../images/svgggg.svg";
import Icon3 from "../../images/svggg.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesStyled";

const Services = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <ServicesContainer
        scrollNav={scrollNav}
        to="services"
        id="services"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Sponsorships</ServicesH2>
            <ServicesP>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              aliquid laudantium dolor quis magni modi animi asperiores ad.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Proposal Implementations</ServicesH2>
            <ServicesP>
              Ad aperiam, minus excepturi possimus quaerat voluptatum architecto
              cum? Voluptatibus, corrupti adipisci.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Event Management</ServicesH2>
            <ServicesP>
              Ad aperiam, minus excepturi possimus quaerat voluptatum architecto
              cum? Voluptatibus, corrupti adipisci.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;

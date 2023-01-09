import React from "react";
import sports from "../../images/sports.svg";
import tech from "../../images/tech.svg";
import play from "../../images/play.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ChannelsStyled";

const Channels = () => {
  return (
    <>
      <ServicesContainer
        to="channels"
        id="channels"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        <ServicesH1>Our Channels</ServicesH1>
        <ServicesWrapper>
          <a
            href="https://chat.whatsapp.com/DpY25TjApgeEntYF84f2c6"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ServicesCard>
              <div style={{ color: "#ff2957" }}> click to join </div>
              <ServicesIcon src={sports} />
              <ServicesH2>Sports</ServicesH2>
              <ServicesP>
                Where the real ballers <br /> roll...
              </ServicesP>
            </ServicesCard>
          </a>

          <a
            href="https://chat.whatsapp.com/DQU6m3es8yZFzScJxCc6Es"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ServicesCard>
              <div style={{ color: "#ff2957" }}> click to join </div>
              <ServicesIcon src={tech} />
              <ServicesH2>Technology</ServicesH2>
              <ServicesP>
                Be part of the best IT Community in the globe
              </ServicesP>
            </ServicesCard>
          </a>

          <a
            href="https://chat.whatsapp.com/L8b5LK2huGULntHTDVJtJt"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ServicesCard>
              <div style={{ color: "#ff2957" }}> click to join </div>
              <ServicesIcon src={play} />
              <ServicesH2>Entertainment</ServicesH2>
              <ServicesP>All genres of fun in one place!</ServicesP>
            </ServicesCard>
          </a>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Channels;

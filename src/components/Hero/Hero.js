import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonStyled";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtn,
  ArrowForward,
  ArrowRight,
} from "./HeroStyled";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          id="video"
          autoPlay
          loop
          muted
          src={Video}
          playsInline
          preload="metadata"
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Olympians</HeroH1>
        <HeroP>
          Community of inevitables: goal-oriented and vision driven individuals
        </HeroP>
        <HeroBtn>
          <Button
            href="http://wa.me/+2348084809607"
            target="_blank"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            // primary="true"
            white="true"
          >
            Join us {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtn>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

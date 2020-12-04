import React from "react";
import { About, Description, ImageContainer } from "../styles/styles";
import styled from "styled-components";

import useScroll from "../hooks/useScroll";
import { scrollReveal } from "../styles/animation";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  // const controls = useAnimation();
  // const [element, view] = useInView({ threshold: 0.2 });
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <ImageContainer>
        <img src={home2} alt="camera" />
      </ImageContainer>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    padding: 2rem 0rem 4rem 0rem;
    width: 70%;
  }
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem;
    text-align: center;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    align-items: center;
    display: flex;
    h3 {
      background-color: white;
      color: black;
      margin-left: 1rem;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;

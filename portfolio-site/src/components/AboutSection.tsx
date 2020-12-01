import React from "react";
import styled from "styled-components";

import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
          nemo itaque. Iste doloremque consectetur voluptatibus officia nostrum
          rem eveniet quisquam.
        </p>
        <button>Contact us</button>
      </Description>
      <ImageContainer>
        <img src={home1} alt="home" />
      </ImageContainer>
    </About>
  );
};

const About = styled.div`
  align-items: center;
  color: white;
  display: flex;
  justify-content: center;
  min-height: 90vh;
  padding: 5rem 10rem;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    height: 80vh;
    object-fit: cover;
    width: 100%;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;

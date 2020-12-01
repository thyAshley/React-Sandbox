import React from "react";
import { About, Description, Hide, ImageContainer } from "../styles/styles";

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

export default AboutSection;

import React from "react";
import { motion } from "framer-motion";

import { About, Description, Hide, ImageContainer } from "../styles/styles";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
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

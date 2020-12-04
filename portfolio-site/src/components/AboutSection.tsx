import React from "react";
import { motion } from "framer-motion";

import { About, Description, Hide, ImageContainer } from "../styles/styles";
import { titleAnimation, fade, photoAnimation } from "../styles/animation";
import home1 from "../img/home1.png";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
          nemo itaque. Iste doloremque consectetur voluptatibus officia nostrum
          rem eveniet quisquam.
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <ImageContainer>
        <motion.img variants={photoAnimation} src={home1} alt="home" />
      </ImageContainer>
      <Wave />
    </About>
  );
};

export default AboutSection;

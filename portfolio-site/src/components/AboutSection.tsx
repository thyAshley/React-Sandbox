import React from "react";
import { motion } from "framer-motion";

import { About, Description, Hide, ImageContainer } from "../styles/styles";
import home1 from "../img/home1.png";

const AboutSection = () => {
  const titleAnimate = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  const container = {
    hidden: {
      x: 100,
    },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 0.8,
      },
    },
  };
  return (
    <About>
      <Description>
        <motion.div
          className="title"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Hide>
            <motion.h2 variants={titleAnimate}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimate}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimate}>true.</motion.h2>
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

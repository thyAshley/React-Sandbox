import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import {
  pageAnimationWhite,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from "../styles/animation";

const OurWork = () => {
  return (
    <Work
      variants={pageAnimationWhite}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <FrameOne variants={slider} />
        <FrameTwo variants={slider} />
        <FrameThree variants={slider} />
        <FrameFour variants={slider} />
      </motion.div>

      <Movie>
        <motion.h2 variants={fade}>The Athelete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    background: #23d997;
    height: 0.5rem;
    margin-bottom: 3rem;
  }
  img {
    height: 70vh;
    object-fit: cover;
    width: 100%;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const FrameOne = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const FrameTwo = styled(FrameOne)`
  background: #ff8efb;
`;
const FrameThree = styled(FrameOne)`
  background: #8ed2ff;
`;
const FrameFour = styled(FrameOne)`
  background: #8effa0;
`;

export default OurWork;

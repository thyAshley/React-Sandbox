import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import { pageAnimation, titleAnimation } from "../styles/animation";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "white" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle color="#d42121" />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle color="#1399d6" />
            <h2>Send an email.</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle color="#3c3c3c" />
            <h2>Social Media</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};
const ContactStyle = styled(motion.div)`
  color: #353535;
  min-height: 90vh;
  padding: 5rem 10rem;
`;
const Title = styled.div`
  margin: 4rem;
  color: black;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: ${(props) => props.color};
`;
const Social = styled(motion.div)`
  align-items: center;
  display: flex;
  h2 {
    margin: 2rem;
  }
`;
export default ContactUs;

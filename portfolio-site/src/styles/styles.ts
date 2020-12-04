import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  align-items: center;
  color: white;
  display: flex;
  justify-content: center;
  min-height: 90vh;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0 5rem 0;
    }
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    height: 80vh;
    object-fit: cover;
    width: 100%;
  }
  @media (max-width: 1300px) {
    object-fit: cover;
    max-height: 700px;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

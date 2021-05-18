import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Wrapper } from "../styles/Bases";

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  repeat: Infinity,
  ease: "easeInOut",
};

const loadingContainer = {
  width: "2rem",
  height: "2rem",
  display: "flex",
  justifyCenter: "center",
  alignItems: "center",
};

const loadingCircle = {
  display: "block",
  width: "1rem",
  height: "1rem",
  background: "#ff385c",
  borderRadius: "50%",
  paddingRight: "10px",
  marginRight: "5px",
};

const Loading = () => {
  return (
    <Wrapper>
      <LoadingContainer>
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
        </motion.div>
      </LoadingContainer>
    </Wrapper>
  );
};

export default Loading;

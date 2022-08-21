import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
`;

const boxVariants = {
  hover: { scale: 2, rotateZ: 90 },
  tap: { scale: 1, borderRadius: "100px" },
  drag: {
    backgroundColor: "rgba(238, 82, 83,1.0)",
    transition: { duration: 5 },
  },
};

function App() {
  return (
    <Wrapper>
      <Box
        drag
        variants={boxVariants}
        whileDrag="drag"
        whileHover="hover"
        whileTap="tap"
      />
    </Wrapper>
  );
}

export default App;

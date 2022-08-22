import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";

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
  hover: { rotateZ: 180 },
  click: { borderRadius: "100px" },
};

function App() {
  const x = useMotionValue(0);
  return (
    <Wrapper>
      <button onClick={() => x.set(200)}>click me</button>
      <Box style={{ x }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;

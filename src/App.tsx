import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: felx;
  justify-content: center;
  font-size: 30px;
  align-items: center;
  position: absolute;
  top: 50px;
`;

function App() {
  return (
    <Wrapper>
      <Box></Box>
    </Wrapper>
  );
}

export default App;

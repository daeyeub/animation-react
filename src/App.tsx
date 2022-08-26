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
const box = {
  initial: {
    opacity: 0,
    x: 500,
    scale: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
    x: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
    x: -500,
    transition: { duration: 0.5 },
  },
};
function App() {
  const [visible, setVisible] = useState(2);
  const nextPlease = () => {
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box
              variants={box}
              initial="initial"
              animate="visible"
              exit="exit"
              key={i}
            >
              {i}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <button onClick={nextPlease}>Next</button>
      <button onClick={prevPlease}>prev</button>
    </Wrapper>
  );
}

export default App;

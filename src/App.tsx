import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 50vw;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const datas = [
  { id: "1", text: "hello" },
  { id: "2", text: "hi" },
  { id: "3", text: "danbi" },
  { id: "4", text: "daeyeub" },
];
function App() {
  const [test, setTest] = useState({} as any);
  const [over, setOver] = useState(false);
  return (
    <Wrapper>
      <Grid>
        {datas.map((data) => (
          <Box
            drag
            onClick={() => {
              setTest(data);
              setOver(true);
            }}
            key={data.id}
            layoutId={data.id}
          >
            {data.text}
          </Box>
        ))}
      </Grid>
      <AnimatePresence>
        {over ? (
          <Overlay
            onClick={() => setOver(false)}
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Box style={{ width: 600, height: 400 }} layoutId={test.id}>
              {test.text}
            </Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;

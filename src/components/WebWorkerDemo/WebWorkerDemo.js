import React, { useState } from "react";

import "./styles.css";

const incrementWithoutWorker = (score, setScore) => {
  let toAdd = 0;
  for (let i = 0; i < 10000; i++) {
    for (let j = 0; j < 100000; j++) {
      toAdd++;
    }
  }
  setScore((score) => score + toAdd);
};

const WebWorkerDemo = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="web-worker-demo">
      <div className="score">{score}</div>
      <div className="demo-buttons">
        <button onClick={() => incrementWithoutWorker(score, setScore)}>
          Add in same thread
        </button>
      </div>
    </div>
  );
};

export default WebWorkerDemo;

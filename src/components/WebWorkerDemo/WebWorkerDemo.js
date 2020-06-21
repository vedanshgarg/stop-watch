import React, { useEffect, useState } from "react";

import "./styles.css";

const WebWorkerDemo = ({ worker }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    worker.addEventListener("message", (event) => {
      setScore(event.data);
    });
  }, []);

  const incrementWithoutWorker = () => {
    let toAdd = 0;
    for (let i = 0; i < 10000; i++) {
      for (let j = 0; j < 100000; j++) {
        toAdd++;
      }
    }
    setScore((score) => score + toAdd);
  };

  const incrementWithWorker = () => {
    worker.postMessage(score);
  };

  return (
    <div className="web-worker-demo">
      <div className="score">{score}</div>
      <div className="demo-buttons">
        <button onClick={incrementWithoutWorker}>Add using Main thread</button>
        <button onClick={incrementWithWorker}>
          Add using WebWorker thread
        </button>
      </div>
    </div>
  );
};

export default WebWorkerDemo;

import React, { useEffect, useState } from "react";

import WebWorker from "../WebWorker/WebWorker";
import incrementWorker from "../../utils/incrementWorker";

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

const incrementWithWorker = (score, worker) => {
  worker.postMessage(score);
};

const WebWorkerDemo = () => {
  const [score, setScore] = useState(0);
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    setWorker(new WebWorker(incrementWorker));
  }, []);

  useEffect(() => {
    if (worker) {
      worker.addEventListener("message", (event) => {
        setScore(event.data);
      });
    }
  }, [worker]);

  return (
    <div className="web-worker-demo">
      <div className="score">{score}</div>
      <div className="demo-buttons">
        <button onClick={() => incrementWithoutWorker(score, setScore)}>
          Add in Main thread
        </button>
        <button onClick={() => incrementWithWorker(score, worker)}>
          Add in WebWorker thread
        </button>
      </div>
    </div>
  );
};

export default WebWorkerDemo;

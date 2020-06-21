import React, { useEffect, useState } from "react";

import "./styles.css";

const WebWorkerDemo = ({ worker }) => {
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    worker.addEventListener("message", (event) => {
      setScore(event.data);
      setLoading(false);
    });
  }, []);

  const incrementWithoutWorker = () => {
    setLoading(true);
    let toAdd = 0;
    for (let i = 0; i < 10000; i++) {
      for (let j = 0; j < 100000; j++) {
        toAdd++;
      }
    }
    setScore((score) => score + toAdd);
    setLoading(false);
  };

  const incrementWithWorker = () => {
    setLoading(true);
    worker.postMessage(score);
  };

  return (
    <div className="web-worker-demo">
      <div className={loading ? "score loading" : "score"}>{score}</div>
      <div className="demo-buttons">
        <button onClick={incrementWithoutWorker} disabled={loading}>
          Add using Main thread
        </button>
        <button onClick={incrementWithWorker} disabled={loading}>
          Add using WebWorker thread
        </button>
      </div>
    </div>
  );
};

export default WebWorkerDemo;

import React, { useState, useEffect } from "react";

const StopWatch = ({ button, active, clearInputs }) => {
  const [seconds, setSeconds] = useState(0);
  const [min, setMin] = useState(0);
  useEffect(() => {
    let watch = setInterval(() => {
      if (active) {
        setSeconds(seconds + 1);
        if (seconds === 5) {
          setMin(min + 1);
          setSeconds(0);
        }
      }
    }, 1000);
    return () => {
      clearInterval(watch);
    };
  });

  const Reset = () => {
    if (!active) {
      setSeconds(0);
      setMin(0);
    }
  };

  console.log(seconds);
  return (
    <div className="App">
      <h1>StopWatch</h1>

      <div className="timer">
        <h1 className="time">
          {min}m {seconds}s
        </h1>
        <div className="stopWatchButtons">
          <div className="button">{button()}</div>
          <button onClick={Reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;

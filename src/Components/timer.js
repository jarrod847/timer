import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Timer = ({ button, active, setActive }) => {
  const [seconds, setSeconds] = useState(0);
  const [min, setMin] = useState(0);
  const audio = new Audio("itslit.mp3");
  const changeSec = (e) => {
    if (!active) {
      setSeconds(e.target.value);
    }
  };
  const changeMin = (e) => {
    if (!active) {
      setMin(e.target.value);
    }
  };
  useEffect(() => {
    document.title = `Time ${min}m ${seconds}s`;
  });

  const playAux = (e) => {
    audio.play();
  };
  const clearInput = () => {
    document.getElementById("inputs").reset();
  };

  useEffect(() => {
    let clock = setInterval(() => {
      if (active) {
        if ((min >= 1 && seconds === 0) || seconds === "") {
          console.log("seconds");
          setMin(min - 1);
          setSeconds(59);
        } else if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (min === 0 && seconds === 0) {
          setActive(false);
          audio.play();
          clearInput();
        }
      } else {
        setSeconds(seconds);
      }
    }, 1000);
    return () => {
      clearInterval(clock);
    };
  }, [min, seconds, active]);

  return (
    <div className="App">
      <h1>Timer</h1>
      <div className="timer">
        <h1 className="time">
          {min}m {seconds}s
        </h1>
        <form id="inputs">
          <label>
            Min :
            <input
              name="min"
              defaultValue=""
              value={time.min}
              onChange={changeMin}
            />
          </label>
          <label>
            Sec :
            <input
              name="seconds"
              defaultValue=""
              value={time.seconds}
              onChange={changeSec}
            />
          </label>
        </form>
        <div className="button">{button()}</div>
      </div>
    </div>
  );
};

export default Timer;

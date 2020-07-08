import React, { useState, useEffect } from "react";
import "./scss/timer.scss";
import Timer from "./Components/timer";
import StopWatch from "./Components/stopwatch";

function App() {
  const [active, setActive] = useState(false);
  const [cur, setCur] = useState(true);

  const toggle = () => {
    setActive(!active);
  };

  const curApp = () => {
    setCur(!cur);
  };

  const button = () => {
    if (active) {
      return (
        <button onClick={toggle} style={{ background: "red" }}>
          stop
        </button>
      );
    } else if (!active) {
      return (
        <button onClick={toggle} style={{ background: "green" }}>
          start
        </button>
      );
    }
  };

  const switchClock = () => {
    if (!cur) {
      return (
        <div>
          <StopWatch active={active} setActive={setActive} button={button} />
          <h3 className="switch" onClick={curApp}>
            Timer
          </h3>
        </div>
      );
    } else if (cur) {
      return (
        <div>
          <Timer active={active} setActive={setActive} button={button} />
          <h3 className="switch" onClick={curApp}>
            StopWatch
          </h3>
        </div>
      );
    }
  };

  return <div className="App">{switchClock()}</div>;
}

export default App;

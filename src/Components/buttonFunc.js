import React from "react";
export const button = (active, toggle) => {
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

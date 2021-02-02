import React, { useState, useEffect } from "react";

const getTimeString = () => {
  const date = new Date(Date.now()).toLocaleDateString();
  return date;
};

const ClockApp = () => {
  const [time, setTime] = useState(getTimeString());

  return (
    <div className="main">
      <div className="mainDiv">
        <h1 className="section-title">React Clock</h1>
        <hr className="explanation" />
        <p>{time}</p>
      </div>
    </div>
  );
};
export default ClockApp;

import React, { useState, useEffect, useRef } from "react";

const StopWatch = () => {
  const startTimeRef = useRef(0);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  return (
    <div className="main">
      <div className="mainDiv">
        <h1 className="section-title">React Stopwatch!</h1>
        <p>
          {Math.floor(time / 1000 / 60).toString()} :
          {Math.floor(time / 1000 % 60).toString()}
        </p>
        {
        isRunning ? 
          <button onClick={ stop }>Stop</button>
         : 
          <button onClick={ start }>Start</button>
        }
        {
        isRunning ? 
          <button onClick={ lap }>Lap</button>
         : 
          <button onClick={ reset }>Reset</button>
        }
        {laps.map((time) => {
          return (
            <p>
              {Math.floor(time / 1000 / 60).toString()} :
              {Math.floor(time / 1000 % 60).toString()}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default StopWatch;

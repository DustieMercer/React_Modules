import React, { useState, useEffect } from 'react';

const TimerApp = () => {
    const [secondsElapsed, setSecondsElapsed] = useState(0);
    const tick = () => setSecondsElapsed(secondsElapsed + 1);
    useEffect(() => {
        let interval = setInterval(() => tick(), 1000);
        console.log(interval);
        return () => clearInterval(interval);
    });
    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1 className='section-title'>React Timer</h1>
                <div>SecondsElapsed: {secondsElapsed}</div>
            </div>
        </div>
    );
};

export default TimerApp;
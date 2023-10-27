import React, { useEffect, useState } from "react";
import './Clock.css';

function Clock() {
    const [time, setTime] = useState('');
    
    useEffect(() => {
        const intervalID = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], {timeStyle: "short"}));
        }, 1000);
        return () => clearInterval(intervalID);
    }, [])

    return (
        <div className='Clock'>
            <h1>{time}</h1>
        </div>
    )
}

export default Clock;
import React, {useState} from 'react';

import './Timer.css';

function Timer() {
    const date = new Date();
    date.setMinutes( date.getMinutes() + 10 );
    const hours = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    const [time, setTime] = useState({hours:hours,mins:mins,secs:secs})
        
    function getTime (){
        const date = new Date();
        const hours = date.getHours();
        const mins = date.getMinutes();
        const secs = date.getSeconds();
        setTime({hours:hours,mins:mins,secs:secs})
    }
    setInterval(getTime, 600000)


    return (
        <div className="timerBox">
            <div className="timerText">다음 수강 신청 연습</div>
            {time.hours < 10 ? `0${time.hours}`:`${time.hours}`}:{time.mins < 10 ? `0${time.mins}`:`${time.mins}`}:{time.secs < 10 ? `0${time.secs}`:`${time.secs}`}
        </div>
    )
}

export default Timer

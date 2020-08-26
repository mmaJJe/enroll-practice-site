import React from 'react'

import './Jumbotron.css'

import { useEnrollCodeState } from '../../context/EnrollCodeContext'

function Jumbotron() {

    const nums = useEnrollCodeState();

    return (
        <div className="jumbotron">
            <div className="jumbotronTitle">수강 신청 연습 번호</div>
            <div className="classNameNumbers">
                {nums.map(num=>(<div>{num.code}</div>))}
            </div>
        </div>
    )
}

export default Jumbotron

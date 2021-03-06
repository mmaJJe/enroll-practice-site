import React, {useState} from 'react'

import "./Results.css"
import {RadioButtonUnchecked, Clear} from '@material-ui/icons';


function Results({success,code, rank}) {
     
    const [resultOpen, setResultOpen] = useState(false)

    const handleResultOpen =()=> {
        if (resultOpen){
            setResultOpen(false)
        } else {
            setResultOpen(true)
        }
    }
    return (
        <div className="resultsWrap" onClick={handleResultOpen}>
            <div className={`results ${resultOpen && "open"}`}>
                <div className="summary">
                    <div className="icon">
                            {success ? <RadioButtonUnchecked/> : <Clear/>}
                        </div>
                    <div className="code">{code}</div>
                </div>
                <div className="detail">
                    <div className="rank">rank: {rank}</div>
                    <div className="total">total: 50</div>
                </div>
            </div>
        </div>
    )
}

export default Results

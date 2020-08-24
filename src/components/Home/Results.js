import React, {useState} from 'react'

import "./Results.css"
import {RadioButtonUnchecked, Clear} from '@material-ui/icons';


function Results() {
     
    const [open, setOpen] = useState(false)

    const handleOpen =()=> {
        // console.log(open)
        if (open){
            // console.log("close")
            setOpen(false)
        } else {
            // console.log("open")
            setOpen(true)
        }
    }
    return (
        <div className="resultsWrap" onClick={handleOpen}>
            <div className={`results ${open && "open"}`}>
                <div className="summary">
                    <div className="icon">
                        {/* <RadioButtonUnchecked/> */}
                        <Clear/>
                        </div>
                    <div className="code">1231</div>
                </div>
                <div className="detail">
                    <div className="rank">rank: 14</div>
                    <div className="total">total: 50</div>
                </div>
            </div>
        </div>
    )
}

export default Results

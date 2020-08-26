import React from 'react'

import './ResultBox.css'
import Results from './Results'

import { useEnrollCodeState } from '../../context/EnrollCodeContext'

function ResultBox() {

    const nums = useEnrollCodeState()

    return (
        <div className="resultBox">
            {nums.map(num=>
                <Results code={num.code} success={num.success} rank={num.rank}/>
            )}
        </div>
    )
}

export default ResultBox

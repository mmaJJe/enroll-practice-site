import React from 'react'

import './ResultBox.css'
import Results from './Results'


function ResultBox() {
    return (
        <div className="resultBox">
            <Results success={true}/>
        </div>
    )
}

export default ResultBox

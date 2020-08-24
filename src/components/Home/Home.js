import React from 'react'

import Jumbotron from './Jumbotron';
import ResultBox from './ResultBox';
import Timer from './Timer';

import './Home.css'

function Home() {
    return (
        <div className="homeContent">
            <Jumbotron/>
            <Timer/>
            <ResultBox/>
        </div>
    )
}

export default Home

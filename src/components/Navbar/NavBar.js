import React from 'react'

import NavButton from "./NavButton"
import {Home, Ballot} from '@material-ui/icons';

import "./NavBar.css"


function NavBar() {
    return (
        <div className="NavBar">
            <div className="navButtons">
                <NavButton Icon={Home} where=""/>
                <NavButton Icon={Ballot} where="enroll"/>
            </div>
        </div>
    )
}

export default NavBar

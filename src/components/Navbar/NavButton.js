import React from 'react'

import IconButton from '@material-ui/core/IconButton';

import { NavLink } from 'react-router-dom';

import "./NavButton.css"


function NavButton({Icon, where}) {
    return (
        <NavLink to={`/${where}`} exact={true} activeClassName="selected">
            <IconButton className="navBtn">
                <Icon className="Icon" />
            </IconButton>
        </NavLink>
    )
}



export default NavButton

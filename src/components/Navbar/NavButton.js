import React from 'react'

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip'

import { NavLink } from 'react-router-dom';

import "./NavButton.css"


function NavButton({Icon, where, title}) {
    return (
        <NavLink to={`/${where}`} exact={true} activeClassName="selected">
            <Tooltip title={title} placement="right">
                <IconButton className="navBtn">
                    <Icon className="Icon" />
                </IconButton>
            </Tooltip>
        </NavLink>
    )
}



export default NavButton

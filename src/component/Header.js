import React from 'react'
import '../css/Header.css';
import { IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useStateValue } from '../StateProvider';

function Header() {
    
    const [{phone}, dispatch] = useStateValue();

    const signOut = () => {
        dispatch({
            type: "LOGOUT",
            token: 0,
            phone: ''
        })
        localStorage.clear();

    }
    return (
        <nav className="header">
            <div className="con1">
                <p className="pre_order">Pre Order From</p>
                <p className="place_name">Connaught Place</p>
            </div>

            <div className="logout__btn">
                <IconButton onClick={signOut}>
                    <ExitToAppIcon />
                </IconButton>
            </div>
            
        </nav>
        
    )
}

export default Header

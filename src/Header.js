import React from "react";
//icon
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <AccountCircleIcon className="header_avatar" />
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search" />
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
    );
}

export default Header;

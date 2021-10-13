import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <nav className="header_sec">
            <Link to='/login'>
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
        
        <input type="text" className="header_searchinput" />
        <SearchIcon className="header_searrchicon"/>
        </nav>
    )
}

export default Header;

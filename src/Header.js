import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStatevalue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{basket, user }] = useStatevalue();
    console.log("basket", basket);

    const login = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <nav className="header_sec">
            <Link to='/login'>
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="header_search">
                <input type="text" className="header_searchinput" />
                <SearchIcon className="header_searrchicon" />
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"} className="header_link">
                    <div onClick={login} className="header_option">
                        <span className="header_optionLineOne">Hello {user?.email}</span>
                        <span className="header_optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">returns</span>
                        <span className="header_optionLineTwo">& orders</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_basketcount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>

    )
}

export default Header;

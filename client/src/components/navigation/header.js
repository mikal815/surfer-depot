import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className="container">
            <div className="left">
                <div className="logo">
                    SURFER DEPOT
                </div>
            </div>
            <div className="right">
                <div className="top">
                    <div className="cart_link top-link">
                        <span>1</span>
                        <Link to="/dashboard/user/user_cart">
                            MY CART
                        </Link>
                    </div>

                    <Link to="/dashboard" className="top-link">
                        MY ACCOUNT
                    </Link>
                    <span className="top-link"
                        onClick={() => alert('log out')}
                    >
                        LOG OUT
                    </span>

                    <Link to="/sign_in" className="top-link">
                        LOG IN
                    </Link>

                </div>
                <div className="bottom">
                    <Link to="/" className="bottom-link">
                        HOME
                    </Link>
                    <Link to="/shop" className="bottom-link">
                        SHOP
                    </Link>
                </div>
            </div>
        </header>
    )

}

export default Header;
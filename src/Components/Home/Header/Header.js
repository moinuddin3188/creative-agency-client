import React from 'react';
import './Header.css';
import HeaderMain from './HeaderMain/HeaderMain';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <Navbar/>
                <HeaderMain/>
            </div>
        </div>
    );
};

export default Header;
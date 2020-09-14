import React from "react";
import logo from "../img/logo-04.png"

const Header = (props) => {
    return (
        <div className="header-background">
            <div className='header'>
                <div className='site-logo'>
                    <img src={logo} />
                </div>
                <div id='primary-menu'>
                    <nav>
                        <ul className="menu-main-menu">
                            <li><a href="/" className='active'>Home </a></li>
                            <li><a href="#home">einstein solutions</a></li>
                            <li><a href="#home">Forum </a></li>
                            <li><a href="#home">recourse </a></li>
                        </ul>
                    </nav>
                </div>
                <div id='right-menu'>
                    <ul className="menu-main-menu">
                        <li><a href="#home">my requests </a></li>
                        <li><a href="#home">my workspace </a></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};




export default Header;
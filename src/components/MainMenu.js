import React from "react";

const MainMenu = (props) => {
    return (
        <div className="menu-div">
            <ul className="main-menu">
                <li><a href="#" className="active">All</a></li>
                <li><a href="#">Einstein Solutions</a></li>
                <li><a href="#">Forum</a></li>
                <li><a href="#">Recourse </a></li>
            </ul>
            <div className="filters">Filters</div>
        </div>
    );
};




export default MainMenu;
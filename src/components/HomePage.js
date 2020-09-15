import React from "react";
import logo from "../img/logo-04.png"
import { findAll } from "./SearchMe"
import SearchForm from "./SearchForm"



class HomePage extends React.Component {

    onFormSubmit = async (searchData) => {
        let searchResults = await findAll(searchData);
        this.props.history.push({
            pathname: '/searchresult',
            state: { detail: searchResults.data }
        });
    };

    render() {
        return (<section className="homeBaner">

            <div className='header'>
                <div className='site-logo'>
                    <img src={logo} />
                </div>
                <div id='primary-menu'>
                    <nav>
                        <ul className="menu-main-menu">
                            <li><a href="#home" className='active'>Home </a></li>
                            <li><a href="#home">einstein solutions</a></li>
                            <li><a href="#home">Forum </a></li>
                            <li><a href="#home">resource </a></li>
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

            <div id="main-title">
                Explore with Journey Builder
            </div>

            <div id="search-einstein-model" className='vertical-center'>
                <SearchForm onFormSubmit={this.onFormSubmit} />
            </div>

        </section>

        );
    }

};

export default HomePage;
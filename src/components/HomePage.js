import React from "react";
import logo from "../img/logo-04.png"


class HomePage extends React.Component {
    render() {
        return (<section className="homeBaner">

            <div className='header'>
                <div className='site-logo'>
                    <img src={logo} />
                </div>
                <div id='primary-menu'>
                    <nav>
                        <ul class="menu-main-menu">
                            <li><a href="#home" className='active'>Home </a></li>
                            <li><a href="#home">einstein solutions</a></li>
                            <li><a href="#home">Forum </a></li>
                            <li><a href="#home">recourse </a></li>
                        </ul>
                    </nav>
                </div>
                <div id='right-menu'>
                    <ul class="menu-main-menu">
                        <li><a href="#home">my requests </a></li>
                        <li><a href="#home">my workspace </a></li>

                    </ul>

                </div>
            </div>

            <div id="main-title">
                Explore with journery builder
            </div>

            <div id="search-einstein-model" className='vertical-center'>
                <form>
                    <span style={{ width: "40%" }}>
                        <label for="einstein_model">Which einstein model i can use to</label>
                        <input type="text" id="einstein_model" name="einstein_model" placeholder="Enter your internet" />
                    </span>
                    <span>
                        <label for="so_as_to">so as to</label>
                        <select>
                            <option selected>maximum</option>
                        </select>
                    </span>
                    <span>

                        <select>
                            <option selected>my objectives</option>
                        </select>
                    </span>
                    <span>
                        <input type="submit" value='Show solutions' />
                    </span>
                </form>
            </div>

        </section>

        );
    }

};

export default HomePage;
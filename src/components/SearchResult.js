import React from "react";
import { Link } from 'react-router-dom'
import _ from "lodash";
import Header from "./Header"
import SearchForm from "./SearchForm"
import MainMenu from "./MainMenu"
import { findAll } from "./SearchMe"


class SearchResult extends React.Component {
    state = { search_data_results: {} };

    componentDidMount() {

        if (this.props.location.state) {
            this.setState({ search_data_results: this.props.location.state.detail });
        } else {
            this.props.location.state = {}
        }

    }

    onFormSubmit = async (searchData) => {

        this.props.location.state = {}
        let searchResults = await findAll(searchData);
        console.log("aaa", searchResults)
        this.setState({ search_data_results: searchResults.data });
    }

    render() {

        const results = this.state.search_data_results;
        let length = 0
        if (results) {

            length = Object.keys(results).length;

        }

        return (<section>
            <Header />
            <div className="searchBar" > < SearchForm onFormSubmit={this.onFormSubmit} /></div >
            <MainMenu />
            <div className="container" >

                <h2 className="einstein-solutions-header">Einstein Solutions ({length}) </h2>
                <p className='sortorder'>Sorted by : <span>Relevance Score</span></p>
                <div> {

                    _.map(results, (result, key) => (

                        <div className="search-result-container">
                            <div class={key == 0 ? "bookmark-active" : "bookmark"}></div>
                            <div className="search-result-container-img">
                                <div className="img-container">
                                    <img src={require('../img/a1.png')} width="60" /> </div></div>
                            <div className="search-result-container-result border-right">

                                <Link
                                    to={{
                                        pathname: "/productresults",
                                        state: { fromDashboard: true }
                                    }}
                                > <h2>{result.solution}</h2></Link>
                                <p>Extracts and contextualises Object in images</p>
                            </div>
                            <div className="search-result-container-adopter border-right">
                                <b>Adopted by</b> : Consumer Goods Cloud | 3 cases
                                <p style={{ "color": "#228DC5" }}>50 people talking about this</p>
                            </div>
                            <div className="search-result-container-relevance-score">
                                <p> Relevance score : 93%</p>
                                <b>Tags:</b> shelf, space, forecast, demand, inventory
                            </div>



                        </div>
                    ))
                } </div>
            </div>



        </section>);
    }

};

export default SearchResult;
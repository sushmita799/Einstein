import React, { Component } from "react";
import _ from "lodash";
import Header from "./Header"
import SearchForm from "./SearchForm"
import MainMenu from "./MainMenu"
import { findAll } from "./SearchMe"
import RenderResult from "./RenderResult"
import RenderNoResult from "./RenderNoResult"
import Sticky from 'react-sticky-state';

const scrollClass = {
    down: 'sticky-scroll-down',
    up: 'sticky-scroll-up'
}



class SearchResult extends React.Component {
    state = { search_data_results: {}, searchData: {} };

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
        this.setState({ search_data_results: searchResults.data, searchData: searchData });
    }



    render() {

        let results = this.state.search_data_results;
        let length = 0
        let display = <RenderNoResult />

        if (results) {
            length = Object.keys(results).length;
        }

        if (length != 0) {
            display = <RenderResult result={this.state.search_data_results} />
        }


        return (<section>
            <Header />
            <Sticky scrollClass={scrollClass}>
                <div className="searchBar top sticky">

                    < SearchForm onFormSubmit={this.onFormSubmit} mydata={this.props.location.state.searchData} /></div >
            </Sticky>

            <MainMenu />
            <div className="container" >

                <h2 className="einstein-solutions-header">Einstein Solutions ({length}) </h2>
                <p className='sortorder'>Sorted by : <span>Relevance Score</span></p>
                {display}

            </div>



        </section >);
    }

};

export default SearchResult;

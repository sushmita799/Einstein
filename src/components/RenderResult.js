import React from "react";
import { Link } from 'react-router-dom'
import _ from "lodash";

class RenderResult extends React.Component {

    state = { search_data_results: {} };

    componentDidMount(props) {

        this.setState({ search_data_results: this.props.result })

    }

    render(props) {

        _.map(this.props.result, (result, key) => {
            try {
                result.image = require(`../img/${result.solution.replace(/ /g, "_").toLowerCase()}.png`)
            } catch (err) {
                result.image = require('../img/a1.png');  //set default image path
            }

        });
        return (
            <div>{
                _.map(this.props.result, (result, key) => (


                    <div className="search-result-container">
                        <div className={key == 0 ? "bookmark-active" : "bookmark"}></div>
                        <div className="search-result-container-img">
                            <div className="img-container">

                                <img src={result.image} width="60" /> </div></div>

                        <div className="search-result-container-result border-right">

                            <p> <Link
                                to={{
                                    pathname: "/productresults",
                                    state: { fromDashboard: true }
                                }}
                            > <h2>{result.solution}</h2></Link></p>
                            <p>Extracts and contextualises Object in images</p>
                        </div>
                        <div className="search-result-container-adopter border-right">
                            <p> <b>Adopted by</b> : Consumer Goods Cloud | 3 cases</p>
                            <p style={{ "color": "#228DC5" }}>50 people talking about this</p>
                        </div>
                        <div className="search-result-container-relevance-score">
                            <p> Relevance score : 93%</p>
                            <b>Tags:</b> shelf, space, forecast, demand, inventory
                            </div>



                    </div>
                ))}</div>
        );
    }
};




export default RenderResult;

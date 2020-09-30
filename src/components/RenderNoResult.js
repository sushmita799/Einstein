import React from "react";
import { Link } from 'react-router-dom'
import _ from "lodash";

const RenderNoResult = (props) => {
    return (
        <div>
<p>Looks like we don't have the exact match. Why don't you try writing it differently? Here is what we suggest :
    <br/>
Try a different combination of your search intent and KPI!
<br/>
Meanwhile here are some solutions you might want to consider:</p>
            <div className="search-result-container">
                <div className="bookmark-active"></div>
                <div className="search-result-container-img">
                    <div className="img-container">
                        <img src={require('../img/a1.png')} width="60" /> </div></div>
                <div className="search-result-container-result border-right">

                    <p> <Link
                        to={{
                            pathname: "/productresults",
                            state: { fromDashboard: true }
                        }}
                    > <h2>einstein Object Detection</h2></Link></p>
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
        </div>
    );
};




export default RenderNoResult;
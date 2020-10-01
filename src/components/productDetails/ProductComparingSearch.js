import React from "react";


const ProductComparingSearch = (props) => {
    return (
        <div className="overviewContainer">
            <div className="main" style={{ overflow: "hidden" }} >
                <h2 style={{ paddingBottom: "3rem", color:"#0096CE", fontFamily:"arial black" }}> COMPARING SEARCH RESULTS</h2>
                <div className="compare">
                    <div className="compareField">
                        <div className="soultionName" style={{ marginTop: "2.6rem" }}>Solution</div>
                        <ul className="compareList">

                            <li>Function</li>
                            <li>Adopted by</li>
                            <li>No.of cases</li>
                            <li>Type of input</li>
                            <li>Data requirments</li>
                            <li>Type of model</li>
                            <li>Accuracy of model</li>
                        </ul>
                    </div>
                    <div className="compareResults">
                        <div className="compareData">
                            <div className="soultionImg"> <img src={require('../../img/search.png')} /></div>
                            <div className="soultionName">Einstein object Detection</div>
                            <ul className="compareListResult">

                                <li>Extracts and contexuailises object in images</li>
                                <li>Consumer Foods</li>
                                <li>3</li>
                                <li>Images (JPEG,PNG)</li>
                                <li>50 images (max. 5MB each)</li>
                                <li>Generalized linear model (GLM)</li>
                                <li>85%</li>
                            </ul>
                        </div>
                        <div className="compareData">
                            <div className="soultionImg">  <img src={require('../../img/scheme.png')} /></div>
                            <div className="soultionName">Einstein Image Classification</div>
                            <ul className="compareListResult">

                                <li>Recognises and classifies images</li>
                                <li>Consumer Foods</li>
                                <li>1</li>
                                <li>Images (JPEG,PNG)</li>
                                <li>50 images (max. 5MB each)</li>
                                <li>Generalized linear model (GLM)</li>
                                <li>78%</li>
                            </ul>
                        </div>
                        <div className="compareData">
                            <div className="soultionImg">  <img src={require('../../img/scheme.png')} /></div>
                            <div className="soultionName">Einstein Image Classification</div>
                            <ul className="compareListResult">

                                <li>Function</li>
                                <li>Adopted by</li>
                                <li>No.of cases</li>
                                <li>Type of input</li>
                                <li>Data requirments</li>
                                <li>Type of model</li>
                                <li>Accuracy of model</li>
                            </ul></div>
                        <div className="compareData">
                            <div className="soultionImg">  <img src={require('../../img/scheme.png')} /></div>
                            <div className="soultionName">Einstein Image Classification</div>
                            <ul className="compareListResult">

                                <li>Function</li>
                                <li>Adopted by</li>
                                <li>No.of cases</li>
                                <li>Type of input</li>
                                <li>Data requirments</li>
                                <li>Type of model</li>
                                <li>Accuracy of model</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="sidebar"></div>
        </div>
    );
};









export default ProductComparingSearch;
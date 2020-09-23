import React from "react";


const ProductOverview = (props) => {
    return (
        <div className="tabOverview">
            <div className="main">
                <h2>KEY FEATURES</h2>
                <iframe width="100%" height="500" style={{ border: "none" }} src="https://www.youtube.com/embed/kfOwPCBsOl4">
                </iframe>
                <p className="productDesc">
                    Einstein Object Detection detects, identifies, and locates objects in images. For instance, a field rep clicks the photo of a shelf in a retail store and can use it for object detection
                                    </p>
                <p className="productDesc"><span>Relevant for :</span> Commerce Good, Retail</p>
            </div>
            <div className="sidebar">

                <div className="related-resources">
                    <h2>Related resources</h2>
                    <ul>
                        <li> <img className="icon-document" src={require('../../img/files.png')} />Design guidelines </li>
                        <li> <img className="icon-document" src={require('../../img/files.png')} />Integration  guidelines </li>
                        <li> <img className="icon-document" src={require('../../img/download.png')} />Download UI kit</li>
                    </ul>
                </div>

                <div className="ask-me">
                    <h2>Ask the forum</h2>
                    <p>
                        See What the community is talking about Einstein Object Detection
                                            <hr />
                        <ul>
                            <li> <img className="icon-document" src={require('../../img/star.png')} />Suggested for you </li>

                        </ul>
                        <hr />
                        <ul className="suggestion">
                            <li>
                                <div className="suggestionDesc"> What are the considerations for images provided for detection ?</div>
                                <div className="follow">Follow</div>
                            </li>
                            <li>
                                <div className="suggestionDesc">  What are the APIs included in Einstein Vision?</div>
                                <div className="follow">Follow</div>
                            </li>
                        </ul>
                    </p>
                    <p style={{ textAlign: "center", paddingBottom: "3rem" }} className="more">
                        View more
                                        </p>

                </div>
            </div>
        </div >
    );
};




export default ProductOverview;
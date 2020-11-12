import React from "react";


const ProductIndustrySpecific = (props) => {
    return (
        <div className="tabOverview">
            <div className="main">
                <h2 style={{ paddingBottom: "3rem", color:"#5E9DD5" }}>Consumer Goods</h2>
                <iframe width="100%" height="500" style={{ border: "none" }} src="https://www.youtube.com/embed/mSWNvx4nYbU">
                </iframe>
                <p className="productDesc">
                    <span>Project Detail:</span> Optimise store visits and drive efficiency by providing field reps with essential data, inclusing store name, location, visit time, and previous visit details. To explore all the newest innovations from Consumer Goods Cloud in the Winter'20 release visit <a>https://wwww.salesforce.com/releases/winter-20/overview</a>
                                    </p>
                <p className="productDesc"><span>Project Team :</span> <a>carlo.andrews@salesforce.com, rohit.das@salesforce.com</a></p>

            </div>
            <div className="sidebar">

                <div className="related-resources">
                    <h2>Related resources</h2>
                    <ul>
                        <li> <img className="icon-document" src={require('../../img/files.png')} />Design guidelines </li>

                        <li> <img className="icon-document" src={require('../../img/download.png')} />Download UI kit</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};




export default ProductIndustrySpecific;
import React from "react";


const ProductIndustrySpecific = (props) => {
    return (
        <div className="tabOverview">
            <div className="main">
                <h2 style={{ paddingBottom: "3rem" }}>Consumer Goods</h2>
                <iframe width="100%" height="500" style={{ border: "none" }} src="https://www.youtube.com/embed/RsSQtBl_Dsk">
                </iframe>
                <p className="productDesc">
                    <span>Project Detail:</span> Einstein Object Detection detects, identifies, and locates objects in images. For instance, a field rep clicks the photo of a shelf in a retail store and can use it for object detection
                                    </p>
                <p className="productDesc"><span>Project Team :</span> Commerce Good, Retail</p>

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
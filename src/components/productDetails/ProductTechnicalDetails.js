import React from "react";
import Collapsible from "./Collapsible"


const ProductTechnicalDetails = (props) => {
    return (
        <div className="tabOverview">
            <div className="main">
                <h2 style={{ paddingBottom: "3rem", color:"#5E9DD5" }}>Technical Details</h2>
                <Collapsible title="Workflow" >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </Collapsible>
                <Collapsible title="How to set up Einstein  Vision in Salesforce" >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </Collapsible>
                <Collapsible title="Type of model use" >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </Collapsible>
                <Collapsible title="Einstein Object Detection Dataset Guidelines" >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </Collapsible>

            </div>
            <div className="sidebar">
                <div className="related-resources">
                    <h2>Related resources</h2>
                    <ul>
                        <li> <img className="icon-document" src={require('../../img/files.png')} />Update the dataset </li>
                        <li> <img className="icon-document" src={require('../../img/files.png')} />Build the model </li>

                    </ul>
                </div>
                <div className="related-resources">
                    <h2>Recommended learning</h2>
                    <ul>
                        <li> <img className="icon-document" src={require('../../img/files.png')} />Training the model </li>
                        <li> <img className="icon-document" src={require('../../img/files.png')} />Build the model </li>

                    </ul>
                </div>

                <div className="related-resources tooltips" >
                    <div className="tooltip-img">
                        <img className="icon-document " src={require('../../img/tooltip.png')} />
                    </div>

                    <p className="tooltip-content">
                        <span className="boldMe">TIP:</span> if your zip files is more than 20MB. to improve perfomance, we recommneded uploading it to a cloud location that doesn't require authentication.
                    </p>
                </div>


            </div>
        </div>
    );
};




export default ProductTechnicalDetails;
import React from "react";
import Header from "../Header"
import SearchForm from "../SearchForm"
import MobileImg from "../../img/EOD_image.png"
import Tabs from "./ProductTabs"
import ProductCollapsbleData from "./ProductCollapsbleData"
import ProductCustomerSatisfaction from "./ProductCustomerSatisfaction"
import ProductComparingSearch from "./ProductComparingSearch"
import ProductOverview from "./ProductOverview"
import ProductIndustrySpecific from "./ProductIndustrySpecific"
import ProductTechnicalDetails from "./ProductTechnicalDetails"
import $ from 'jquery';

class ProductResults extends React.Component {
    componentDidMount() {
        let $height = 0;
        $(".compareListResult li").each(function () {
            if (($(this).height()) > $height) {
                $height = $(this).height() + 20;
            }
        });
        $(".compareListResult li").each(function () {
            $(this).css("height", $height)
        });
        $(".compareList li").each(function () {
            $(this).css("height", $height)
        });
    }

    render() {
        return (
            <div>
                <section>
                    <Header />
                    <div className="searchBar" > < SearchForm onFormSubmit={this.onFormSubmit} /></div >
                    <div className="productContainer">
                        <div style={{ textAlign: "right" }}><a href="#" className="addCompare">Add to Compare</a> <a href="#" className="addWorkspace">Add to Workspace</a></div>
                        <div className="productContainer-results">
                            <div >
                                <h2 className="searchProductHeader">Einstein Object Detection</h2>
                                <p className="searchProductDescription">
                                    Recognises and counts multiple distinct objects within an image, providing granular details like the size and location of each object.
                        </p>
                            </div>
                            <div>
                                <img src={MobileImg} />
                            </div>
                        </div>
                    </div>
                    <hr className="hrShadow" />
                    <Tabs>
                        <div label="Overview">

                            <ProductOverview />

                        </div >
                        <div label="Industry Specific">
                            <ProductIndustrySpecific />
                        </div>
                        <div label="Technical Details">
                            <ProductTechnicalDetails />
                        </div>
                    </Tabs >
                    <div className="prdcontainer">
                        <div className="main" style={{ position: "relative" }}>
                            <h2>SEE CUSTOMER STORIES</h2>
                            <ProductCustomerSatisfaction />

                        </div>
                        <div className="sidebar"></div>
                    </div>
                    <div className="prdcontainer">
                        <div className="main" >
                            <h2 style={{ paddingBottom: "3rem" }}>FAQ</h2>

                            <ProductCollapsbleData />

                        </div>
                        <div className="sidebar"></div>
                    </div>
                    <div className="prdcontainer">
                        <div className="main" style={{ overflow: "hidden" }} >
                            <h2 style={{ paddingBottom: "3rem" }}> COMPARING SEARCH RESULTS</h2>

                            <ProductComparingSearch />

                        </div>
                        <div className="sidebar"></div>
                    </div>
                </section >
            </div >
        )
    }
}

export default ProductResults;
import React from "react";


const ProductCustomerSatisfaction = (props) => {
    return (
        <div>
            <p className="custStories">See more customer stories</p>
            <div className="cusStory">
                <div className="card">
                    <div class="card__image">
                        <img src={require('../../img/flag.png')} />
                    </div>
                    <div class="card__content">
                        <h2>CUSTOMER SATISFACTION</h2>
                        <p>How Icebreak used Einstein to achieve higher customer satification</p>
                    </div>

                </div>
                <div className="card">
                    <div class="card__image">
                        <img src={require('../../img/color.png')} />
                    </div>
                    <div class="card__content">
                        <h2>INVENTORY MANAGEMENT</h2>
                        <p>Crossmark adopts Einstein Vision</p>
                    </div>

                </div>
            </div>
        </div>
    );
};




export default ProductCustomerSatisfaction;
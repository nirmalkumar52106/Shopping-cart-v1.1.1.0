import React from "react";
import { FeedbackStar } from "../Heading/Feedback";

function Allitems(props) {
    return (
        <>
            <div className="items">
                <div className="itembxin">
                    <img src={props.itemimage} alt="item" />
                    
                    <div className="text">
                        <h6>{props.snackname}</h6>
                        <h4>{props.itemname}</h4>
                        <FeedbackStar />
                        <h3>By<span className="colorgreen">Nest Food</span></h3>
                        <div className="price">
                            <h1>{props.actualprice}</h1>
                            <h3>{props.pastprice}</h3>
                            <a href="cart"><i class="fa-solid fa-cart-shopping"></i><span>Add</span></a>
                        </div>
                    </div>
                </div>
                <div className="positionitem">
                    <h1>New</h1>

                </div>
            </div>

        </>
    )
}

export { Allitems }
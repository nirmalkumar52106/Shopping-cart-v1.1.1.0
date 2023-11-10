import React from "react";
import { FeedbackStar } from "../Heading/Feedback";

function Newproducts(props) {
    return (
        <>
            <div className="newproductin">
                <div className="newproductimg">
                    <img src={props.newproductimg} alt="productimg" />
                </div>
                <div className="neproducttextsection">
                    <h1>{props.newproducthead1}</h1>
                    <h3>{props.productrupee}</h3>
                    <FeedbackStar/>
                </div>

            </div>
        </>
    )
}

export { Newproducts }
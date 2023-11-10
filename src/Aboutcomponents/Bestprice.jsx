import React from "react";



function Bestprice(props) {
    return (
        <>
            <div className="bestpricemain">
                <div className="bestpricemainin">
                    <div className="imggsection">
                        <img src={props.bestpriceimage} alt="bestprice" />
                    </div>
                    <h1>{props.priceheading}</h1>
                    <p>{props.pricepara}</p>
                    <a href="readmore"><h3>{props.pricebutton}</h3></a>
                </div>
            </div>
        </>
    )
}

export { Bestprice }
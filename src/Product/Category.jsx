import React from "react";



function FoodCategory(props) {
    return (
        <>
            <div className="category">
                <div className="categoryin">
                    <img src={props.foodicon} alt="icon" /><span>{props.foodname}</span><span><h6>{props.foodcount}</h6></span>
                </div>
            </div>
        </>
    )
}

export { FoodCategory }
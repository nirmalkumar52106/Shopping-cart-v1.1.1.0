import React from "react";
import { Link } from "react-router-dom";

function Banner(props) {
    return ( 
        <>
            <div className="bannnermainin">
                <div className="bannerimg">
                    <img src={props.bannerimg} alt="bannerimg" />
                </div>
                <div className="bannertext">
                    <h3>{props.bannertexthead}</h3>
                    <Link to="/product"><button>Shop Now <span><i class="fa-solid fa-arrow-right"></i></span></button></Link>
                </div>
            </div>
        </>
    )
}

export { Banner }
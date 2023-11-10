import React from "react";
import { FeedbackStar } from "../Heading/Feedback";
import bringnatureimg from '../assests//images/banner-4.png'
import { useCart } from "react-use-cart";
import { Bringnature2Data } from "../Data";

// const products = [
//     {
//         id: 1,
//         name: "Malm",
//         price: 9900,
//         quantity: 1
//     },
   
   
// ];


function Bringnature() {
    return (
        <>
            <div className="Bring-nature">
                <div className="bringnatureimgsec">
                    <img src={bringnatureimg} alt="bannerimg" />
                </div>
            </div>
            <div className="bringnaturetext">
                <h1>Bring nature into your home</h1>
                <button>Shop Now<span><i class="fa-solid fa-arrow-right"></i></span></button>
            </div>
        </>
    )
}
export { Bringnature }


function BringNature2(props) {
    const { addItem } = useCart();
    return (
        <>
            <div className="bringnature">
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
                        </div>
                        {/* cart............*/}
                       
                                    <button><span><i class="fa-solid fa-cart-shopping"></i></span>Add to cart</button>
                           
                           
                        {/*cart end............. */}
                    </div>
                </div>
                <div className="positionitem">
                    <h1>New</h1>

                </div>
            </div>

        </>
    )
}

export { BringNature2 }
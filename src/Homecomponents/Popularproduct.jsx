import React from "react";
import { Link } from "react-router-dom";
import { FeedbackStar } from "../Heading/Feedback";

import { useState } from "react";
import Quantity from "./productActions/Quantity";
import { useCart } from "react-use-cart";
import { PopularData } from "../Data";
import { ToastContainer, toast } from "react-toastify";
function Popularproduct(props) {
    const { addItem ,inCart } = useCart()
    //price increase..................................................................
 
    const [product, setproduct] = useState(props.data);
    const [qty, setQty] = useState(1);
    function getQuantity(e) {
        setQty(e);
    }

    const notification=()=>{
        toast.success("Item Added")
    }
    
    const [filteritem,setfilteritem]=useState([...PopularData])

    
    const searchitems=(e)=>{
        const getvalue=e.target.value;
        const updatevalue=PopularData.filter((items)=>items.itemname.toLowerCase().startsWith(getvalue))
        if(getvalue){
            setfilteritem(updatevalue)
        } else{
            setfilteritem([...PopularData])
        }
    }
    return (
        <>
        <ToastContainer position="bottom-right"/>
        <div className="search-bar">
            <input placeholder="search here........." onChange={searchitems}  type="text"/>

        </div>
        <div className="itemflex">
            {
                filteritem.map((data,i)=>{
                    return(
                        <>
                <div key={i.id} className="itemspopular">
                    <div className="itembxin">
                        <Link to={`/productdetail/${data.id}`}><img src={data.itemimage} alt="imagew" /></Link>

                        <div className="text">
                            <h6>{data.snackname}</h6>
                            <h4>{data.itemname}</h4>
 
                            <FeedbackStar />

                            <h3><span className="colorgreen">Nest Food</span></h3>
                            <div className="price">
                                <div>
                                    <h1>{ data.price}</h1>
                                    <h3>{data.pastprice}</h3>
                                </div>
                                {(inCart(data.id)) ? <button  className="addcart-btn"><Link to="/cart">Go to cart</Link></button> : <button  className="addcart-btn" onClick={()=>{addItem(data);notification()}}>Add to cart</button>}

                                 {/* <Quantity getQuantity={getQuantity} /> */}
                               
                            </div>
                            <div className="positionitem">
                                <h1>New</h1>
                            </div>
                        </div>
                    </div>
                </div>
                        
                        
                        </>
                    )
                })
            }

        </div>
           
        </>
    )


}

export { Popularproduct }
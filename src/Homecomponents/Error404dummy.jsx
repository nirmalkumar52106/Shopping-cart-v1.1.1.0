import React, { useEffect, useState } from "react";

function Erorr() {
    const [setcart, sesetcart] = useState(0)

    const changesetcart = () => {
 
       setTimeout(() => {
        sesetcart(setcart+1)
       }, 2000);
    }
    return (
        <>
            <div className="dummy-eeror">
                <h6>{setcart}</h6>
                {
                    (setcart.length>0)?<><h3>purchase</h3></>:<><h1>Sold out</h1></>
                }


                <button onClick={changesetcart}> click me</button>
            </div>



        </>
    )
}

export { Erorr }
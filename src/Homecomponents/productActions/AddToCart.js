import { useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 function AddToCart() {

    const [added, setAdded] = useState(false);
    const [adding, setAdding] = useState(false);
    const addcart = () => {
        toast.success("Item  succesfully Added to Cart Wait your item is Loading....");
        let tmp = added;
        setAdded(!tmp);
        setAdding(true); 
        setTimeout(() => {
            setAdding(false);
        }, 3000);
    }
 

    return <>
        <ToastContainer position="top-center" />
        <button  onClick={addcart}  className="addcart-btn" >
            {adding && <><img className="loaingimg" src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="loading"
            /></>}
            {added ? 'Go to Cart' : "Add To Cart"}
            </button>
        
    </>
}
export{AddToCart}












// const [count, setcount] = useState(0);

// const Increment = () => {
//     if (count > 9) return 0;
//     else setcount(count + 1);
// };
// const Decrement = () => {
//     if (count < 2) return 0;
//     else setcount(count - 1);
// };

// <button className="increment-button" onClick={Increment}>+</button>
//         <h2 className="counter-word">{count}</h2>
        
//         <button className="decrement-button" onClick={Decrement}>-</button>



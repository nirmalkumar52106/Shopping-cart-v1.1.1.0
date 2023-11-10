import { useEffect, useState } from 'react';

export default function Quantity(props) {

    const [count, setCount] = useState(1);
    const increment = () => {
        if (count > 9) return 0;
        else setCount(count + 1);
        props.getQuantity(count);
    }
    const decrement = () => {
        console.log("count", count);
        if (count >= 2) {
            setCount(count - 1);
            console.log("count1", count);
            props.getQuantity(count);
        }
    }

    useEffect(() => {
        props.getQuantity(count);
    }, [count]);


    return <>
        <div className="Qty">
            <button className="increment-button" onClick={increment}>+</button>
            &nbsp;&nbsp; {count}&nbsp;&nbsp;
            <button className="decrement-button" onClick={decrement}>-</button>
        </div>
    </>
}
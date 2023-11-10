import { useState } from "react"

export default function Price (props) { 
    const [p, setP] = useState(props.price);
    const sendPrice = () => { 
        props.getPrice(p*props.qty);
    }
     return <> {p}
    </>
}
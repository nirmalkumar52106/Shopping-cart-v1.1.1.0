import React,{useEffect} from "react";

import { useState } from "react";
import { Home } from "../../screens/Home";



function Counter(){

const [count,setcount]=useState(0)
const a=<Home/>
const setchange=()=>{
    setcount(a+1)
   
}

useEffect(()=>{
    setcount(count+5)
}
)
    return(
        <>
        
        {count}
        <button onClick={setchange}>click me</button>
        </>
    )
}

export{Counter}
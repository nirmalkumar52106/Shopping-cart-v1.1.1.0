import React, { useState } from "react";


function Counter(){

    const [count,setcount]=useState(0)

let counter=()=>{
    setcount(count+1)
}

    return(
        <>
        <h1>your number{count}</h1>
        <button onClick={counter}>click me</button>
        
        </>
    )
}

export{Counter}
import React, { useEffect, useState } from "react";


function Counter(){

    const [count,setcount]=useState(0)

let counter=()=>{
    setcount(count+1)
}

 useEffect(()=>{
    document.title=`chats (${count})`
})

    return(
        <>
        <h1>your number{count}</h1>
        <button onClick={counter}>click me</button>
        
        </>
    )
}

export{Counter}
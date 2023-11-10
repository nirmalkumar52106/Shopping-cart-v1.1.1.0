import React, { useEffect, useState } from "react";


function WindowWidth(){

    const [windowwidth,Newwidth]=useState(window.screen.width)

const Actualwidth=()=>{
    Newwidth(window.innerWidth)
}
 
useEffect(()=>{
    window.addEventListener("resizer",Actualwidth)
    // windowwidth.removeEventListenor("resizer",Actualwidth)
}
)

    return(
        <>
        
        <h1>{windowwidth}</h1>
        
        </>
    )
}

export{WindowWidth}
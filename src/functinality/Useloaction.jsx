import React from "react";
import { useLocation } from "react-router-dom";
 

function Welcomee(){

    const Welcme= useLocation()
    return(
        <>
        
       
        {Welcme.pathname='/about'? <h2>Welcome to about us page</h2>:""}
       
        
        
        </>
    )
}

export{Welcomee}
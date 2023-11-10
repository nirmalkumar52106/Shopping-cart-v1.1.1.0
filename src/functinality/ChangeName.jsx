import React, { useState } from "react";


function ChangeName(){
const [name,changename]=useState({
    myname:"nirmal kumar"
})

let Newname=()=>{
    changename(...name,{myname:"nirmal tehrpriya"})
}

    return(
        <>
        <h1>name={name("nirmal t")}</h1>
       <button onClick={Newname}></button>
        
        </>
    )
}

export{ChangeName}
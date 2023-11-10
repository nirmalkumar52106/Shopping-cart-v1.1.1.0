import React from "react"
import { Link } from "react-router-dom"
// import { Link } from "react-router-dom"

function Menu(props) {
    return (
        <>


         
<Link to={props.url}><li className={props.list}>{props.menulist}</li></Link>
            

        </>
    )
}

export { Menu }

function Helpline(props) {
    return (
        <>
            <div className="helpline">
                <div className="helplinemain">
                    <div className="headphonelogo">
                        <img src={props.headphoneimg} alt="headphone" />
                    </div>
                    <div className="headphonetext">
                        <h1>{props.headphonehead1}</h1>
                        <h2>{props.headphonehead2}</h2>
                    </div>
                </div>
            </div>

        </>
    )
}

export { Helpline }


